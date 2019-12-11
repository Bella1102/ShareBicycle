import React, { Component } from 'react';
import { Card, Table, Modal, Button, message} from 'antd';
import Axios from '../../utils/axios';
import * as Utils from '../../utils/utils';
import * as tableData from './data';



class BasicTable extends Component{

    state = { 
        dataSource: [] 
    }
    params = { page: 1 }

    componentDidMount(){
        this.request();
    }

    // 动态获取mock数据
    request = () => {
        let _this = this;
        Axios.ajax({
            url: '/table/list',
            data: {
                params: {
                    page: this.params.page
                }
            }
        }).then((res) => {
            if(res.code === 0){
                res.result.list.map((item, index) => {
                    item.key = index;
                    return null;
                })
                this.setState({
                    dataSource: res.result.list,
                    selectedRowKeys: [],
                    selectedRows: null,
                    pagination: Utils.pagination(res, (current) => {
                        _this.params.page = current;
                        this.request();
                    })
                })
            }
        }).catch(() => {
            console.log("basicTable Axios error");
        });
    }

    onRowClick = (record, index) => {
        let selectKey = [index];
        Modal.info({
            title: '信息',
            content: `用户名：${record.userName}`
        })
        this.setState({
            selectedRowKeys: selectKey,
            selectedItem: record
        })
    }

    // 多选执行删除动作
    handleDelete = (() => {
        let rows = this.state.selectedRows;
        let ids = [];
        rows.map((item) => {
            ids.push(item.id);
            return null;
        })
        Modal.confirm({
            title: '删除提示',
            content: `您确定要删除这些数据吗？${ids.join(',')}`,
            onOk: () => {
                message.success('删除成功');
                this.request();
            }
        })
    })

    render(){
        const selectedRowKeys = this.state.selectedRowKeys;
        const rowSelection = {
            type: 'radio',
            selectedRowKeys
        }
        const rowMoreSelection = {
            type: 'checkbox',
            selectedRowKeys,
            onChange: (selectedRowKeys, selectedRows) => {
                this.setState({
                    selectedRowKeys,
                    selectedRows
                })
            }
        }

        return (
            <div>
                <Card title="Mock-动态数据渲染表格" style={{marginTop: 10}}>
                    <Table
                        bordered
                        columns={tableData.basicTableColumns}
                        dataSource={this.state.dataSource}
                        pagination={false}
                    />
                </Card>
                <Card title="Mock-单选" style={{marginTop: 10}}>
                    <Table
                        bordered
                        rowSelection={rowSelection}
                        onRow={(record, index) => {
                            return {
                                onClick: () => { this.onRowClick(record, index) }
                            };
                        }}
                        columns={tableData.basicTableColumns}
                        dataSource={this.state.dataSource}
                        pagination={false}
                    />
                </Card>
                <Card title="Mock-多选" style={{marginTop: 10}}>
                    <Button onClick={this.handleDelete} style={{marginBottom: 10}}>删除</Button>
                    <Table
                        bordered
                        rowSelection={rowMoreSelection}
                        columns={tableData.basicTableColumns}
                        dataSource={this.state.dataSource}
                        pagination={false}
                    />
                </Card>
                <Card title="Mock-表格分页" style={{marginTop: 10}}>
                    <Table
                        bordered
                        columns={tableData.basicTableColumns}
                        dataSource={this.state.dataSource}
                        pagination={this.state.pagination}
                    />
                </Card>
            </div>
        );
    }
}


export default BasicTable;