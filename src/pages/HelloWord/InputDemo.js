import React, { Fragment, PureComponent } from 'react';
import { Card, Button,BackTop,Icon,Input} from 'antd';
import {connect} from 'dva';
@connect(({demo})=>({
    demo
}))

export default class InputDemo extends PureComponent {
    state={
        name:'',
    }

    headerButton2=()=>{
        const {dispatch}=this.props;
        const{name}=this.state;
        dispatch({
            type:'demo/changerName',
            payload:{key1:name}
        })
    }

    // handleButton2 = () => {
    //     const {dispatch} = this.props;
    //     const {name} = this.state;
    //     dispatch({
    //         type:'demo/changeName',
    //         payload:{key1:name}
    //     })
    // }

    headerInput=(e)=>{
         this.setState({
             name:e.target.value
         })
    }
    render (){
        const{demo:{name}}=this.props
        return(
            <div>
                <input value={this.state.name} onChange={(e)=>{this.headerInput(e)}}/>
                <button onClick={this.headerButton2} >点击2</button>
                <input value={name}/>
            </div>
        )
    }
}