import React, { Component, Fragment } from 'react';
import { Row, Col } from 'antd';
import NavLeft from './components/NavLeft';
import Header from './components/Header';
import Footer from './components/Footer';
import './style/common.less'



class Admin extends Component {

    render() {
        return (
            <Fragment>
                <Row className="container">
                    {/* left */}
                    <Col span={4} className="nav-left">
                        <NavLeft />
                    </Col>
                     {/* right */}
                    <Col span={20} className="main">
                        <Header />
                        <Row className="content">
                            { this.props.children }
                        </Row>
                        <Footer />
                    </Col>
                </Row>
            </Fragment>
          );
    }
}

export default Admin;