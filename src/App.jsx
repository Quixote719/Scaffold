import React from 'react'
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'
import {Layout} from 'antd'

import Login from './Login'
import Home from './Home'
import AppSider from './Layout/Sider'
import AppHeader from './Layout/Header'

const {Content} = Layout
export default class extends React.Component {
    render() {
        return (
            <Router>
                <Layout style={{height: '100vh'}}>
                    <AppHeader/>
                    <Layout>
                        <AppSider/>
                        <Content>
                            <Route exact path='/' component={Home}/>
                            <Route path='/login' component={Login}/>
                        </Content>
                    </Layout>
                </Layout>
            </Router>
        )
    }
}
