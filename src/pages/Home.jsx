import React from 'react'
import Helmet from '../components/Helmet'
import Slider from '../components/Slider'
import Popular from '../components/Popular'
import ModalCart from '../components/ModalCart'
const Home = () => {
    return (
        <Helmet title="Trang Chủ">
            <Slider/>
                <Popular/>
            <ModalCart/>
        </Helmet>
    )
}

export default Home
