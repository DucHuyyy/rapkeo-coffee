import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'


import { plus, minus, remove, close, done, } from '../redux/Slice/modalSlice.js'
const Product_ModalCart = () => {

    const state_modal = useSelector((state_modal) => state_modal.modal)
    
    const state_product = useSelector((state_product) => state_product.product)
    
    const dispatch = useDispatch()    

    function modalToOrder(){ 
        dispatch(done())
        if (window.location.href === 'http://localhost:4000/Cart') {
            fetch(`http://localhost:3000/orders`, {
                method: 'POST',
                body: JSON.stringify({
                    name: state_modal.name,
                    phone: state_modal.phone,
                    address: state_modal.address,
                    notes: state_modal.note,
                    product: state_modal.orders,
                    total_money: state_modal.total_money
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                    }
                    })
            .then(response => response.json())
            .then(response => console.log('Success:', JSON.stringify(response)))
            .catch(error => console.error('Error:', error));
            alert('Đặt hàng thành công')
            window.location.href="/"
        }  
}

    return (
        <div className="ModalCart-product">
            <div className="ModalCart_title">Thông tin giỏ hàng</div>
            <div className="ModalCart_container">
                <div className="ModalCart_row">
                    <div className="ModalCart_col erase">Xóa</div>
                    <div className="ModalCart_col img">Hình ảnh</div>
                    <div className="ModalCart_col name">Tên</div>
                    <div className="ModalCart_col price">Đơn giá</div>
                    <div className="ModalCart_col quantily">Số lượng</div>
                </div>

            {
                state_modal.orders.map((item, index) => (
                    <div className="ModalCart_row" key={index}>
                        <div className="ModalCart_col ModalCart_item erase">
                            <i className='bx bxs-trash' onClick={() => dispatch(remove(index))}></i>
                        </div>
                        <div className="ModalCart_col ModalCart_item ModalCart_img img">
                            <img src={state_product.imgs[item.id].name} alt="" />
                        </div>
                        <div className="ModalCart_col ModalCart_item name">
                            {item.name}
                        </div>
                        <div className="ModalCart_col ModalCart_item price">
                            {item.price}đ
                        </div>
                        <div className="ModalCart_col ModalCart_item quantily">
                            <i className='bx bx-minus' onClick={() => dispatch(minus(index))}></i>
                            <span>{item.quantily}</span>
                            <i className='bx bx-plus' onClick={() => dispatch(plus(index))}></i>
                        </div>
                    </div>
                ))
            }

                <div className="ModalCart_tongtien">
                    <p>
                        Thành tiền: {
                        state_modal.total_money
                        }.000đ
                    </p>
                </div>

                        
                
                <div className="ModalCart_btn">

                            <Link to="/Menu" className="ModalCart_btn_tieptuc" onClick={() => dispatch(close())}>
                                Tiếp tục mua hàng
                            </Link>

                            <Link to="/Cart" className="ModalCart_btn_toCart" onClick={() => modalToOrder()}>
                                Đặt hàng
                            </Link>
                            
                </div>
            </div>
            
        </div>
    )
};

export default Product_ModalCart
