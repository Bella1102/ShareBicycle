import React, { Component } from 'react';
import { Card, Button, Icon } from 'antd';
import './ui.less';



class UIButton extends Component {

    state = {
        iconLoading: false,
    };

    render() {
        return (
            <div>
              <Card title="基础按钮" className="card-wrap">
                <Button type="primary">Primary</Button>
                <Button>Default</Button>
                <Button type="dashed">Dashed</Button>
                <Button type="danger">Danger</Button>
              </Card>
              <Card title="图形按钮1" className="card-wrap">
                <Button type="primary" shape="circle" icon="search" />
                <Button type="primary" shape="circle">A</Button>
                <Button icon="plus">Create</Button>
                <Button icon="delete">Delete</Button>
                <Button icon="edit">Edit</Button>
                <Button icon="search">Search</Button>
                <Button icon="download">Download</Button>
              </Card>
              <Card title="图形按钮2" className="card-wrap">
                <Button type="primary" icon="download" />
                <Button type="primary" shape="circle" icon="download" />
                <Button type="primary" shape="round" icon="download" />
                <Button type="primary" shape="round" icon="download">Download</Button>
                <Button type="primary" icon="download" >Download</Button>
                <Button.Group size='normal'>
                    <Button type="primary"><Icon type="left" style={{marginRight: 0}} />Backward</Button>
                    <Button type="primary">Forward<Icon type="right" /></Button>
                </Button.Group>
              </Card>
              <Card title="加载按钮" className="card-wrap">
                <Button type="primary"  
                        icon="poweroff"
                        loading={this.state.iconLoading}
                        onClick={() => { this.setState({ iconLoading: true }) }}>
                    Loading
                </Button>
              </Card>
            </div>
          );
    }
}

export default UIButton;