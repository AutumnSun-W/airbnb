
import styles from './safety.css';
import { Layout,Button,Icon } from 'antd';
import Footers from '../Footer/index'

const { Header, Footer, Content } = Layout;
const H1 = ()=>{
  return(
    <div>
      <p className={styles.smallfont}>收付款</p>
      <h1 className={styles.bigFont}>如何在爱彼迎上赚取收入</h1>
      <p className={styles.middlefont} style={{marginTop:'20px'}}>在爱彼迎，您无需支付高昂手续费，就可轻松使用支付系统，并自主决定收费金额。</p>
    </div>
  )
}

const H2 = ()=>{
  return(
    <div className={styles.rates}>
    <div className={styles.rate}>
    <img src={require('../../../public/7.jpg')} style={{width:516,height:516,padding:'0px 24px'}}/>
    </div>
    <div style={{width:82,height:516,float:"left"}}></div>
    <div className={styles.rate} style={{width:433,paddingTop:150}}>
      <h2 className={styles.font}>
      我学到了人性本善。我可以信任他人。
      </h2>
      <p>Milaida在波多黎各出租房源来赚取额外收入。</p>
      <button className={styles.know}>了解他们的出租方式</button>
    </div>
</div>
  )
}

const Line =()=>{
  return (
    <div className={styles.line}>

    </div>
  )
}

const H3 =()=>{
  return (
    <div>
      <h1 className={styles.bigFont}>简单流畅的支付方式</h1>
      <div style={{overflow:'hidden',margin:'0 91',padding:'0 24'}}>
      <div className={styles.Card}>
            <div className={styles.smallcard}>
              <h2>免费发布房源</h2>
              <p>无需注册费用即可分享任意空间，从合用客厅到度假住宅不一而足。</p>
            </div>
            <div className={styles.smallcard}>
              <h2>自主决定出租方式</h2>
              <p>您可自主选择时间安排、价格和房客要求。我们将全程协助。</p>
            </div>
            <div className={styles.smallcard}>
              <h2>欢迎您的首批房客</h2>
              <p>您的房源上线后，符合条件的房客会与您联系。如果您有任何问题，在房客入住前就可以给他们发消息。</p>
              <div><a herf="javascript:;" style={{color:'#008489',fontSize:'16px'}}>了解如何开始出租</a></div>
            </div>
        </div>
        
        
        
      </div>
    </div>
  )
}


const H4 =()=>{
  return(
    <div className={styles.areyouready}>
                <div className={styles.bigfont}>
                  准备好当房东赚钱了吗?
                </div>
                <button>开始</button>
        </div>
  )
}



export default function() {
  return (
    <div>
      <Layout>
      <Content className={styles.h1}>
        <H1/>
        <Line/>
        <H3/>
        <H2/>
        <H4/>
      </Content>
      <Footer>
        <Footers/>
      </Footer>
    </Layout>
    </div>
  );
}
