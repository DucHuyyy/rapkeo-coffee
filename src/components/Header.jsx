import React, { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Container, Row, Col, Offcanvas } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

import {addProductAsync, setObject_input, setSearching} from '../redux/Slice/productSlice'
import { addLoginAsync, setid, setUserName, setPassword, } from '../redux/Slice/loginSlice'
import { addOrdersAsync } from '../redux/Slice/ordersSlice'
import Search from './Search'
import logo from '../assets/img/logo.png'


const headerBottomItem = [
    {
        display: "Trang chủ",
        path: "/"
    },
    {
        display: "Giới thiệu",
        path: "/Introduce"
    },
    {
        display: "Menu",
        path: "/Menu"
    },
    {
        display: "Đơn hàng",
        path: "/Orders"
    },
    {
        display: "Liên hệ",
        path: "/Contact"
    }
]


const Header = () => {

    const state_login = useSelector((state_login) => state_login.login)

    const state_product = useSelector((state_product) => state_product.product)

    const dispatch = useDispatch()

    const { pathname } = useLocation()

    const headerRef = useRef(null)
    
    const activeNav = headerBottomItem.findIndex(e => e.path === pathname)
    
    const [show, setShow] = useState(false)

    const getProductByName = (name) => state_product.products.filter(item => {
        for (let i = 0; i < name.length; i++) {
            if (item.name[i] === name[i]) {
                continue;
            }
            else return;
        }
        return item;
    })

    let Login = 'Login'

    useEffect(() => {      
       const getAPI = async () => {
            await dispatch(addLoginAsync())
            await dispatch(addProductAsync())
            await dispatch(addOrdersAsync())
        }
        getAPI()
    }, [])

    for (let i = 0; i < state_login.accounts.length; i++) {
        if (state_login.accounts[i].logged === true)
        {
            dispatch(setid(state_login.accounts[i].id))
            dispatch(setUserName(state_login.accounts[i].userName))
            dispatch(setPassword(state_login.accounts[i].password))
            Login = `Xin chào, ${state_login.accounts[i].userName}`
        }
    }
    
    function logged() {
        if (Login.length > 5) {
            window.location.href="/Cart"
        }
    }

    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    function searchMobile() {
        dispatch(setObject_input(getProductByName(state_product.value_input.toUpperCase())))
        setShow(!show)
    }

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
                headerRef.current.classList.add("shrink")
            } else {
                headerRef.current.classList.remove("shrink")
            }
        })
        return () => window.removeEventListener("scroll")
    }, [])


    

    return (
       <div className="wrap_header"> 
           <div className="header" ref={headerRef}>
            <div className="header_top">
                <Container fluid className="header_top_container">
                    <Row>
                        <Col className="header_top_col" xs="5">
                            <i className="bx bxs-home"></i>
                            <span>45 đường số 7, khu đô thị An Phú An Khánh, Quận 2, Tp Thủ Đức</span>
                        </Col>
                        <Col className="header_top_col" xs="3">
                            <i className="bx bxs-time"></i>
                            <span>All Day: 7 AM to 5 PM</span>
                        </Col>
                        <Col className="header_top_col" xs="2">
                            <i className="bx bxs-gmail"></i>
                            <span>caferapkeo@gmail.com</span>
                        </Col>
                        <Col className="header_top_col" xs="2">
                            <Link to="/Login" className="header_top_col header_top_login" onClick={e => logged()}>
                                <span> {Login}</span>
                                <i className='bx bxs-log-in-circle'></i>
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </div>

                <div className="header_middle">
                    <Container fluid className="header_middle_container">         
                    <Row>
                        <Col className="header_middle_col icon_menu">
                            <i className='bx bx-menu' onClick={() => setShow(!show)}></i>
                        </Col>
                        <Col className="header_middle_col ">
                            <Link to='/' >
                                <img src={logo} alt="" className="logo" onClick={() => topFunction()}/>
                            </Link>
                        </Col>
                        <Col className="header_middle_col none_sm">
                            <i className='bx bxs-phone-call'></i>
                            <span>Call Us 076 922 0162</span>
                        </Col>
                        <Col className="header_middle_col">
                            <Link to="/Cart" className="header_middle_col">
                                <span className="none_sm">GIỎ HÀNG</span>
                                <i className='bx bxs-cart' ></i>
                            </Link>
                        </Col>
                        <Col className="header_middle_col none_sm">
                            <Search />  
                            <Link to="/Menu">
                                <i className='bx bx-search' onClick={() => dispatch(setObject_input(getProductByName(state_product.value_input.toUpperCase())))}></i>
                            </Link>
                        </Col>
                    </Row>
                    </Container>
                </div>

                <div className="header_bottom">
                    <Container className="header_bottom_container">
                        <div className="header_bottom_nav">
                        {
                            headerBottomItem.map((item, index) => (
                                <div
                                    key={index}
                                    className={`header_bottom_item ${index === activeNav ? 'active' : ''}`}
                                    onClick={() => dispatch(setSearching())}
                                >
                                    <Link to={item.path}>
                                        <span className={`header_bottom_nav_item`}>{item.display}</span>
                                    </Link>
                                </div>
                            ))
                            }
                        </div>      
                    </Container>
                </div>

                <Offcanvas show={show} onHide={() => setShow(!show)} className="header_offcanvas">
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>
                            <div >
                                <i className='bx bx-search header_offcanvas_search' onClick={() => searchMobile()}></i>
                                <Search />
                            </div>
                        </Offcanvas.Title>
                    </Offcanvas.Header>

                    <Offcanvas.Body>
                        {
                            headerBottomItem.map((item, index) => (
                                <Link to={item.path} key={index}>
                                    <div
                                        
                                        className={`header_bottom_item header_offcanvas_item ${index === activeNav ? 'active' : ''}`}
                                        onClick={() => setShow(!show)}>

                                        <span className={`header_bottom_nav_item`}>{item.display}</span>

                                    </div>
                                </Link>                         
                            ))
                        }
                    </Offcanvas.Body>
                </Offcanvas>
            </div>
       </div>
    )
}

export default Header
