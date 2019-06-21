import React, { Component } from 'react';

import { Form, Icon, Input, Button } from 'antd';

import logo from './logo.png';
import './index.less';

const Item = Form.Item;

class Login extends Component {

    login = (e) => {
        e.preventDefault();
    };


    render () {
        const { getFieldDecorator } = this.props.form;

        return (
            <div className="login">
                <header className="login-header">
                    <img src={logo} alt="logo"/>
                    <h1>React项目：后台管理系统</h1>
                </header>
                <section className="login-content">
                    <h2>用户登录</h2>
                    <Form onSubmit={this.login} className="login-form">
                        <Item>
                            {
                                getFieldDecorator('username', {
                                    rules: [
                                        {required: true, message: '请输入用户名'},
                                        {min: 4, message: '长度必须超过4位'},
                                        {max: 10, message: '长度必须小于10位'},
                                        {pattern: /^[a-zA-Z_0-9]+$/, message: '用户名必须是数字、字母、下划线'}
                                    ]
                                })(
                                    <Input prefix={<Icon type="user" />} placeholder="用户名" className="login-input"/>
                                )
                            }
                        </Item>
                        <Item>
                            {
                                getFieldDecorator('password', {
                                    rules: [
                                        {required: true, message: '请输入密码'},
                                        {min: 6, message: '长度必须超过6位'},
                                        {max: 15, message: '长度必须小于15位'},
                                        {pattern: /^[a-zA-Z_0-9]+$/, message: '密码必须是数字、字母、下划线'}
                                    ]
                                })(
                                    <Input prefix={<Icon type="safety-certificate" />} placeholder="密码" type="passwod" className="login-input"/>
                                )
                            }
                        </Item>
                        <Button type="primary" htmlType="submit" className="login-btn">登录</Button>
                    </Form>
                </section>

            </div>
        )
    }
}

export default Form.create()(Login)