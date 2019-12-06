import React, { Component } from "react";
import { Card, Form, Input, Button, message, Icon, Checkbox } from "antd";



class Login extends Component{

    handleSubmit = ()=>{
        let userInfo = this.props.form.getFieldsValue();
        this.props.form.validateFields((err, values) => {
            if(!err){
                message.success(`${userInfo.userName} 当前密码为：${userInfo.password}`)
            }
        })
    }

    render(){
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <Card title="登录行内表单">
                    <Form layout="inline">
                        <Form.Item><Input placeholder="Username" /></Form.Item>
                        <Form.Item><Input placeholder="Password" /></Form.Item>
                        <Form.Item><Button type="primary">Log in</Button></Form.Item>
                    </Form>
                </Card>
                <Card title="登录水平表单" style={{marginTop: 10}}>
                    <Form style={{width: 300}}>
                        <Form.Item>
                            {
                                getFieldDecorator('userName',{ 
                                    initialValue:'', 
                                    rules:[
                                            { required: true, message: '用户名不能为空' },
                                            { max: 18, message: '用户名长度不在范围内' },
                                            { pattern: new RegExp('^\\w+$', 'g'), message: '用户名必须为字母或者数字' }
                                        ]
                                })( <Input prefix={<Icon type="user"/>} placeholder="Username" /> )
                            }
                        </Form.Item>
                        <Form.Item>
                            {
                                getFieldDecorator('password', {
                                    initialValue: '',
                                    rules: [
                                        { required: true, message: '用户名不能为空' },
                                        { min: 6, max: 18, message: '密码长度不在范围内' }
                                    ]
                                })( <Input prefix={<Icon type="lock"/>} type="password" placeholder="Password" /> )
                            }
                        </Form.Item>
                        <Form.Item>
                            {
                                getFieldDecorator('remember', {
                                    valuePropName: 'checked',
                                    initialValue: true
                                })( <Checkbox>Remember me</Checkbox> )
                            }
                            <a href="/forgotPassword" style={{float: 'right'}}>Forgot password</a>
                            <Button type="primary" onClick={ this.handleSubmit } style={{width: '100%'}}>Log in</Button>
                            Or <a href="/admin/form/reg">register now!</a>
                        </Form.Item>
                    </Form>
                </Card>
            </div>
        );
    }
}


export default Form.create()(Login);
