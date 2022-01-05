import React, { Component } from 'react'

export default class Children extends Component {

    // state={
    //     student:[
    //         {id:"1",name:'张三',age:'18'},
    //         {id:"2",name:'李四',age:'19'},
    //         {id:"3",name:'王五',age:'20'}
    //     ]
    // }
        state={
            student:"2345"
        }
    

    render() {
        return (
            <div>
                {
                    this.state.student.map((item)=>{
                        return <h2 key={item.id}>姓名:{item.name}----性别:{item.age}</h2>
                    })
                }
            </div>
        )
    }
}
