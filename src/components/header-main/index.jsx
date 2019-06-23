import React, { Component } from 'react';

import './index.less';
import MyButton from '../../components/my-button'
import logo from '../../assets/images/logo.png'

export default class HeaderMain extends Component {
  render() {
    return <div>
      <div className="header-main-top">
        <span>欢迎，admin</span>
        <MyButton />
      </div>
      <div className="header-main-bottom">
        <span className="header-main-left">用户管理</span>
        <div className="header-main-right">
          <span>{Date.now()}</span>
          <img src={logo} alt="logo"/>
          <span>晴</span>
        </div>
      </div>
    </div>;
  }
}