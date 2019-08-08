import React, { Component } from 'react'

import { CSSTransition  } from 'react-transition-group'

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
                {/* <div className={this.state.isShow ? 'show' : 'hide'}>召唤abc --- 12312313</div> */}
                <CSSTransition 
                    in={this.state.isShow} // 用与判断是否出现
                    timeout={2000} // 动画时间
                    classNames = 'boss-text' // 类名的值， 有s与react的className做出区分
                    unmountOnExit
                >
                    <div>召唤abc --- 12312313</div>
                </CSSTransition >
                <div>
                    <button onClick = { this.toToggle }>点击召唤</button>
                </div>
            </div>
         )
    }
}
 
export default Boss