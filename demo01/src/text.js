import React, { Component } from 'react'

class Text extends Component {
    constructor(props) {
        super(props)
        this.handleCLick = this.handleCLick.bind(this)
    }
    render() { 
        return ( 
            <li onClick = {this.handleCLick}>{this.props.content}</li>
         )
    }
    handleCLick() {
        this.props.deleteItem(this.props.index)
    }
}
 
export default Text;    