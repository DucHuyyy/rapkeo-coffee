import React from 'react'

import { BrowserRouter } from 'react-router-dom'

import Header from './Header'
import Footer from './Footer'

import Router from '../routes/Router'

const Layout = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Router/>
            <Footer/>
        </BrowserRouter>
    )
}

export default Layout