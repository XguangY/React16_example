import React, {Component, Fragment} from 'react'

// 引入css
import './index.css'

// 引入子组件

import Text from './text'

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
            valueImput: this.input.value
        })
    }
    addList(e) {
        this.setState({
            valueList : [...this.state.valueList, this.state.valueImput],
            valueImput: ''
        }, () => {
            console.log('====================================')
            console.log(this.ul.querySelectorAll('li').length)
            console.log('====================================')
        })
    }
    deleteItem(index) {
        let list = this.state.valueList
        list.splice(index, 1)
        this.setState({
            list
        })
    }

    componentWillMount() {
        console.log('componentWillMount ---- 在组件即将被挂载到页面的时刻执行')
    }

    componentDidMount() {
        console.log('componentDidMount ---- 在组件挂载完成时刻执行')
    }

    shouldComponentUpdate () {
        console.log('shouldComponentUpdate ---- 函数会在组件更新之前，自动被执行')
        return true // 返回一个true后续的钩子才会执行，可以在此处判断已决定时候继续更新，可以提高组件的性能
    }

    componentWillUpdate () {
        console.log('componentWillUpdate ----- 组件更新之前，但是在shouldComponentUpdate之后执行')
    }

    componentDidUpdate () {
        console.log('componentDidUpdate ---- 组件更新之后执行')
    }

    render() {
        console.log('render ---- 在组件prop或者state改变时刻执行')
        return (
            // 外部注释
            <Fragment>
                {/* jsx注释，用于内部注释 */}
                <div>
                    {/* label标签注意项 使用htmlFor 直接使用for 会与js中的for冲突 */}
                    <label htmlFor="labelID">增加菜品</label>
                    {/* 添加类名需要使用 className, 用class 回报错，可能会与函数类冲突 */}
                    <input ref={input => {this.input = input}} id="labelID" className="borderSty" value = { this.state.valueImput } onChange={this.inputChange.bind(this)}/>
                    <button onClick = { this.addList.bind(this)}>增加菜品</button>
                </div>
                <ul ref={ul => {this.ul = ul}}>
                    {
                        this.state.valueList.map((item, index) => {
                            return (
                                // js 代码内依照惯例注释即可
                                // <li 
                                //     key= {index + item}
                                //     onClick={this.deleteItem.bind(this,index)}
                                //     dangerouslySetInnerHTML = {{__html: item}}
                                // >
                                //     {/* 将文本尝试解析为标签，很危险，可能会被代码注入攻击，不建议使用 */}
                                // </li>
                                <Text 
                                    key={index + item}
                                    content={item}
                                    index = {index}
                                    deleteItem = { this.deleteItem.bind(this)}
                                ></Text>
                            )
                        })
                    }
                </ul>
            </Fragment>
        )
    }
    
}

export default Women