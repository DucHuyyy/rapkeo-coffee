import React, { useRef, useEffect} from 'react'
import Helmet from '../components/Helmet'
import { Container, Row, Col } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'

import { setSearching, setObject_input } from '../redux/Slice/productSlice'
import ProductCard from '../components/ProductCard'
import CheckBox from '../components/CheckBox'
import ModalCart from '../components/ModalCart'

const Menu = () => {

    const MenuItem = [
        {
            name: "Cafe",
        },
        {
            name: "Trà",
        },
        {
            name: "Nước Ép",
        },
        {
            name: "Sinh Tố",
        },
        {
            name: "Sản phẩm khác",
        }
    ]
    
    const state_product = useSelector((state) => state.product)

    const dispatch = useDispatch()

    const MenuRef = useRef(null)

    let menu = null

    if (state_product.object_input.length >= 1) {
        menu = state_product.object_input.map((item, index) => (
            <ProductCard key={index} img={state_product.imgs[item.id].name} name={item.name} price={item.price} slug={item.slug}/> 
        ))  
    } else {
        menu = state_product.products.map ((item, index) => (
            <ProductCard key={index} img={state_product.imgs[item.id].name} name={item.name} price={item.price} slug={item.slug}/> 
        ))
    }

    const getFilterMenu = (type) => {
        if (type === null) {
            return state_product.products;
        }
        return state_product.products.filter(e => e.type === type);
    }

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
                MenuRef.current.classList.add("shrinkMenu")
            } else {
                MenuRef.current.classList.remove("shrinkMenu")
            }      
        })
        return () => window.removeEventListener("scroll")
    }, [])

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [menu])

    return (
    <Helmet title="Menu">
            <Container fluid className="menu">
                <Row>
                    <Col className="menu_filter" sm={2} >
                        <div className="menu_filter_widget" ref={MenuRef}>
                            <div className="menu_filter_widget_title">
                                MENU
                            </div>
                            <div className="menu_filter_widget_content">
                                {
                                    MenuItem.map((item, index) => (
                                        <div 
                                            key={index}
                                            className={`menu_filter_widget_content_item`}
                                            onClick={() => dispatch(setSearching())}
                                        >
                                            <CheckBox 
                                                label={item.name}
                                                onChange={label => {dispatch(setObject_input(getFilterMenu(label)))}}
                                            />
                                        </div>
                                    ))  
                                }
                            </div>
                        </div>
                    </Col>
                    <Col className="menu_content">
                        <Container className="menu_content_container">
                                <Row className="Menu_content_row">
                                    {menu}
                                </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
            <ModalCart/>
    </Helmet>
    )
}

export default Menu
