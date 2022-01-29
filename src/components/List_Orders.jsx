import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Container, Row, Col } from 'react-bootstrap'
import { set_orders } from '../redux/Slice/ordersSlice'


const List_Orders = () => {

    const state_orders = useSelector((state_orders) => state_orders.orders)

    const dispatch = useDispatch()

    function remove(item, index) {
        fetch(`http://localhost:3000/orders/${item.id}`, {
            method: 'DELETE',
        })
        .then(response => response.json())
        .then(response => console.log('Success:', JSON.stringify(response)))
        .catch(error => console.error('Error:', error));
        dispatch(set_orders(index))
    }

  return <Container className='orders'>
            <Row>
                <Col className="orders_col" xs={1}>Xóa</Col>
                <Col className="orders_col" xs={2}>Tên</Col>
                <Col className="orders_col" xs={2}>Số điện thoại</Col>
                <Col className="orders_col" xs={3}>Sản Phẩm</Col>
                <Col className="orders_col" xs={2}>Ghi chú</Col>
                <Col className="orders_col" xs={2}>Thanh Toán</Col>
            </Row>
            {
                state_orders.orders.map((item, index) => (
                    <Row className="orders_row" key={index}>
                        <Col className="orders_col orders_list" xs={1}>
                            <i class='bx bxs-trash' onClick={() => remove(item, index)}></i>
                        </Col>
                        <Col className="orders_col orders_list " xs={2}>
                            {item.name}
                        </Col>
                        <Col className="orders_col orders_list" xs={2}>
                            {item.phone}
                        </Col>
                        <Col className="orders_col orders_product orders_list" xs={3}>
                            {
                                item.product.map((product, index) => (
                                    <p>{product.quantily + ` ` + product.name}</p>
                                ))
                            }
                        </Col>
                        <Col className="orders_col orders_product orders_list" xs={2}>
                            <p>{item.notes}</p>
                            <p>{item.address}</p>
                        </Col>
                        <Col className="orders_col orders_list" xs={2}>
                            {item.total_money + `,000đ`}
                        </Col>
                    </Row>
                ))
            }
        </Container>;
};

export default List_Orders;
