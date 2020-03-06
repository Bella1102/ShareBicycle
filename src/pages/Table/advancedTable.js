import React, { Component } from 'react';
import { Card, Table, Modal, Button, message, Badge } from 'antd';
import Axios from '../../utils/axios';
import * as tableData from './data';


class AdvanceTable extends Component {

    state = { }
    params = { page: 1 }

    componentDidMount(){
        this.request();
    }

    request = () => {
        Axios.ajax({
            url: '/table/advanced/list',
            data: {
                params: {
                    page: this.params.page
                }
            }
        }).then((res) => {
            if (res.code === '0') {
                res.result.list.map((item) => {
                    item.key = item.id;
                    return null;
                })
                this.setState({
                    dataSource: res.result.list
                })
            }
        }).catch(() => {
            console.log("advancedTable error");
        });
    }

    handleChange = (pagination, filters, sorter) => {
        console.log("::" + sorter)
        this.setState({
            sortOrder: sorter.order
        })
    }

    handleDelete = (item) => {
        Modal.confirm({
            title: 'Confirm',
            content: '您确认要删除此条数据吗？',
            onOk:() => {
                message.success('Delete Success');
                this.request();
            }
        })
    }

    render(){

        const advancedTableColumns3 = [

            { title: 'id', key: 'id', dataIndex: 'id' },
            { title: '用户名', key: 'userName', dataIndex: 'userName' },
            { title: '性别', key: 'sex', dataIndex: 'sex',
                render(sex) { return sex === 1 ? '男' : '女' }
            },
            { title: '年龄', key: 'age', dataIndex: 'age',
                sorter: (a, b) => { return a.age - b.age; },
                sortOrder: this.state.sortOrder
            },
            { title: '状态', key: 'state', dataIndex: 'state',
                render(state){
                    let config  = {
                        '1': 'Student',
                        '2': 'Boss',
                        '3': 'CEO',
                        '4': 'Saler',
                        '5': 'Worker'
                    }
                    return config[state];
                }
            },
            { title: '提示', dataIndex: 'interest',
                render(interest) {
                    let config = {
                        '1': <Badge status="success" text="成功"/>,
                        '2': <Badge status="error" text="报错" />,
                        '3': <Badge status="default" text="正常" />,
                        '4': <Badge status="processing" text="进行中" />,
                        '5': <Badge status="warning" text="警告" />
                    }
                return config[interest];
            }
        },
            { title: '生日', key: 'birthday', dataIndex: 'birthday' },
            { title: '地址', key: 'address', dataIndex: 'address' },
            { title: '操作', 
                render: (text, item) => {
                    return <Button size="small" onClick={(item) => { this.handleDelete(item) }}>删除</Button>
            }
        }
        ]
        
        return (
            <div>
                <Card title="头部固定">
                    <Table
                        bordered
                        columns={tableData.advancedTableColumns1}
                        dataSource={this.state.dataSource}
                        pagination={false}
                        scroll={{y: 300}}
                    />
                </Card>
                <Card title="左侧固定" style={{marginTop: 10}}>
                    <Table
                        bordered
                        columns={tableData.advancedTableColumns2}
                        dataSource={this.state.dataSource}
                        pagination={false}
                        scroll={{x: 1770}}
                    />
                </Card>
                <Card title="排序&操作" style={{marginTop: 10}}>
                    <Table
                        bordered
                        columns={advancedTableColumns3}
                        dataSource={this.state.dataSource}
                        pagination={false}
                        onChange={this.handleChange}
                    />
                </Card>
            </div>
        )
    }
}


export default AdvanceTable;