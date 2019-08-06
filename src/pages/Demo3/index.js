import React, { Fragment, PureComponent } from 'react';
import { Card, Input, Button, Table, Modal, Form, Icon, Divider } from 'antd'
import ReactDOM from 'react-dom';
import { connect } from 'dva';
@connect(({ demo3 }) => ({
    demo3
}))
class baojiang extends React.Component {
    state = {
        visible: false,
        ID: 0,
        data: [

        ],
        columns: [
            {
                title: 'ID',
                dataIndex: 'ID',
                key: 'ID',
            },
            {
                title: '标题',
                dataIndex: 'title',
                key: 'title',
            },
            {
                title: '内容',
                dataIndex: 'content',
                key: 'content',
            },
            {
                title: '操作',
                dataIndex: 'action',
                key: 'action',
                render: (text, record) => (
                    <span>
                        <a href="javascript:;" onClick={() => this.edit(text)}>编辑 </a>
                        <Divider type="vertical" />
                        <a href="javascript:;" onClick={() => this.delete()}>删除</a>
                    </span>
                ),
            },
        ],
    };
    // delete = (record) => {
    //     const {data} = this.state;
    //     this.setState({
    //         data:data.filter(item => item.ID!==record.ID )
    //     })
    // }
    delete=()=>{
        let data=this.state.data
        data.splice(this.state.index,1)
        this.setState({
            data:data
        })
    }
    edit = () => {
        this.setState({
            visible: true,
        })

    }
    add = () => {
        this.setState({
            visible: true,
        })

    };
    handleOk = e => {

        let ID=this.state.ID
        let form = this.props.form;
        let state = this.state;
        let data = state.data.concat({ ID: state.ID, title: form.getFieldValue('title'), content: form.getFieldValue('content') });
        console.log(data);
        ID=ID+1;
        this.setState({
            visible: false,
            data: data,
            ID:ID
        });
    };

    handleCancel = e => {
        this.setState({
            visible: false,
        });
    };
    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 5 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 15 },
            },
        };

        return (

            <Card title="joke测试">
                <Modal
                    title="gf"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    okText="确定"
                    cancelText="取消"
                    destroyOnClose={true}
                    id="modal"
                >
                    <Form {...formItemLayout}>
                        <Form.Item label="标题">
                            {getFieldDecorator('title', {
                                rules: [
                                    {
                                        whitespace: true,
                                        message: 'Please input your title!!',
                                    },
                                    {
                                        required: true,
                                        message: 'Please input your title!',
                                    },
                                ],
                            })(<Input placeholder="标题" />)}
                        </Form.Item>
                        <Form.Item label="内容">
                            {getFieldDecorator('content', {
                                rules: [
                                    {
                                        whitespace: true,
                                        message: 'Please input your title!!',
                                    },
                                    {
                                        required: true,
                                        message: 'Please input your title!',
                                    },
                                ],
                            })(<Input placeholder="内容" />)}
                        </Form.Item>
                    </Form>
                </Modal>
                <Button type="primary" icon="plus" onClick={this.add}>新建</Button>
                <Table columns={this.state.columns} dataSource={this.state.data}>

                </Table>


            </Card>


        );

    }

}
const WrappedRegistrationForm = Form.create({ name: 'register' })(baojiang);
//ReactDOM.render(<helloWord />, mountNode);
export default WrappedRegistrationForm;