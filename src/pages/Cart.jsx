import React, { useRef} from 'react'
import { Container, Button } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import Helmet from '../components/Helmet'
import Product_ModalCart from '../components/Product_ModalCart'
import {setName, setPhone, setAddress, setNote } from '../redux/Slice/modalSlice'

const Cart = () => {


    const state = useSelector(state => state.login)

    const dispatch = useDispatch()

    const URL = `http://localhost:3000/account/${state.id}`

    function Logout() {
        fetch(URL, {
        method: 'PATCH',
        body: JSON.stringify({
        logged: false
        }),
        headers: {
        'Content-type': 'application/json; charset=UTF-8'
        }
        })
        .then(response => response.json())
        .then(response => console.log('Success:', JSON.stringify(response)))
        .catch(error => console.error('Error:', error));
        window.location.href="/"
    }

    
    return (
        <Helmet title="Giỏ hàng">
           <Container>
               <p className="popular_title">GIỎ HÀNG</p>
               <div className="Cart_content">
                <div className="info_customer">
                        <h2 className="info_customer-title">Thông tin khách hàng</h2>
                        <div className="cart_logout">
                            <div className="cart_logout_info">
                                <div className="info_customer-content info_customer-div">
                                    <span className="info_customer-content-span">Họ và tên: <strong>*</strong></span>
                                    <input type="text" value={state.userName} onBlur={e => dispatch(setName(e.target.value))}/>
                                </div>
                                <div className="info_customer-content">
                                    <span>Điện thoại: <strong>*</strong></span>
                                    <input type="text" value={state.password} onBlur={e => dispatch(setPhone(e.target.value))}/>
                                </div>
                            </div>
                            <div>
                                <Button className="cart_btn " onClick={e => {e.charCode = 13; Logout(e)} } >Đăng xuất</Button>
                            </div>
                        </div>
                        <div className="info_customer-content">
                            <span>Địa chỉ: <strong>*</strong></span>
                            <input type="text" onBlur={e => dispatch(setAddress(e.target.value))} />
                        </div>
                        <div className="info_customer-content">
                            <span>Ghi chú: </span>
                            <input type="text" onBlur={e => dispatch(setNote(e.target.value))}/>
                        </div>
                    </div>
                    <Product_ModalCart />
               </div>
               
               
               


           </Container>
        </Helmet>
    )
}

export default Cart