import React, { Component } from 'react'

class Boss extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            isShow: false
         }
         this.toToggle = this.toToggle.bind(this)
    }
    toToggle() {
        this.setState({
            isShow: this.state.isShow ? false : true
        })
    }
    render() { 
        return ( 
            <div>
                <div className={this.state.isShow ? 'show' : 'hide'}>召唤abc --- 12312313</div>
                <div>
                    <button onClick = { this.toToggle }>点击召唤</button>
                </div>
            </div>
         )
    }
}
 
export default Boss