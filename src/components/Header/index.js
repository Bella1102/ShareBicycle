import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Row, Col, Button } from 'antd';
import Axios from '../../utils/axios';
import * as Utils from '../../utils/utils';
import './index.less';



class Header extends Component {

    state={}
    UNSAFE_componentWillMount(){
        this.setState({
            userName: 'Bella1102'
        })
        setInterval(() => {
            this.setState({
                sysTime: Utils.formatTime(new Date().getTime())
            })
        }, 1000)
        this.getWeatherAPIData();
    }

    getWeatherAPIData(){
        let city = 'BeiJing';
        const url = 'http://api.map.baidu.com/telematics/v3/weather?location=' 
                    + encodeURIComponent(city) + '&output=json&ak=3p49MVra6urFRGOT9s8UBWr2';
        Axios.jsonp({
            url: url
        }).then((res) => {
            if(res.status === 'success'){
                let data = res.results[0].weather_data[0];
                this.setState({
                    dayPictureUrl: data.dayPictureUrl,
                    weather: data.weather
                })
            }
        })
    }

    render() {
        return (
            <div className="header">
                <Row className="header-top">
                    <Col span={24}>
                        <span>{this.state.userName}</span>
                        <Link to='/login'><Button type="primary" className="logreg">Log in</Button></Link>
                        <Link to='/register'><Button type="primary" className="logreg">Register</Button></Link>
                    </Col>
                </Row>
                <Row className="breadcrumb">
                    <Col span={4} className="breadcrumb-title">{this.props.menuName}</Col>
                    <Col span={20} className="weather">
                        <span className="date">{ this.state.sysTime }</span>
                        <img src={ this.state.dayPictureUrl } className="weather-img" alt=""/>  
                        <span className="weather-detail">{ this.state.weather }</span>
                    </Col>
                </Row>
            </div>
          );
    }
}

const mapStateToProps = state => {
    return {
        menuName: state.menuName
    }
}

export default connect(mapStateToProps)(Header);