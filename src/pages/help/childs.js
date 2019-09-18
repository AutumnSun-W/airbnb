import React from 'react';
import style from './childs.css';
class Childs extends React.Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
    render(){
        return(
            <div className={style.childs}>
                <h3 className={style.title}>如何创建爱彼迎账号?</h3>
                <p>如果您还没有爱彼迎账号，请前往<a href="https://www.airbnb.cn/">airbnb.com</a>，然后点击<strong>注册。</strong></p>
                <p>您可以使用电子邮件地址、Facebook账号、Google账号或Amex账号注册。 注册和创建爱彼迎账号完全免费。</p>
            </div>
        )
    }
}
export default Childs