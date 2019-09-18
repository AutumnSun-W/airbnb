import React from 'react';
import { Icon } from 'antd';
import style from './child.css';
import {connect} from 'dva';
class Child extends React.Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
    goHelp = () =>{
        console.log(123);
        
        this.props.dispatch({
            type:'user/change',
            payload:{
                helpHome:'none',
                help:'block'
            }
        })
        
    }
    render(){
        return(
            <div className={style.child} onClick={this.goHelp}>
                <p className={style.title}>如何创建爱彼迎账号?</p>
                <div  className={style.desc} style={{"WebkitBoxOrient": "vertical"}}>如果您还没有爱彼迎账号，请前往airbnb.com，然后点击注册。 您可以使用电子邮件地址、Facebook账号、Google账号或Amex账号注册。 注册和创建爱彼迎账号完全免费。 注册后，请务必在预订住宿之前完成账号资料的填写。</div>
                <div className={style.footer} >了解更多<Icon type="right" /></div>
            </div>
        )
    }
}

export default connect(state =>state.user)(Child)