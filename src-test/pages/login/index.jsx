import React, { Component } from 'react';


import './logo.png'
export default class Login extends Component {
  render() {
    return <div className="login">
      <header className="login-heafer">
          <img src={} alt="logo"/>
          <h1>React项目：后台管理系统</h1>
      </header>
        <section className="login-content">
            <Form>
                <Item>
                    <Input type="prefix" />
                </Item>
            </Form>
        </section>
    </div>;
  }
}