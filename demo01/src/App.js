import React,{Component} from 'react'

class App extends Component {
    render() {
        return (
            <ul className="name_aa">
                <li>{false ? 'aaaa': '啊啊啊啊啊'}</li>
                <li>749687987</li>
            </ul>
        )
        // 手写实现，很麻烦
        // let child1 = React.createElement('li', null, 'asdasdasd')
        // let child2 = React.createElement('li', null, '85646545')
        // let root = React.createElement('ul', {className:'my-list'}, 'asdasdasd')
    }
}

export default App;