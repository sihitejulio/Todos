import React, { Component } from "react";
import { Link } from 'react-router-dom'
import { Menu, Modal, Icon, Button, Divider, Typography } from 'antd';
const { SubMenu } = Menu;
const { Title, Paragraph, Text } = Typography;

class Workspace extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            listWorkspace: null
        };
        this.getWorkspace = this.getWorkspace.bind(this);
    }

    componentDidMount() {
        this.getWorkspace();
    }

    getWorkspace = () => {
        fetch('http://localhost:4011/workspace', {
            method: 'GET'
        })
            .then(async (response) => {
                let result = await response.json()
                console.log(result);
                if (result.data.length > 0) {
                    this.setState({
                        listWorkspace: result.data
                    })
                    console.log(this.state.listWorkspace);
                }
            }).catch(function (err) {
                console.log(err)
            });
    }

    postWorkspace = () => {

    }

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    handleClick = e => {
        console.log('click ', e);
    };
    getDetail = () => {
        console.log("sad")
    }

    displayWorkspaceList = () => {
        let worrkspaces = this.state.listWorkspace
        console.log("data", this.state.listWorkspace)
        return (worrkspaces != null ?

            this.state.listWorkspace.map(item => (
                <SubMenu
                    key={`sub${item.id}`}
                    style={{ background: '#f0f2f5' }}
                    title={
                        <span>
                            <Icon type="file" />
                            <span>{item.name}</span>
                        </span>
                    }
                >

                    {
                        item.Todos.length>0  ?
                            item.Todos.map(itemTodo => (
                                <Menu.Item
                                    key={itemTodo.id}
                                    style={{
                                        background: '#f0f2f5',
                                        marginTop: 0, marginBottom: 0
                                    }}
                                    onClick={this.getDetail}

                                >
                                   
                                   <Link to={`/${itemTodo.id}`}> {itemTodo.name}</Link>
                                </Menu.Item>))
                            : ""
                    }

                </SubMenu>
            ))
            : ""
        );
    }

    render() {
        return (
            <div>

                <div className='workspace-top'>
                    <Title
                        level={3}
                        style={{
                            marginLeft: 30
                        }}
                    >
                        Workspace
                    </Title>
                    <Divider />

                    <Menu
                        onClick={this.handleClick}
                        style={{
                            width: 200,
                            background: '#f0f2f5',
                            marginBottom: 420
                        }}
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        mode="inline"
                    >
                        {this.displayWorkspaceList()}
                    </Menu>

                </div>
                <div className='workspace-bottom'>
                    <Divider />
                    <Button
                        icon="plus"
                        style={{ marginLeft: 20 }}
                        onClick={this.showModal}
                    >
                        New Workspace
            </Button>
                </div>

                <Modal
                    title="Basic Modal"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal>
            </div>
        );
    }
}

export default Workspace;
