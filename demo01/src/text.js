import React, { Component } from 'react'

// 引入类型props 类型校验

import propTypes from 'prop-types'

class Text extends Component {
    // 生命周期函数就是在页面渲染到特定时刻而自动触发的函数
    constructor(props) {
        super(props)
        this.handleCLick = this.handleCLick.bind(this)
    }

    // 子组件接收到父组件传递过来的参数，父组件render函数重新被执行，这个生命周期就会被执行。

    // 也就是说这个组件第一次存在于Dom中，函数是不会被执行的;
    // 如果已经存在于Dom中，函数才会被执行。

    componentWillReceiveProps(){
        console.log('child - componentWillReceiveProps')
    }

    componentWillUnmount () {
        console.log('child - componentWillUnmount子组件被销毁触发')
    }

    render() { 
        return ( 
            <li onClick = {this.handleCLick}>{this.props.name + '-----' + this.props.content}</li>
         )
    }
    handleCLick() {
        this.props.deleteItem(this.props.index)
    }
}
 

Text.propTypes = {
    name: propTypes.string.isRequired,
    content: propTypes.string,
    index: propTypes.number,
    deleteItem: propTypes.func
}

Text.defaultProps = {
    name: '王五'
}

export default Text;    