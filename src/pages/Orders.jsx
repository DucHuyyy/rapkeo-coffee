import React, {useEffect} from 'react'
import { useSelector } from 'react-redux'

import Helmet from '../components/Helmet'
import List_Orders from '../components/List_Orders'

const Orders = () => {

    const state_login = useSelector((state_login) => state_login.login)

    useEffect(() => {
        if (state_login.userName !== 'admin') {
            alert('Hãy đăng nhập vào tài admin để xem đơn hàng. tài khoản: admin. số điện thoại: 1')
            window.location.href="/Login"
        }
    })

    return (
    <Helmet title="Đơn hàng">
        <List_Orders />
    </Helmet>
    )
}

export default Orders
