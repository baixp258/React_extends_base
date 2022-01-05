import React, { Component,PureComponent } from 'react'
import './index.css'

export default class index extends Component {

    state={
        name:"tom"
    }

    //点击事件用onClick  //输入改变事件用onChange
    changName=()=>{
        this.setState({name:"lucy"})
    }


    shouldComponentUpdate(nextProps,nextState){
        //目前的props和state
        console.log(this.props,this.state)
        //接下来要变化的目标props，目标state
        console.log(nextProps,nextState)
        const flag=!this.state.name===nextState.name
        console.log('flag',flag)
        return flag
    }

    render() {
        console.log('fu----render')
        const {name} =this.state
        return (
            <div className="fuzujian">
                <h2>这是父组件{name}</h2>
                <button onClick={this.changName}>点击改变姓名</button>
                <A name={name}/>
            </div>
        )
    }
}

class A extends Component {
    
        shouldComponentUpdate(nextProps,nextState){
        //目前的props和state
        console.log(this.props,this.state)
        //接下来要变化的目标props，目标state
        console.log(nextProps,nextState)
        const flag=this.props.name===nextState.name
        console.log('flag',flag)
        return flag
    }
    
 
    
    
    render(){
        console.log('A---render')
        const {name} =this.props
        return(
            <div  className="a">
                 <h2>这是子组件A:{name}</h2>
            </div>
        )
    }
}

class B extends Component {

    render(){
        return(
            <div  className="a">
                 <h2>这是子组件B</h2>
            </div>
        )
    }
}
