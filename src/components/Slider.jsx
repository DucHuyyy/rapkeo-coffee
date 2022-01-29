import React from 'react'
import { Carousel, Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {  CarouselItem } from 'reactstrap'
import  Slide1  from '../assets/img/slide1.jpg'
import Slide2 from '../assets/img/slide2.jpg'



const groupName = [
    {
        name: "BĐS REVIEWS"
    },
    {
        name: "BĐS RAPKEO"
    },
    {
        name: "HEROES GRAPTEAM"
    }
]

const Slider = () => {
    return (
        <div>
            <Carousel className="slider">
                <CarouselItem
                    className="slider_item"
                    onExited={function noRefCheck(){}}
                    onExiting={function noRefCheck(){}}
                    >
                    <img
                        alt="Slide 1"
                        src={Slide1}
                    />
                    </CarouselItem>
                    <CarouselItem
                    className="slider_item"
                    onExited={function noRefCheck(){}}
                    onExiting={function noRefCheck(){}}
                    >
                    <img
                        alt="Slide 2"
                        src={Slide2}
                    />
                </CarouselItem>
            </Carousel>
            <div className="group"> 
                <div className="group_title">
                    <p>CÙNG ĐỒNG HÀNH</p>
                </div>
                <Container className="group_container">
                    <Row className="group_row">
                        {
                            groupName.map((item, index) => (
                                <Col className="group_col"
                                     key={index}
                                >
                                    <Link to="/Introduce" className="group_link">
                                        <div>
                                            <p>
                                                {item.name}
                                            </p>
                                        </div>
                                    </Link>
                                </Col>
                            ))
                        }
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Slider
