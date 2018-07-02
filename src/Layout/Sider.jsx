import React from 'react'
import {Link} from 'react-router-dom'

import {Layout, Menu} from 'antd'
const {Sider} = Layout
const {SubMenu} = Menu

export default class extends React.Component {
    render() {
        return (
            <Sider width={200} style={{background: '#fff'}}>
                <Menu
                    mode='inline'
                    defaultSelectedKeys={['roleManage']}
                    defaultOpenKeys={['access']}
                    style={{height: '100%', borderRight: 0}}
                >
                    <SubMenu key='suspects' title={<Link to='/suspects'>1</Link>}/>
                    <SubMenu key='access' title={<Link to='/access'>2</Link>}>
                        <Menu.Item key='roleManage'>
                            <Link to='/access/roleManage'>3</Link>
                        </Menu.Item>
                        <Menu.Item key='userManage'>
                            <Link to='/access/userManage'>4</Link>
                        </Menu.Item>
                    </SubMenu>
                </Menu>
            </Sider>
        )
    }
}
