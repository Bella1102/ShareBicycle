import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import MenuConfig from './menuConfig';
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
                    <Menu.Item key={item.key}>
                        <Link to={item.key}>{item.title}</Link>
                    </Menu.Item>
            )  
        })
    }

    render() {
        return (
            <div className="nav-left">
                 <div className="logo">
                    <Link to='/'><img src="/assets/logo-ant.svg" alt=""/></Link>
                    <Link to='/'><h1>ShareBicycle</h1></Link>
                 </div>
                 <Menu theme="dark">
                    { this.state.menuTree }
                 </Menu>
            </div>
          );
    }

}

export default NavLeft;