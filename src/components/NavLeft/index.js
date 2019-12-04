import React, { Component } from 'react';
import MenuConfig from './../../config/menuConfig';
import { Menu } from 'antd';
import './index.less';


const { SubMenu } = Menu;

class NavLeft extends Component {

    UNSAFE_componentWillMount(){
        const menuTree = this.renderMenu(MenuConfig);
        this.setState({
            menuTree
        })
    }

    renderMenu = (data) => {
        return data.map ((item) => {
            if (item.children){
                return (
                <SubMenu title={item.title} key={item.key}>
                        { this.renderMenu(item.children) }
                    </SubMenu>
                )
            }
            return (
            <Menu.Item key={item.key}>{item.title}</Menu.Item>
            )  
        })
    }

    render() {
        return (
            <div className="nav-left">
                 <div className="logo">
                     <img src="/assets/logo-ant.svg" alt=""/>
                     <h1>123</h1>
                 </div>
                 <Menu theme="dark">
                    { this.state.menuTree }
                 </Menu>
            </div>
          );
    }

}

export default NavLeft;