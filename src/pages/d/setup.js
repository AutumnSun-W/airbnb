
import styles from './safety.css';

import { Layout,Button,Icon } from 'antd';
import { Link } from 'react-router-dom';
import Footers from '../Footer/index'
const { Header, Footer, Content } = Layout;


const H1 = ()=>{
  return(
    <div>
      <p className={styles.smallfont}>设置</p>
      <h1 className={styles.bigFont}>如何开始出租</h1>
      <p className={styles.middlefont} style={{marginTop:'20px'}}>在爱彼迎发布房源，前所未有的便捷和自主化体验。您距离赚取收入和迎接全球数百万旅行者仅几步之遥。</p>
      <Button type="danger" style={{fontWeight:800,marginTop:80,marginBottom:100,width:80,height:48}}>开始</Button>
    </div>
  )
}

const H2 = ()=>{
  return(
    <div className={styles.rates}>
    <div className={styles.rate}>
    <img src={require('../../../public/11.jpg')} style={{width:516,height:516,padding:'0px 24px'}}/>
    </div>
    <div style={{width:82,height:516,float:"left"}}></div>
    <div className={styles.rate} style={{width:433,paddingTop:150}}>
      <h2 className={styles.font}>
      开始出租比我想的简单多了。
      </h2>
      <p>JB和Ramona在波士顿出租房屋，赚取额外收入为退休做准备。</p>
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
      <h1 className={styles.bigFont}>如何出租完全由您掌控</h1>
      <div style={{overflow:'hidden',margin:'0 91',padding:'0 24'}}>
        <div className={styles.card}>
        <Icon type="star" theme="twoTone" />
          <h3 className={styles.title}>自主决定出租时间</h3>
          <p>爱彼迎没有最低或强制出租天数限制，因此您可以屏蔽不可订的日期。</p>
        </div>
        <div className={styles.card}>
        <Icon type="message" theme="twoTone" />
          <h3 className={styles.title}>设置满意价格</h3>
          <p>由您来制定房源每晚价格，此外我们的定价工具也能帮助您做出决定。您还可以轻松添加自定义项目，例如： • 清洁费 • 周租折扣 • 一年中指定时间的优惠价格</p>
        </div>
        <div className={styles.card}>
        <Icon type="schedule" theme="twoTone" />
          <h3 className={styles.title}>快速同步日历</h3>
          <p>为避免您在无法出租或已有预订时收到预订，您可将其他日历与爱彼迎日历关联，即可自动更新所有日历状态。</p>
        </div>
        <div className={styles.card}>
        <Icon type="profile" theme="twoTone" />
          <h3 className={styles.title}>为房源制定守则</h3>
          <p>为帮助房客设定期望，您可以添加房屋守则，房客必须同意后才可预订房源。如果房客预订后违反了房屋守则，您可以取消预订且不会受到处罚。</p>
          
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
        <img src={require('../../../public/10.jpg')} style={{width:1032,height:440}}/>
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
