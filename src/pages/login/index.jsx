import React, { Component } from 'react';
import { Form, Icon, Input, Button } from 'antd';
// import ajax from '../../api/ajax';

import { reqLogin } from '../../api'

import logo from '../../assets/images/logo.png';
import './index.less';

const Item = Form.Item;

class Login extends Component {


    login = (e) => {
        e.preventDefault();
        this.props.form.validateFields(async (error, values) => {
            // console.log(error, value)
            if (!error) {
                const { username, password } = values;
                // console.log(username, password)

                /*axios.post('/login', { username, password })
                    .then((res) => {
                        const { data } = res;
                        console.log(data);
                        if (data.status === 0) {
                            //请求成功跳转到主页面
                            /!*<Redirect to="/"> 推荐在render中使用*!/
                            // this.props.history.replace("/"); 推荐在回调函数中使用
                            this.props.history.replace("/");
                        }else {
                            //错误提示以及提示存在时间
                            message.error(data.msg, 2);
                            this.props.form.resetFields(['password'])
                        }
                    })
                    .catch((err) => {
                        message.error('网络出现异常，请刷新重试', 2);
                        this.props.form.resetFields(['password'])

                    })
                    .then(() => {
                        this.props.form.resetFields(['password'])
                    })*/

                const result = await reqLogin(username, password);

                if (result) {
                    //登陆成功
                    this.props.history.replace('/')
                }else {
                    //登陆失败
                    this.props.form.resetFields(['password']);
                }
            }else {
                console.log('登陆表单验证失败：',error)
            }
        });
    };

    validator = (rule, value, callback) => {

        const name = rule.fullField === 'username' ? '用户名' : '密码';

        if (!value) {
            callback(`必须输入${name}！`)
        }else if (value.length < 4) {
            callback(`${name}必须大于4位`)
        }else if (value.length > 15) {
            callback(`${name}必须小于15位`)
        }else if (!/^[a-zA-Z_0-9]+$/.test(value)) {
            callback(`${name}只能包含英文字母、数字和下划线`)
        }else {
            callback();
        }
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
                                        /*{required: true, message: '请输入用户名'},
                                        {min: 4, message: '长度必须超过4位'},
                                        {max: 10, message: '长度必须小于10位'},
                                        {pattern: /^[a-zA-Z_0-9]+$/, message: '用户名必须是数字、字母、下划线'}*/
                                        {
                                            validator: this.validator
                                        }
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
                                        /*{required: true, message: '请输入密码'},
                                        {min: 6, message: '长度必须超过6位'},
                                        {max: 15, message: '长度必须小于15位'},
                                        {pattern: /^[a-zA-Z_0-9]+$/, message: '密码必须是数字、字母、下划线'}*/

                                        {
                                            validator: this.validator
                                        }
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