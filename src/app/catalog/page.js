'use client';
import { useContext, useState } from "react"
import { LoadingProvider } from "../../../Components/Static/Provider"
import CatalogCard from "../../../Components/CatalogCard";
import { AiOutlinePlus, AiOutlineClose } from 'react-icons/ai';
import {motion} from 'framer-motion'
export default function CatalogPage() {
    const { Tovars,Add } = useContext(LoadingProvider)
    const [OpenModalCont, SetOpen] = useState({
        status: false,
        title: '',
        price: 0.0,
        description: '',
        image: '',
        category: ''
    })
    function handleChange(e) {
        console.log(e.target.files);
        SetOpen({ ...OpenModalCont, image: URL.createObjectURL(e.target.files[0]) });
    }
    const AddProduct = ()=>{
        if(OpenModalCont.title.length==0 || OpenModalCont.price.length==0 || OpenModalCont.category.length==0 || OpenModalCont.image.length ==0){
            alert('Некоторые поля не заполнены')
        }
        else{
            Add(OpenModalCont)
        }
    }
    return (<main >
        <div className="wrapper" >
            <div className="catalog_box">
                {Tovars.map((el, ind) => {
                    return (<CatalogCard item={el} key={ind} />)
                })}
            </div>

        </div>
        <div className="create_box" onClick={() => { SetOpen({ ...OpenModalCont, status: !OpenModalCont.status }) }}>
            <AiOutlinePlus />
        </div>
        {OpenModalCont.status ? <div className="modal_back">
            <div  className="modal_cont">
                <div className="modal_header">
                    <p>Создание товара</p>
                </div>
                <div className="modal_desc">
                    <p>Название</p>
                    <input onChange={(el) => { SetOpen({ ...OpenModalCont, title: el.target.value }) }} />
                    <p>Описание</p>
                    <textarea className="textareaChange" onChange={(el) => { SetOpen({ ...OpenModalCont, description: el.target.value }) }} />
                    <p>Категория</p>
                    <input onChange={(el) => { SetOpen({ ...OpenModalCont, category: el.target.value }) }} />
                    <p>Цена</p>
                    <input onChange={(el) => { SetOpen({ ...OpenModalCont, price: el.target.value }) }} />
                    <p>Изображение</p>
                    <input type="file" onChange={handleChange}/>
                    <button type="button" onClick={()=>{AddProduct()}}>Добавить</button>
                </div>
                <div className="close_icon_button" onClick={() => { SetOpen({ ...OpenModalCont, status: false }) }}>
                    <AiOutlineClose />
                </div>

            </div>
        </div> : null}
    </main>)
}