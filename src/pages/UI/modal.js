import React, { Component } from 'react';
import { Card, Button } from 'antd';
import './ui.less';



class UIModal extends Component {

    state = {
        
    };

    render() {
        return (
            <div>
              <Card title="基础按钮" className="card-wrap">
                <Button type="primary">Open</Button>
                <Button type="primary">自定义页脚</Button>
                <Button type="primary">顶部20px弹框</Button>
                <Button type="primary">水平垂直居中</Button>
              </Card>
            </div>
          );
    }
}

export default UIModal;