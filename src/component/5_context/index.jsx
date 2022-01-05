import React, { Component } from 'react'
import './index.css'
const mycontext=React.createContext()
const {Provider,Consumer} =mycontext
export default class A extends Component {

    state={
        name:"tom"
    }

    render() {
        return (
            <div className="aaa">
                <h2>这是A组建</h2>
                <Provider value={this.state.name}>
                <B/>
                </Provider>
               
            </div>
        )
    }
}

class B extends Component{
    static contextType=mycontext
    render(){
        {/*
          const {state}=this.props
        console.log(this.props)
        */}
        const {name}=mycontext
        return (
            <div className="bbb">
                <h2>这是B组建</h2>
                <span>接收A组建的参数为:{name}</span>
               
            </div>
        )
    }
}



class C extends Component{
    static contextType=mycontext
    render(){
        {/*
          const {state}=this.props
        console.log('aaa',this.props)
        */}
        const {name}=mycontext
        return (
            <div className="ccc" >
                <h2>这是C组建</h2>
                <span>接收到B组建参数:{name}</span>
            </div>
        )
    }
}