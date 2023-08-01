'use client';
import { CircularProgress } from "@mui/material";
import axios from "../Config/axios.js";
import { createContext, useEffect, useState } from "react"

export const LoadingProvider = createContext();
export default function Provider({ children }) {
    const [Loading, SetLoadingState] = useState(true);
    const [Tovars, SetTovars] = useState([]);
    const [viewedProducts, SetViewedProducts] = useState([])

    useEffect(() => {
        axios.get('/products').then((res) => {
            SetTovars(res.data)
        })
        let keys = JSON.parse(localStorage.getItem('viewedProducts')) || []
        keys.map((el) => {
            axios.get(`/products/${el}`).then((res) => {
                SetViewedProducts(items => [...items, res.data])

            })
        })
        SetLoadingState(false)
    }, [])

    const Change = (data) => {
        axios.put(`/products/${data.id}`, {
            title: data.title,
            price: data.price,
            description: data.description,
            image: data.image,
            category: data.category
        }).then((res) => {
            console.log(res.data)
            alert('Успешно сохранены данные')
        }).catch((res) => {
            alert('Ошибка сохранения данных')
        })
    }
    const Add = (ItemData) => {
        axios.post(`/products`, {
            title: ItemData.title,
            price: ItemData.price,
            description: ItemData.description,
            image: ItemData.image,
            category: ItemData.category
        }).then((res) => {
            console.log(res.data)
            alert('Успешно добавлены данные о товаре')
        }).catch((err) => {
            console.log(err)
            alert('Ошибка добавлены данных')
        })

    }
    const Delete = (id) => {
        axios.delete(`/products/${id}`).then((res) => {
            console.log(res.data)
            alert('Успешно удалены данные');
        }).catch((err) => {
            alert('Ошибка удаления данных')
        })
    }
    const Auth = (data) => {
        axios.post('/auth/login', { username: data.name, password: data.pass }).then((res) => {
            window.localStorage.setItem('token', res.data.token)
            alert('Вы успешно зашли в системy!')
        }).catch((err) => {
            alert('Ошибка входа')
        })
    }
    if (Loading) {
        return (<div className="loadingContainer">
            <CircularProgress sx={{ color: 'white' }} />
            <p>Загрузка данных</p>
        </div>)
    }
    return (<LoadingProvider.Provider value={{ Tovars, Auth, Change, Delete, Add, viewedProducts }}>
        {children}
    </LoadingProvider.Provider>)


}