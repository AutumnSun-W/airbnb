import React from 'react';
import { Modal, Icon, Divider, Row, Col, Select, Input } from 'antd';
import style from './index.css'
const InputGroup = Input.Group;
const { Option } = Select;
import {connect} from 'dva';

 class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible2: false,
      otherC:'none',
      colorIpt:''
    };
  }
 
  showMod = () => {
    this.props.dispatch({
      type:'user/change',
      payload:{
        loginMod:true
      }
    })
  }

  handleCancel = () => {
    this.props.dispatch({
      type:'user/change',
      payload:{
        loginMod:false
      }
    })
  };



  goRegister = () => {
    this.props.dispatch({
      type:'user/change',
      payload:{
        loginMod:false,
        registerMod:true
      }
    })
    
  }
  goWX=()=>{
    window.location.href = 'https://open.weixin.qq.com/connect/qrconnect?response_type=code&client_id=wx8a0f4d2da83ff777&state=ROJQBPDRDMEHHFGTAYUJRRYYVUGJHB&scope=snsapi_login&redirect_uri=https%3A%2F%2Fwww.airbnb.cn%2Foauth_callback%3Foverride_host%3D&appid=wx8a0f4d2da83ff777'
  }
  goWB=()=>{
    window.location.href ='https://api.weibo.com/oauth2/authorize?response_type=code&client_id=1437815036&state=JGFKBOSPYFRSJDSWFICDVUFKQXTOEQ&scope=all&redirect_uri=https%3A%2F%2Fzh.airbnb.com%2Foauth_callback%3Foverride_host%3Dwww.airbnb.cn'
  }
  goZFB=()=>{
    window.location.href = 'https://zh.airbnb.com/douanes/salute?douanes_use_post=true&namespace=&redirect_params[action]=connect&redirect_params[authenticity_token]=V4%24.airbnb.cn%24KE4K75FmIig%24-k9rs0TMlQVTjIMtU6EyGjGP8qK7p2S-UaCg4faF_yY%3D&redirect_params[controller]=oauth&redirect_params[from]=alipay_login&redirect_params[override_host]=www.airbnb.cn&redirect_params[redirect_url]=https%3A%2F%2Fwww.airbnb.cn%2F%3Faf%3D43896654%26c%3D.pi9.pkbaidu_brd_brandzone_demand_title_p1%26src%3DBaidu%26medium%3DPPC%26ag_kwid%3D2299-36-57701246c0b98773.6a0cc0f87b49337e&redirect_params[service]=alipay'
  }
  goHOME=()=>{
    window.location.href = '/'
  }
  login = () =>{
    let reg = /^\d{11}$/
    let regs = /^[a-zA-Z0-9]{6}$/
    let flagA = false
    let flagB = false
    if(this.refs.phoneVal.state.value == undefined || this.refs.phoneVal.state.value == '' || reg.test(this.refs.phoneVal.state.value) == false){
      this.props.dispatch({
        type:'user/change',
        payload:{
          loginPhoneColor:'red',
          loginPhoneText:'block'
        }
      })
      flagA = false
    }else{
      this.props.dispatch({
        type:'user/change',
        payload:{
          loginPhoneColor:'',
          loginPhoneText:'none'
        }
      })
      flagA = true
    };
    if(this.refs.paVal.state.value == undefined || this.refs.paVal.state.value == '' || regs.test(this.refs.paVal.state.value) == false ){
      this.props.dispatch({
        type:'user/change',
        payload:{
          loginVerificationColor:'red',
          loginVerificationText:'block'
        }
      })
      flagB = false
    }else{
      this.props.dispatch({
        type:'user/change',
        payload:{
          loginVerificationColor:'',
          loginVerificationText:'none'
        }
      })
      flagB = true
    }
    if(flagA,flagB){
      
    }
  }
  changePhone = () => {
    this.props.dispatch({
      type:'user/change',
      payload:{
        loginPhoneColor:'',
        loginPhoneText:'none'
      }
    })
  };
  changePa = ()=>{
    this.props.dispatch({
      type:'user/change',
      payload:{
        loginVerificationColor:'',
        loginVerificationText:'none'
      }
    })
  }
  render() {
    return (
      <div>
        <div onClick={this.showMod} style={{ width: '100%', height: '100%' }}>登录</div>
        <Modal
          visible={this.props.loginMod}
          closable={false}
          footer={null}
          centered={true}
          
          afterClose={this.closeMod}
        >
          <Row>
            <Col span={12}>
              <span className={style.title} >登录爱彼迎</span>
            </Col>
            <Col span={2} offset={10}>
              <span onClick={this.handleCancel} className={style.close}><Icon type="close" /></span>
            </Col>
          </Row>
          <Row>
            <Col span={24} >
              <div style={{ marginBottom: "24px" }}>
                <span className={style.login}>没有账号？</span><span className={style.loginGo} onClick={this.goRegister}>注册</span>
              </div>
            </Col>
          </Row>

          <Row>
            <Col span={24}>
              <div style={{ marginBottom: "4px" }}>
                <button className={style.green} onClick={this.goWX}><Icon type="wechat" className={style.wechat} />微信登录</button>
              </div>
            </Col>
          </Row>
          <Divider style={{ fontSize: "16px", fontWeight: 600 }}>或</Divider>
          <InputGroup size="large" compact>
            <Select defaultValue="86" style={{ width: '25%', marginBottom: '5%',fontSize:'16px'}}>
              <Option value="86">+86(中国)</Option>
              <Option value="87">+44(英国)</Option>
            </Select>
            <Input ref='phoneVal' onChange={this.changePhone} type="text" placeholder='手机号' style={{ width: '70%', marginLeft: '5%',borderColor:this.props.loginPhoneColor }} />
          </InputGroup>
          <Row>
              <Col span={10} offset={7}>
              <span style={{marginBottom: '5%',color:'red',display:this.props.loginPhoneText}}>请输入正确的手机号</span>
              </Col>
          </Row>
          <InputGroup size="large" compact>
            <Input ref='paVal' onChange={this.changePa} type="text" placeholder='验证码' style={{ width: '60%', marginRight: '5%', marginBottom: '5%',borderColor:this.props.loginVerificationColor }} />
            <button className={style.black} style={{ width: '35%' }}>重新发送</button>
          </InputGroup>
          <Row>
              <Col span={10} >
              <span style={{marginBottom: '5%',color:'red',display:this.props.loginVerificationText}}>请输入正确的验证码</span>
              </Col>
          </Row>
          <Row>
            <Col span={1} >
              <label class={style.checkBox}><input type="checkbox" className={style.check} /></label>
            </Col>
            <Col span={5} offset={1}>
              记住我
            </Col>
            <Col span={5} offset={12}>
              <p className={style.loginGo}>账号密码登录</p>
            </Col>

          </Row>
          <Row>
            <Col span={24} >
              <button className={style.red} onClick={this.login}>登录</button>
            </Col>
          </Row>
          <Divider style={{ fontSize: "16px", fontWeight: 600 }}>使用其他方式登录</Divider>

          <Row>
            <Col span={4} offset={2}><div className={style.otherText} onClick={this.goWB}>  <Icon type="weibo-circle" className={style.otherTextA} />  微博</div></Col>
            <Col span={4} offset={12}><div className={style.otherText} onClick={this.goZFB}>  <Icon type="alipay-circle" className={style.otherTextB} />  支付宝</div></Col>
          </Row>


        </Modal>


      </div>

    );
  }
}

export default connect(state=>state.user)(Register)