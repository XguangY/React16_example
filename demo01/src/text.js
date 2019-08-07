import React, { Component } from 'react'

// 引入类型props 类型校验

import propTypes from 'prop-types'

class Text extends Component {
    constructor(props) {
        super(props)
        this.handleCLick = this.handleCLick.bind(this)
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