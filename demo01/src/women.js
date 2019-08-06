import React, {Component, Fragment} from 'react'

class Women extends Component {
    constructor(props) {
        super(props)
        this.state = {
            valueImput: '',
            valueList: ['狮子头', '排骨22']
        }
    }
    inputChange(e){
        this.setState({
            valueImput:e.target.value
        })
    }
    addList(e) {
        this.setState({
            valueList : [...this.state.valueList, this.state.valueImput],
            valueImput: ''
        })
    }
    deleteItem(index) {
        let list = this.state.valueList
        list.splice(index, 1)
        this.setState({
            list
        })
    }
    render() {
        return (
            <Fragment>
                <div>
                    <input value = { this.state.valueImput } onChange={this.inputChange.bind(this)}/>
                    <button onClick = { this.addList.bind(this)}>增加菜品</button>
                </div>
                <ul>
                    {
                        this.state.valueList.map((item, index) => {
                            return (
                                <li 
                                    key= {index + item}
                                    onClick={this.deleteItem.bind(this,index)}
                                >
                                    {item}
                                </li>
                            )
                        })
                    }
                </ul>
            </Fragment>
        )
    }
    
}
export default Women