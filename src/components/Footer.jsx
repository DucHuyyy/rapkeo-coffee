import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import logo from '../assets/img/logo.png'



const footerInfo = [
  {
    title: "RAPKEO & BDS",
    className: "footer_brand"
  },
  {
    title: "45 đường số 7, khu đô thị An Phú An Khánh, Quận 2, Tp Thủ Đức",
    className: "footer_address"
  },
  {
    title: "Đặt hàng: 0852867204 - Email: info@rapkep.vn",
    className: "footer_email"
  },
  {
    title: "Website: www.coffee.rapkeo.vn",
    className: "footer_web"
  }
]







const Footer = () => {
  return (
    <div className="footer">
      <Container fluid className="footer_container">
        <Row className="footer_row">
          <Col className="footer_col" >
            <div className="footer_info">
              {
                footerInfo.map((item, index) => (
                  <p className={item.className} key={index}>
                    {item.title}
                  </p>
                ))
              }
            </div>
          </Col>
          <Col className="footer_col" >
            <Link to="/">
              <img src={logo} alt="" className="footer_logo"/>
            </Link>
          </Col>
          <Col className="footer_col footer_map" >
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.1582611829404!2d106.7329808146227!3d10.79918819230611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752770dae2a74b%3A0x28dfc9b1e6bfe73c!2zQ2FmZSBSSyAtIEPDoCBQaMOqIFLDoXAgS8Oobw!5e0!3m2!1svi!2s!4v1640161488684!5m2!1svi!2s" allowFullScreen="" loading="lazy"></iframe>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer
