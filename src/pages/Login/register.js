import React, { Component } from 'react';
import moment from 'moment';
import {Card, Form, Button, Input, Checkbox, Radio, Select, Switch,
    DatePicker, TimePicker, Upload, Icon, message, InputNumber} from 'antd';


const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const Option = Select.Option;
const TextArea = Input.TextArea;



class Register extends Component{

    state = {
        imgList: []
    }

    handleSubmit = ()=>{
        let userInfo = this.props.form.getFieldsValue();
        // console.log(JSON.stringify(userInfo))
        message.success(`${userInfo.userName} 恭喜你，当前密码为：${userInfo.userPwd}`)
    }

    getBase64 = (img, callback)=>{
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    }

    handleChange = (info) => {
        if (info.file.status === 'uploading') {
            this.setState({ loading: true });
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            this.getBase64(info.file.originFileObj, imageUrl => this.setState({
                userImg: imageUrl,
                loading: false,
            }));
        }
    }

    render(){
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: { xs: 24, sm: 4 },
            wrapperCol: { xs: 24, sm: 12 }
        }
        const offsetLayout = {
            wrapperCol: { xs: 24, sm: { span: 12, offset: 4 } }
        }

        return (
            <div>
                <Card title="注册表单">
                    <Form layout="horizontal">
                        <FormItem label="用户名" {...formItemLayout}>
                            {
                                getFieldDecorator('userName', {
                                    initialValue: '',
                                    rules: [
                                        { required: true, message: '用户名不能为空' }
                                    ]
                                })( <Input placeholder="请输入用户名" /> )
                            }
                        </FormItem>
                        <FormItem label="密码" {...formItemLayout}>
                            {
                                getFieldDecorator('userPwd', {
                                    initialValue: '',
                                    rules: [
                                        { required: true, message: '密码不能为空' }
                                    ]
                                })( <Input type="password" placeholder="请输入密码" /> )
                            }
                        </FormItem>
                        <FormItem label="性别" {...formItemLayout}>
                            {
                                getFieldDecorator('sex', {
                                    initialValue: '1'
                                })( <RadioGroup>
                                        <Radio value="1">男</Radio>
                                        <Radio value="2">女</Radio>
                                    </RadioGroup> )
                            }
                        </FormItem>
                        <FormItem label="年龄" {...formItemLayout}>
                            {
                                getFieldDecorator('age', {
                                    initialValue: 18
                                })( <InputNumber  /> )
                            }
                        </FormItem>
                        <FormItem label="当前状态" {...formItemLayout}>
                            {
                                getFieldDecorator('state', {
                                    initialValue: '2'
                                })( <Select>
                                        <Option value="1">风华浪子</Option>
                                        <Option value="2">百度FE</Option>
                                        <Option value="3">创业者</Option>
                                    </Select> )
                            }
                        </FormItem>
                        <FormItem label="爱好" {...formItemLayout}>
                            {
                                getFieldDecorator('interest', {
                                    initialValue: []
                                })( <Select mode="multiple">
                                        <Option value="1">游泳</Option>
                                        <Option value="2">打篮球</Option>
                                        <Option value="3">踢足球</Option>
                                        <Option value="4">跑步</Option>
                                        <Option value="5">桌球</Option>
                                    </Select> )
                            }
                        </FormItem>
                        <FormItem label="是否已婚" {...formItemLayout}>
                            {
                                getFieldDecorator('isMarried', {
                                    valuePropName:'checked',
                                    initialValue: false
                                })( <Switch/> )
                            }
                        </FormItem>
                        <FormItem label="生日" {...formItemLayout}>
                            {
                                getFieldDecorator('birthday', {
                                    initialValue: moment("1991-11-02")
                                })(
                                    <DatePicker showTime format="YYYY-MM-DD" />
                                )
                            }
                        </FormItem>
                        <FormItem label="联系地址" {...formItemLayout}>
                            {
                                getFieldDecorator('address',{
                                    initialValue: '',
                                    rules: [
                                        { required: true, message: '联系地址不能为空' }
                                    ]
                                })( <TextArea autoSize={{ minRows: 1, maxRows: 3 }} /> )
                            }
                        </FormItem>
                        <FormItem label="早起时间" {...formItemLayout}>
                        {
                            getFieldDecorator('time')(
                                <TimePicker/>
                            )
                        }
                        </FormItem>
                        <FormItem label="头像" {...formItemLayout}>
                        {
                            getFieldDecorator('userImg')(
                                <Upload
                                    listType="picture-card"
                                    showUploadList={false}
                                    fileList={this.state.imgList}
                                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                    onChange={this.handleChange}>
                                {this.state.userImg ? <img src={this.state.userImg} alt=""/> : <Icon type="plus"/>}
                                </Upload>
                            )
                        }
                        </FormItem>
                        <FormItem {...offsetLayout}>
                        {
                            getFieldDecorator('agreement', {
                                valuePropName: 'checked',
                                initialValue: false
                            })(
                                <Checkbox>I have read the <a href="/">agreement</a></Checkbox>
                            )
                        }
                        </FormItem>
                        <FormItem {...offsetLayout}>
                            <Button type="primary" onClick={this.handleSubmit}>注册</Button>
                        </FormItem>
                    </Form>
                </Card>
            </div>
        );
    }
}


export default Form.create()(Register);
