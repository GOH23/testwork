"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { animate, motion } from 'framer-motion'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
export default function Header() {
    const [Openmenu, SetOpenMenu] = useState(false)
    const MediaFunction = () => {
        if (window.innerWidth > 650) {
            SetOpenMenu(false)
        }
    }
    useEffect(() => {
        const listener = () => MediaFunction();
        listener();
        window.addEventListener('resize', listener);
        return () => window.removeEventListener('resize', listener);
    }, [])
    return (<header>
        <motion.div animate={{ height: !Openmenu ? 80 : 250, transition: { duration: 1.25 } }} className="header_box1">
            <div className="header_brand_logo">
                <Image className="header_logo" src={'/images/logo.png'} width={'350'} height={'30'} alt="" />
                <button className="sm_menu_btn" onClick={() => { SetOpenMenu(!Openmenu) }}>{!Openmenu ? <AiOutlineMenu /> : <AiOutlineClose />}</button>
            </div>
            <motion.div className="sm_menu_box" animate={{ transition: { delay: !Openmenu ? 0 : 1.4 }, overflowY: !Openmenu ? 'hidden' : 'auto', }}>
                <motion.div animate={{ opacity: !Openmenu ? 0 : 1, transition: { delay: !Openmenu ? 0 : 1.55, duration: !Openmenu ? 0 : 1.25 }, pointerEvents: !Openmenu ? 'none' : 'all' }} className="sm_menu_item">
                <Link  href={'/'}>Главная</Link>
                </motion.div>
                <motion.div animate={{ opacity: !Openmenu ? 0 : 1, transition: { delay: !Openmenu ? 0 : 1.65, duration: !Openmenu ? 0 : 1.25 }, pointerEvents: !Openmenu ? 'none' : 'all' }} className="sm_menu_item">
                    <Link href={'/catalog'}>Товары</Link>
                </motion.div>
                <motion.div animate={{ opacity: !Openmenu ? 0 : 1, transition: { delay: !Openmenu ? 0 : 1.75, duration: !Openmenu ? 0 : 1.25 }, pointerEvents: !Openmenu ? 'none' : 'all' }} className="sm_menu_item">
                    <Link href={'/auth/login'}>Авторизация</Link>
                </motion.div>
                <motion.div animate={{ opacity: !Openmenu ? 0 : 1, transition: { delay: !Openmenu ? 0 : 1.85, duration: !Openmenu ? 0 : 1.25 }, pointerEvents: !Openmenu ? 'none' : 'all' }} className="sm_menu_item">
                    <Link href={'/auth/login'}>Пример меню</Link>
                </motion.div>
                <motion.div animate={{ opacity: !Openmenu ? 0 : 1, transition: { delay: !Openmenu ? 0 : 1.95, duration: !Openmenu ? 0 : 1.25 }, pointerEvents: !Openmenu ? 'none' : 'all' }} className="sm_menu_item">
                    <Link href={'/auth/login'}>Пример меню</Link>
                </motion.div>
                <motion.div animate={{ opacity: !Openmenu ? 0 : 1, transition: { delay: !Openmenu ? 0 : 2, duration: !Openmenu ? 0 : 1.25 }, pointerEvents: !Openmenu ? 'none' : 'all' }} className="sm_menu_item">
                    <Link href={'/auth/login'}>Пример меню</Link>
                </motion.div>
            </motion.div>
            <p className="text_dillers">Для диллеров</p>
            <a className="phone_button">Стать партнером</a>
            <p className="phone_number">+7(800)000-00-00</p>
            <a className="order_phone">Заказать звонок</a>
            <div className="login_button">
                <Link href={'/auth/login'}>Авторизация</Link>
            </div>
        </motion.div>
        <div className="header_box2">
            <div className="header_menu">
                <Link className="menu_btn" href={'/'}>Главная</Link>
                <Link className="menu_btn" href={'/catalog'}>Товары</Link>
                <Link className="menu_btn" href={'/catalog'}>Пример меню</Link>
                <Link className="menu_btn" href={'/catalog'}>Пример меню</Link>
                <Link className="menu_btn" href={'/catalog'}>Пример меню</Link>
                <Link className="menu_btn" href={'/catalog'}>Пример меню</Link>
            </div>
        </div>
    </header>)
}