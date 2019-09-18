
import styles from './safety.css';
import { Layout,Button,Icon } from 'antd';
import Footers from '../Footer/index'

const { Header, Footer, Content } = Layout;
const H1 = ()=>{
  return(
    <div>
      <p className={styles.smallfont}>SAFETY</p>
      <h1 className={styles.bigFont}>爱彼迎如何保护房东</h1>
      <p className={styles.middlefont} style={{marginTop:'20px'}}>我们采取多重手段,确保您、您的房子以及所接待房客的安全。</p>
      <Button type="danger" style={{fontWeight:800,marginTop:80,marginBottom:100,width:80,height:48}}>开始</Button>
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
      <h1 className={styles.bigFont}>接待优质房客</h1>
      <div style={{overflow:'hidden',margin:'0 91',padding:'0 24'}}>
        <div className={styles.card}>
        <Icon type="star" theme="twoTone" />
          <h3 className={styles.title}>公平的双向评价</h3>
          <p>为了帮助在爱彼迎上建立信任和树立声誉，房客和房东在每次预订完成后会互相进行评价。</p>
          <p>在接待房客之前，您可以查看其它房东对他们的评价。</p>
        </div>
        <div className={styles.card}>
        <Icon type="message" theme="twoTone" />
          <h3 className={styles.title}>与房客轻松交流</h3>
          <p>如果在房客住宿前您想提出问题或是设置预期，您可以使用我们安全的消息工具提前了解房客。</p>
        </div>
        <div className={styles.card}>
        <Icon type="schedule" theme="twoTone" />
          <h3 className={styles.title}>预订要求</h3>
          <p>您可以要求任何一位房客在预订您的房源前将身份证件提交到爱彼迎。您还有机会提前审查预订或是添加额外条件来控制可进行预订的人。</p>
          <p>作为进一步的核查，每次爱彼迎预订都会进行风险评分，而且我们会取消任何可疑的预订。</p>
        </div>
        <div className={styles.card}>
        <Icon type="profile" theme="twoTone" />
          <h3 className={styles.title}>您的空间您做主</h3>
          <p>您可以添加房屋守则，明确您对房客的要求，房客在预订前必须先同意遵守您的守则。比如，您可以在守则中写明禁止吸烟和举办活动。如果房客在预订后没有遵守要求，您可以取消他们的预订。</p>
          
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
        <img src={require('../../../public/8.jpg')} style={{width:1032,height:440}}/>
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
