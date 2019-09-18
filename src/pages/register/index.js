import React from 'react';
import { Modal, Icon, Divider, Row, Col, Select, Input } from 'antd';
import style from './index.css'
const InputGroup = Input.Group;
const { Option } = Select;
import {connect} from 'dva';
import api from '../../api/api';
 class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible1: false,
      otherA: "block",
      otherB: "none", 
    };
  }
  
  showMod = () => {
    this.props.dispatch({
      type:'user/change',
      payload:{
        registerMod:true
      }
    })
  }
  showModal1 =()=>{
    this.props.dispatch({
      type:'user/change',
      payload:{
        registerMod:false
      }
    })
    this.setState({
      visible1:true
    })
  }
  handleCancel = e => {
    this.props.dispatch({
      type:'user/change',
      payload:{
        registerMod:false
      }
    })
  };
  handleCancel1 = e => {
    this.setState({
      visible1: false,
    });
  };


  closeMod = e => {
    this.setState({
      otherA: "block",
      otherB: "none"
    });
  };
  other = () => {
    this.setState({
      otherB: "block",
      otherA: "none"
    });
  };
  goLogin = () => {
    this.props.dispatch({
      type:'user/change',
      payload:{
        registerMod:false,
        loginMod:true
      }
    })
  }
  goLogin1 = () => {
    this.setState({
      visible1:false
    })
    this.props.dispatch({
      type:'user/change',
      payload:{
        loginMod:true
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
  register = () =>{
      let reg = /^\d{11}$/
      let regs = /^[a-zA-Z0-9]{6}$/
    let flagA = false
    let flagB = false
    if(this.refs.phoneVal.state.value == undefined || this.refs.phoneVal.state.value == '' || reg.test(this.refs.phoneVal.state.value) == false){
      this.props.dispatch({
        type:'user/change',
        payload:{
          registerPhoneColor:'red',
          registerPhoneText:'block'
        }
      })
      flagA = false
    }else{
      this.props.dispatch({
        type:'user/change',
        payload:{
          registerPhoneColor:'',
          registerPhoneText:'none'
        }
      })
      flagA = true
    };
    if(this.refs.paVal.state.value == undefined || this.refs.paVal.state.value == '' || regs.test(this.refs.paVal.state.value) == false ){
      this.props.dispatch({
        type:'user/change',
        payload:{
          registerVerificationColor:'red',
          registerVerificationText:'block'
        }
      })
      flagB = false
    }else{
      this.props.dispatch({
        type:'user/change',
        payload:{
          registerVerificationColor:'',
          registerVerificationText:'none'
        }
      })
      flagB = true
    }
    if(flagA,flagB){
      let params = {
        userName:this.refs.phoneVal.state.value,
        password:this.refs.paVal.state.value,
        nickName:'1',
        avatar:'1'
      }
      api.register(params).then((data)=>{
        console.log(data)
      })
    }
    
  }
  changePhone = () => {
    this.props.dispatch({
      type:'user/change',
      payload:{
        registerPhoneColor:'',
        registerPhoneText:'none'
      }
    })
  };
  changePa = ()=>{
    this.props.dispatch({
      type:'user/change',
      payload:{
        registerVerificationColor:'',
        registerVerificationText:'none'
      }
    })
  }
  render() {

    return (

      <div>
         <div onClick={this.showMod} style={{width:'100%',height:'100%'}}>注册</div>
        <Modal
          visible={this.props.registerMod}
          closable={false}
          footer={null}
          centered={true}
          
          afterClose={this.closeMod}
        >
          <Row>
            <Col span={12}>
              <span className={style.title} >注册爱彼迎账号</span>
            </Col>
            <Col span={2} offset={10}>
              <span onClick={this.handleCancel} className={style.close}><Icon type="close" /></span>
            </Col>
          </Row>
          <Row>
            <Col span={24} >
              <div style={{ marginBottom: "24px" }}>
                <span className={style.login}>已有账号？</span><a className={style.loginGo} onClick={this.goLogin}>登录</a>
              </div>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <div style={{ marginBottom: "16px" }}>
                <button className={style.red} onClick={this.showModal1}><Icon type="phone" className={style.phone} /><span>手机号注册</span></button>
              </div>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <div style={{ marginBottom: "24px" }}>
                <button className={style.green} onClick={this.goWX}><Icon type="wechat" className={style.wechat} />微信注册</button>
              </div>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <div style={{ display: this.state.otherA }} className={style.loginOther} onClick={this.other.bind(this)} >使用其他方式注册</div>
            </Col>
          </Row>



          <div style={{ display: this.state.otherB }}>
            <Divider style={{ fontSize: "16px", fontWeight: 600 }}>使用其他方式注册</Divider>
            <div className={style.otherText}>
              <Row>
                <Col span={4} offset={2}><div onClick={this.goWB}>  <Icon type="weibo-circle" className={style.otherTextA} />微博</div></Col>
                <Col span={4} offset={12}><div onClick={this.goZFB}>  <Icon type="alipay-circle" className={style.otherTextB} />支付宝</div></Col>
              </Row>
            </div>
          </div>
        </Modal>
        <Modal
          visible={this.state.visible1}
          closable={false}
          footer={null}
          centered={true}
          destroyOnClose={true}
          afterClose={this.closeMod}
        >
          <Row>
            <Col span={12}>
              <span className={style.title} >手机号注册</span>
            </Col>
            <Col span={2} offset={10}>
              <span onClick={this.handleCancel1} className={style.close} ><Icon type="close" /></span>
            </Col>
          </Row>
          <Row>
            <Col span={24} >
              <div style={{ marginBottom: "24px" }}>
                <span className={style.login}>已有账号？</span><span className={style.loginGo} onClick={this.goLogin1}>登录</span>
              </div>
            </Col>
          </Row>

          <InputGroup size="large" compact>
            <Select defaultValue="86" style={{marginBottom: '5%', width: '25%', fontSize:'16px' }}>
              <Option value="86">+86(中国)</Option>
              <Option value="87">+44(英国)</Option>
            </Select>
            <Input ref='phoneVal'  onChange={this.changePhone} type="text" placeholder='手机号' style={{ width: '70%', marginLeft: '5%',borderColor:this.props.registerPhoneColor }} />

          </InputGroup>
          <Row>
              <Col span={10} offset={7}>
              <span style={{marginBottom: '5%',color:'red',display:this.props.registerPhoneText}}>请输入正确的手机号</span>
              </Col>
          </Row>
          <InputGroup size="large" compact>
            <Input ref='paVal' onChange={this.changePa} type="text" placeholder='验证码' style={{ width: '60%', marginRight: '5%', marginBottom: '5%',borderColor:this.props.registerVerificationColor  }} />
            <button className={style.black} style={{ width: '35%' }}>重新发送</button>
          </InputGroup>
          <Row>
              <Col span={10} >
              <span style={{marginBottom: '5%',color:'red',display:this.props.registerVerificationText}}>请输入正确的验证码</span>
              </Col>
          </Row>
          <Row>
            <Col span={1} >
              <label class={style.checkBox}><input type="checkbox" className={style.check} /></label>
            </Col>
            <Col span={22} offset={1}>
              <p className={style.checkp}>我希望通过短信和电话收到爱彼迎与其合作伙伴的礼金券、推广信息、问卷调查和最新动态。</p>
            </Col>
          </Row>
          <Row>
            <Col span={24} >
              <button className={style.red} onClick={this.register}>注册</button>
            </Col>
          </Row>



          <div style={{ display: this.state.otherA }} className={style.loginOther} onClick={this.other.bind(this)} >使用其他方式注册</div>
          <div style={{ display: this.state.otherB }}>
            <Divider style={{ fontSize: "16px", fontWeight: 600 }}>使用其他方式注册</Divider>
            <div className={style.otherText}>
              <Row>
                <Col span={4} ><div onClick={this.goWX} >  <Icon type="wechat" className={style.otherTextC} />微信</div></Col>
                <Col span={4} offset={6}><div onClick={this.goWB}>  <Icon type="weibo-circle" className={style.otherTextA} />微博</div></Col>
                <Col span={4} offset={6}><div onClick={this.goZFB} >  <Icon type="alipay-circle" className={style.otherTextB} />支付宝</div></Col>
              </Row>
            </div>
          </div>
        </Modal>

      </div>

    );
  }
}

export default connect(state=>state.user)(Register)