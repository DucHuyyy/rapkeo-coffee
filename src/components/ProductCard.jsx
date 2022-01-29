import React from 'react'
import PropTypes from 'prop-types'
import { Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'


import { open } from '../redux/Slice/modalSlice'
import Btn from './Btn'


const ProductCard = props => {

    const state_product = useSelector((state_product) => state_product.product)
    
    const dispatch = useDispatch()

    const getProductBySlug = (slug) => state_product.products.find(e => e.slug === slug)

    return (
        <Row className="popular_item">
            <img src={props.img} />
            <p className="popular_item_name">{props.name}</p>
            <p className="popular_item_price">Giá: {props.price}Đ</p>
            <div>
                <Btn name="Đặt Mua" link="" classname="btn_order" onClick={() => dispatch(open(getProductBySlug(props.slug)))}/>
                <Btn name="Tìm hiểu Thêm" link={`${props.slug}`} classname="btn_info-item"/>
            </div>
        </Row>
    )
}

ProductCard.propTypes = {       
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
}

export default ProductCard
