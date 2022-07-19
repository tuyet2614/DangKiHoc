import React, { Component } from 'react'
import {Button, M_link, Tieude, Tl, T_ip, Wrapper, Wrapper_form} from './login_style'
import api from '../../service/api';
import StorageUtils from '../../helpers/StorageUtils';

class Login extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            msv : '',
            pass : ''
            
        }
        this.changeNameValue = this.changeNameValue.bind(this)
        this.changePassValue = this.changePassValue.bind(this)
    }
    login() {
        const params = {
            msv: this.state.msv,
            pass: this.state.pass,
        }
        const valid = this.checkForm()
        api.create().login(params).then(Response => {
            if(valid.error) {
                alert(valid.msg)
            }
            else {
                window.location.replace('/')
            }
        })
    }
    changeNameValue(event) {
        this.setState({
            msv: event.target.value
            
        })
    }
    changePassValue(event) {
        this.setState({
            pass: event.target.value
        })
    }
    checkForm() {
        let data = {
            error: false,
            msg: ''
        }
        const {pass} = this.state
        if (pass.length < 6) {
            data = {
                error: true,
                msg: 'Mật khẩu phải lớn hơn 6 ký tự'
            }
        }
        return data;
    }
    submitForm(event) {
        event.preventDefault()
        const valid = this.checkForm()
        if(valid.error) {
            alert(valid.msg)
        }
        else {
            window.location.replace('/')
        }
    }
    render() {
        const {
            msv
        }= this.state
        return (
            
            <Wrapper>
                
                <Wrapper_form onSubmit={(event) => {this.submitForm(event)}}>
                    <Tl src="https://th.bing.com/th/id/R.1701f4c2ccf05964e66c8a7ff6152ae1?rik=R0o5fvcHOik8OQ&riu=http%3a%2f%2fupload.wikimedia.org%2fwikipedia%2fvi%2fthumb%2fa%2fad%2fLogoTLU.jpg%2f250px-LogoTLU.jpg&ehk=sOIwLt6EayYSdg6CFyfQyfGzTcLNmKvTSiGMfved0ZY%3d&risl=&pid=ImgRaw&r=0"></Tl>
                    <Tieude>ĐĂNG NHẬP</Tieude>
                    <div>
                        <label htmlFor="id">MSV:</label><br/>
                        <T_ip 
                        id="id"
                        type="text" 
                        className="form-box" 
                        placeholder="Nhap MSV"
                        onChange={e => this.changeNameValue(e)}></T_ip>
                    </div>
                    <div>
                        <label htmlFor="pwd">Passwords:</label><br/>
                        <T_ip
                        id="pwd"
                        type="password"
                        className="form-box"
                        placeholder="Nhap pass"
                        onChange={e => this.changePassValue(e)}></T_ip>
                    </div>
                    <div>
                        <input type='checkbox' id='remember'></input>
                        <label htmlFor="remember">Remember me</label>
                    </div>
                    <div>
                        <Button type='submit'>Log in</Button>
                    </div>
        
                </Wrapper_form>
            </Wrapper>
            
        )
    }
}
export default Login;