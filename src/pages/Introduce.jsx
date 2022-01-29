import React from 'react'
import Helmet from '../components/Helmet'
import { Container } from 'react-bootstrap'

import  introduce_1  from '../assets/img/introduce_1.jpg'
import  introduce_2  from '../assets/img/introduce_2.jpg'
import  introduce_3  from '../assets/img/introduce_3.jpg'
import  introduce_4  from '../assets/img/introduce_4.jpg'

const Introduce = () => {
    return (
        <Helmet title="Giới thiệu">
            <Container>
                <p className="popular_title introduce_title">
                    RapKeo - Coffee
                </p>
                <div>
                    <p className="introduce_content">
                        Với Slogan: "Đến RapKeo, để Chốt Kèo". RapKeo-Coffee trực thuộc RapKeo-Group, là nơi giao lưu, học hỏi cũng như
                        bàn bạc, kí kết các hợp đồng Bất Động Sản. <br/>
                        Bên cạnh đó RapKeo-Coffee còn lại đại bản doanh của anh em Heroes-GrapCar. Là nơi tụ họp, nghỉ ngơi, trao đổi kinh nghiệm 
                        trong công việc.
                    </p>
                    <img src={introduce_1} className="introduce_img"/>
                    <img src={introduce_2} className="introduce_img"/>
                    <img src={introduce_3} className="introduce_img"/>
                    <img src={introduce_4} className="introduce_img"/>

                </div>
            </Container>
        </Helmet>
    
    )
}

export default Introduce
