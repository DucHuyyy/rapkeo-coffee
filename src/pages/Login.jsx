import React, {useRef} from 'react'
import Helmet from '../components/Helmet'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { setUserName, setPassword, setid, checkAccount, } from '../redux/Slice/loginSlice'

const Login = () => {

    const pass = useRef(null)

    const retypePass = useRef(null)

    const userName = useRef(null)

    const state = useSelector((state) => state.login)

    const dispatch = useDispatch()

    const URL = `http://localhost:3000/account/${state.id}`


    function Login(e) {
        if (e.charCode == 13) {
            dispatch(checkAccount())
    
            fetch(URL, {
            method: 'PATCH',
            body: JSON.stringify({
            logged: true
            }),
            headers: {
            'Content-type': 'application/json; charset=UTF-8'
            }
            })
            .then(response => response.json())
            .then(response => console.log('Success:', JSON.stringify(response)))
            .catch(error => console.error('Error:', error));
            window.location.href="/Menu"
        }
    }

    function checkPass(e) {
        if(e.target.value !== state.password)
        {
            retypePass.current.value = ''
            pass.current.value = ''
            pass.current.focus()
            alert('Mật khẩu không trùng khớp')
            this.preventDefault()
        }
    }

    function checkUserName() {
        for (let i = 0; i < state.accounts.length; i++) {
            if(state.userName === state.accounts[i].userName)
            {
                alert('Tên đăng nhập đã tồn tại')
                userName.current.value = ''
                userName.current.focus()
                dispatch(setUserName(null))            }
        }
        
    }

    function register(e) {
        if (e.charCode == 13) {  
            checkPass(e)
            if (state.userName !== null && state.password !== '')  {
                fetch('http://localhost:3000/account', {
                    method: 'POST',
                    body: JSON.stringify({
                        userName: state.userName,
                        password: state.password,
                        logged: true
                    }),
                    headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                    }
                    })
                    .then(response => response.json())
                    .then(response => console.log('Success:', JSON.stringify(response)))
                    .catch(error => console.error('Error:', error));
                    alert('Đã đăng ký thành công')
                    window.location.href="/Menu"
            } else {
                alert('Chưa nhập tài khoản và số điện thoại')
            }
        }
    }

    return (
        <Helmet title="Đăng Nhập">
            <Container className="login_container">
                <Row className="login_row">
                    <Col className="login_col">
                        <h2 className="popular_title">ĐĂNG NHẬP</h2>
                        <div className="login_div">
                            
                            <div>
                                <p className="login_title">Tên đăng nhập: <strong>*</strong></p>
                                <input type="text" className="login_input"
                                onChange={e => dispatch(setUserName(e.target.value))} 
                                onBlur={e => dispatch(setid())}
                                />
                            </div>
                            <div>
                                <p className="login_title">Số điện thoại: <strong>*</strong></p>
                                <input type="password"
                                onChange={e => dispatch(setPassword(e.target.value))} 
                                onKeyPress={e => Login(e)}
                                className="login_input"
                                />
                            </div>
                            <div>
                                <Button className="login_btn" onClick={e => {e.charCode = 13; Login(e)} } >ĐĂNG NHẬP</Button>
                            </div>
                        </div>
                    </Col>
                    <Col className="login_col">
                        <h2 className="popular_title">ĐĂNG KÝ</h2>
                        <div className="login_div">
                          
                            <div>
                                <p className="login_title">Tên đăng nhập: <strong>*</strong></p>
                                <input ref={userName} type="text" className="login_input"
                                onChange={e => dispatch(setUserName(e.target.value))}
                                onBlur={e => checkUserName()}
                                />
                            </div>
                            <div>
                                <p className="login_title">Số điện thoại: <strong>*</strong></p>
                                <input ref={pass} type="password"  className="login_input"
                                onChange={e => dispatch(setPassword(e.target.value))} 
                                />
                            </div>
                            <div>
                                <p className="login_title">Nhập lại số điện thoại: <strong>*</strong></p>
                                <input ref={retypePass} type="password"  className="login_input"
                                onChange={e => retypePass = e.target.value}
                                onKeyPress={e => register(e)}
                                />
                            </div>
                            <div>
                                <Button className="login_btn" onClick={e => {e.charCode = 13; register(e)} }>ĐĂNG KÝ</Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Helmet>
    )
}

export default Login
