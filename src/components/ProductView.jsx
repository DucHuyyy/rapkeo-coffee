import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'react-bootstrap' 
import { useDispatch, useSelector } from 'react-redux'

import { open } from '../redux/Slice/modalSlice'
import ModalCart from './ModalCart'

const ProductView = props => {

    const state_product = useSelector((state_product) => state_product.product)

    const dispatch = useDispatch()

    const getProductBySlug = (slug) => state_product.products.find(e => e.slug === slug)

    return (
        <Row className="productView">
            <p  className="productView_title popular_title">CHI TIẾT SẢN PHẨM</p>
            <Col className="productView_col_img">
                <img src={state_product.imgs[props.product.id].name} alt="lOI" className="productView_img"/>
            </Col>
            <Col className="productView_col_content">
                <p className="productView_name">{props.product.name}</p>
                <p className="productView_price">Giá: {props.product.price}đ</p>
                <div>
                    <p className="productView_content">{props.product.description}</p>
                </div>
                <div className="productView_order">
                    <btn className="productView_order_link" onClick={() => dispatch(open(getProductBySlug(props.product.slug)))}>
                        <i class="bx bxs-cart"></i>
                        Đặt mua
                    </btn>
                </div>
            </Col>
            <ModalCart/>
        </Row>
    )
}

ProductView.propTypes = {
    product: PropTypes.object
}

export default ProductView
