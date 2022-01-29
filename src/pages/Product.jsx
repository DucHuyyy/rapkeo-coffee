import React from 'react'
import { useParams } from "react-router-dom";
import { Container, Row} from 'react-bootstrap'
import { useSelector } from 'react-redux'
import Helmet from '../components/Helmet'
import Popular from '../components/Popular'
import ProductView from '../components/ProductView'

const Product = () => {

    const state_product = useSelector((state_product) => state_product.product)
    let { id } = useParams();
    
    const getProductBySlug = (slug) => state_product.products.find(e => e.slug === slug)

    if ( getProductBySlug(id) === undefined) {
        window.location.href="/Menu"
    }

    React.useEffect(() => {
        window.scrollTo(0,0)
    }, [id])

    return (
        <Helmet title={getProductBySlug(id).slug}>
            <Container className="product_container">
                
                <Row>
                    <ProductView product={getProductBySlug(id)}/>
                </Row>

                <Row>
                    <Popular />
                </Row>
                
            </Container>
        </Helmet>
    )
}

export default Product
