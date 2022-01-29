import React from 'react'
import { Container } from 'react-bootstrap'
import { useSelector } from 'react-redux'

import { } from '../redux/Slice/productSlice'
import Btn from './Btn'
import ProductCard from './ProductCard'

const Popular = () => {

    const state = useSelector((state) => state.product)

    let list = state.products.filter(item => item.popular === 1)


    return (
        <div className="popular">
            <Container className="popular_container">
                <p className="popular_title">SẢN PHẨM PHỔ BIẾN</p>
                <div className="popular_row">
                    {
                        list.map((item, index) => (
                           <ProductCard key={index} img={state.imgs[item.id].name} name={item.name} price={item.price} slug={item.slug}/>
                        ))
                    }
                </div>
                <Btn name="Thêm Sản Phẩm..." link="/Menu" classname="btn_menu"/>
                
            </Container>
        </div>
    )
}


export default Popular
