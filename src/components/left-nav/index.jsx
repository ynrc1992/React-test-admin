import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Icon } from 'antd';
import PropTypes from 'prop-types';

import menuList from '../../config/menu-config'

import './index.less';
import logo from '../../assets/images/logo.png';

const { SubMenu, Item } = Menu;

export default class LeftNav extends Component {
    static propTypes = {
        collapsed: PropTypes.bool.isRequired
    };

    createMenu = (menu) => {
        return <Item key={menu.key}>
            <Link to={menu.key}>
                <Icon type={menu.icon}/>
                <span>{menu.title}</span>
            </Link>
        </Item>
    };

    componentWillMount() {

        // const { pathname } = this.props.location;

        this.menus = menuList.map((menu) => {
            const  children = menu.children;

            //判断是否是一级菜单或复合菜单
            if (children) {
                return <SubMenu
                    key={menu.key}
                    title={
                        <span>
                            <Icon type={menu.icon} />
                            <span>{menu.title}</span>
                        </span>
                    }
                >
                    {/*<Item key={menu.key}>
                        <Icon type={menu.icon} />
                        <span>品类管理</span>
                    </Item>
                    <Item key={menu.key}>
                        <Icon type={menu.icon} />
                        <span>商品管理</span>
                    </Item>*/}
                    {
                        children.map((item) => this.createMenu(item))
                    }
                </SubMenu>
            }else {
                return this.createMenu(menu)
                {/*<Item key={menu.key}>
                    <Link>
                        <Icon type={menu.key}/>
                        <span>{menu.title}</span>
                    </Link>
                </Item>*/}
            }
        });
        // this.selectedKey = pathname;
    }

  render() {

      const { collapsed } = this.props;
      return <div>
            <Link className="left-nav-logo" >
                <img src={logo} alt="logo"/>
                <h1 style={{display: collapsed ? 'none' : 'block'}}>硅谷后台</h1>
            </Link>
            <Menu theme="dark" defaultSelectedKeys={['5']} mode="inline">
                {/*<Item key="home">
                    <Link to="/home">
                        <Icon type="home" />
                        <span>首页</span>
                    </Link>

                </Item>
                <SubMenu
                    key="goods"
                    title={
                        <span>
                      <Icon type="appstore" />
                      <span>商品</span>
                    </span>
                    }
                >
                    <Item key="2">
                        <Icon type="bars" />
                        <span>品类管理</span>
                    </Item>
                    <Item key="4">
                        <Icon type="tool" />
                        <span>商品管理</span>
                    </Item>
                </SubMenu>
                <Item key="userManagement">
                    <Icon type="file" />
                    <span>用户管理</span>
                </Item>
                <Item key="rbac">
                    <Icon type="user" />
                    <span>权限管理</span>
                </Item>
                <SubMenu
                    key="team"
                    title={
                        <span>
                      <Icon type="team" />
                      <span>图形图表</span>
                    </span>
                    }
                >
                    <Item key="3">
                            <Icon type="team" />
                            <span>柱形图</span>
                    </Item>
                    <Item key="4">
                            <Icon type="team" />
                            <span>折线图</span>
                    </Item>
                    <Item key="pie">
                        <Icon type="team" />
                        <span>饼图</span>
                    </Item>
                </SubMenu>*/}
                {
                    this.menus
                }

            </Menu>
        </div>


  }
}