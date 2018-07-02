import React from 'react'

import {Layout} from 'antd'
const styles = require('./Header.less')

const {Header} = Layout

export default class extends React.Component {
    render() {
        return (
            <Header style={{padding: 0}}>
                <span className={styles.left}>网站标题</span>
                <span className={styles.right}>用户名</span>
            </Header>
        )
    }
}
