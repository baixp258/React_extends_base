import React, { Component } from 'react'
import ReactDOM from 'react-dom'

/*
export default class StateHook extends Component {

    state={
        count:0
    }

    add=()=>{
        const {count} =this.state
        this.setState({
            count:count+1
        })
    }
    componentDidMount(){
        //const {count} =this.state
      this.timer=  setInterval(()=>{
            this.setState({count:this.state.count+1})
        },1000)
    }
    unmount=()=>{
       ReactDOM.unmountComponentAtNode(document.getElementById('root'))
   }
   componentWillUnmount(){
       clearInterval(this.timer)
   }
    render() {
        return (
            <div>
                <h2>统计总数:{this.state.count}</h2>
                <button onClick={this.add}>点我加1</button>
                <button onClick={this.unmount}>卸载组建</button>            
            </div>
        )
    }
}
*/



 /* */
 //函数定义方法名必须大写
export default function StateHook(){

    //1、使用useState更新数据
    const [count, setCount] =React.useState(0)
    const [name, setName] =React.useState('Tom')

    //2、附加形组建
    React.useEffect(() => {
       let timer=  setInterval(()=>{
            setCount(count=>count+1)
        },1000)
        return () => {
            clearInterval(timer)
        };
    }, [])
    //3、ref Hook保存标签数据
    const myRef=React.useRef()
   //const [state, setCount] = useState(0)
 // const count=0
    function add(){
       setCount(count+1)
    }
    function changeName(){
        setName('jack')
    }
    function unmount(){
        ReactDOM.unmountComponentAtNode(document.getElementById('root'))
    }
    function refdata(){
        alert(myRef.current.value)
    }


    return(
        <div>
            <h2>统计总数:{count}</h2>
            <h2>当前名字:{name}</h2>
            <br/>
            <input type='text' ref={myRef}></input>
            <button onClick={add}>点我加1</button>&nbsp;&nbsp;&nbsp;
            <button onClick={changeName}>点我改变名字</button>&nbsp;&nbsp;
            <button onClick={unmount}>卸载组建</button> 
            <button onClick={refdata}>点击获取输入数据</button>                
        </div>
    )
}
