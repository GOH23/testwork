"use client";
import { useContext, useEffect, useState } from "react"
import { MdDriveFileRenameOutline } from 'react-icons/md'
import { AiFillDelete, AiOutlineStar } from 'react-icons/ai'
import { BsFillImageFill } from 'react-icons/bs'
import axios from "../../../../Components/Config/axios.js";
import { motion } from 'framer-motion';
import { LoadingProvider } from "../../../../Components/Static/Provider.js";
import { Box, Modal } from "@mui/material";
export default function ProductPage({ params }) {
    const { Change, Delete } = useContext(LoadingProvider)
    const [Product, SetProduct] = useState({})
    const [ChangeProduct, SetChangeProduct] = useState({
        status: false
    })

    function handleChange(e) {
        console.log(e.target.files);
        SetProduct({ ...Product, image: URL.createObjectURL(e.target.files[0]) });
    }
    useEffect(() => {
        axios.get(`/products/${params.id}`).then((res) => {
            SetProduct(res.data)
            let p = JSON.parse(localStorage.getItem('viewedProducts')) || []
            if(p.indexOf(res.data.id)!=-1){
                return
            }
            if (p.length == 5) {
                return
            }

            p.push(res.data.id)
            localStorage.setItem('viewedProducts', JSON.stringify(p))
        })
    }, [])
    return (<main>
        <div className="WrapperProductBox">
            <div className="ProductBox">
                <div className="product_img_container">
                    <img src={Product.image} />
                    <motion.div animate={{ backgroundColor: !ChangeProduct.status ? '#6a7a9700' : '#6a7a977c', transition: { duration: 2 } }} className="change_image_box">
                        {ChangeProduct.status ? <BsFillImageFill className="iconChangeImage" /> : null}
                        {ChangeProduct.status ? <input type="file" accept='image/*' className="fakeFileInput" value="" title=' ' onChange={handleChange} /> : null}
                    </motion.div>
                </div>
                {ChangeProduct.status ? <div className="change_desc">
                    <p>Смена названия</p>
                    <input defaultValue={Product.title} onChange={(el) => { SetProduct({ ...Product, title: el.target.value }) }} />
                    <p>Смена описания</p>
                    <textarea className="textareaChange" defaultValue={Product.description} onChange={(el) => { SetProduct({ ...Product, description: el.target.value }) }} />
                    <p>Смена категории</p>
                    <input defaultValue={Product.category} onChange={(el) => { SetProduct({ ...Product, category: el.target.value }) }} />
                    <p>Смена цены</p>
                    <input defaultValue={Product.price} onChange={(el) => { SetProduct({ ...Product, price: el.target.value }) }} />
                    <button onClick={() => { Change(Product) }} className="save_btn">Сохранить</button>
                </div> : <div className="product_desc">
                    <p>Название: {Product.title}</p>
                    <p>Описание: {Product.description}</p>
                    <p>Категория: {Product.category}</p>
                    <p>Цена: {Product.price} руб</p>
                </div>}
                <div className="tool_box">
                    <div className="change_box" onClick={() => {
                        SetChangeProduct({ status: !ChangeProduct.status })
                    }}>
                        <MdDriveFileRenameOutline />
                    </div>

                    <div className="delete_box" onClick={() => {
                        if (confirm("Вы уверены,что хотите удалить товар?")) {
                            Delete(Product.id)
                        } else {
                            return;
                        }
                    }}>
                        <AiFillDelete />
                    </div>

                </div>
                <div className="favorite_box">
                    <AiOutlineStar />
                </div>
            </div>

        </div>
    </main>)
}