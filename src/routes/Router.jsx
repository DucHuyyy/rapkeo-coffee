import React from 'react'

import { Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Introduce from '../pages/Introduce'
import Menu from '../pages/Menu'
import Contact from '../pages/Contact'
import Cart from '../pages/Cart'
import Product from '../pages/Product'
import Login from '../pages/Login'
import Orders from '../pages/Orders'

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Menu" element={<Menu/>}/>
            <Route path="/Menu/:id" element={<Product/>}/>
            <Route path="/Introduce" element={<Introduce/>}/>
            <Route path="/Contact" element={<Contact/>}/>
            <Route path="/Cart" element={<Cart/>}></Route>
            <Route path="/Login" element={<Login/>}></Route>
            <Route path="/Orders" element={<Orders/>}></Route>

        </Routes>
    )
}

export default Router