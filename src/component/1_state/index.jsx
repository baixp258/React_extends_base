import React, { Component } from 'react'


export default class index extends Component {

    state={
        count:0
    }

    incrementData=()=>{
        //解构数据 1.如果新状态依赖于原状态===>使用对象方式
        const {count}=this.state
        //1.state传入对象 不添加callback函数
       // this.setState({count:count+1})
        //2.state传入对象，添加callback函数
        /*
        this.setState({
            count:count+1
        },()=>{
            console.log(this.state.count)
        })
        */
        
        //3.传入函数 如果新状态依赖于原状态===>使用函数方式
        this.setState((state,props)=>{
            console.log(props)
            return {count:state.count+1}
        })
    }
    render() {
        return (
            <div>
                <h2>统计累加:{this.state.count}</h2>
                <button onClick={this.incrementData}>点击添加</button>
            </div>
        )
    }
}
