import React, {Component, Fragment} from 'react'

class Women extends Component {
    constructor(props) {
        super(props)
        this.state = {
            valueImput: '54654654',
            valueList: []
        }
    }
    inputChange(e){
        this.setState({
            valueImput:e.target.value
        })
    }
    render() {
        return (
            <Fragment>
                <div>
                    <input value = { this.state.valueImput } onChange={this.inputChange.bind(this)}/>
                    <button>增加菜品</button>
                </div>
                <ul>
                    <li>狮子头</li>
                    <li>排骨</li>
                </ul>
            </Fragment>
        )
    }
    
}
export default Women