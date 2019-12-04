import React, { Component } from 'react';
import { Row, Col } from 'antd';
import './index.less';
import Util from '../../utils/utils';
import axios from '../../axios';



class Header extends Component {

    state={}
    UNSAFE_componentWillMount(){
        this.setState({
            userName:'河畔一角'
        })
        setInterval(()=>{
            let sysTime = Util.formatDate(new Date().getTime());
            this.setState({
                sysTime: sysTime
            })
        }, 1000)
        this.getWeatherAPIData();
    }

    getWeatherAPIData(){
        let city = '北京';
        const url = 'http://api.map.baidu.com/telematics/v3/weather?location=' + encodeURIComponent(city) + '&output=json&ak=3p49MVra6urFRGOT9s8UBWr2';
        axios.jsonp({
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
                        <a href="/">Logout</a>
                    </Col>
                </Row>
                <Row className="breadcrumb">
                    <Col span={4} className="breadcrumb-title">Home</Col>
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

export default Header;