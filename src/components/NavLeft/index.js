import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Menu } from 'antd';
import menuConfig from '../../static/menuConfig';
import { switchMenu } from '../../redux/action';
import './index.less';



class NavLeft extends Component {

    state = {
        currentKey: ''
    }

    UNSAFE_componentWillMount(){
        const menuTree = this.renderMenu(menuConfig);
        let currentKey = window.location.hash.replace(/#|\?.*$/g, '');
        this.setState({
            menuTree,
            currentKey
        })
    }

    handleClick = ({item, key}) => {
        const { dispatch } = this.props;
        dispatch(switchMenu(item.props.title))
        this.setState({
            currentKey: key
        })
    }

    renderMenu = (data) => {
        const { SubMenu } = Menu;
        return data.map((item) => {
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
                 <Menu 
                    onClick={this.handleClick}
                    selectedKeys={[this.state.currentKey]} 
                    theme="dark" className="nav-menu">
                    { this.state.menuTree }
                 </Menu>
            </div>
          );
    }

}

export default connect()(NavLeft);