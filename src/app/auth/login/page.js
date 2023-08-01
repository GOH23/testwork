'use client';
import { useContext, useState } from "react"
import { LoadingProvider } from "../../../../Components/Static/Provider"

export default function LoginForm() {
    const {Auth} = useContext(LoadingProvider)
    const [UserData,SetUserData] = useState({
        name: '',
        pass: ''
    })
    return (<main className="AuthContainer">
        <form className="authForm">
            <img  src="/images/logo.png"/>
            <input placeholder="Ваш никнейм" onChange={(el)=>{
                SetUserData({...UserData,name: el.target.value})
            }}  />
            <input placeholder="Ваш пароль" type="password" onChange={(el)=>{
                SetUserData({...UserData,pass: el.target.value})
            }} />
            <button type='button' onClick={()=>{Auth(UserData)}}>Авторизация</button>
        </form>
    </main>)
}