
import styles from './homes.css';
import { Input,Layout,Button , TreeSelect} from 'antd';
import { Link } from 'react-router-dom';
import Footers from '../Footer/index'
const { Header, Footer,  Content } = Layout;

const treeData = [
  {
    title: '整个房源'
  },
  {
    title: '独立房间'
  },
  {
    title: '合住房间'
  },
];
const treePeople = [
  {
    title: '1位房客'
  },
  {
    title: '2位房客'
  },
  {
    title: '3位房客'
  },
  {
    title: '4位房客'
  },
  {
    title: '5位房客'
  },
  {
    title: '6位房客'
  },
  {
    title: '7位房客'
  },
  {
    title: '8位房客'
  },
];

export default function() {
  return (
    <div>
    <Layout>
      <Header className={styles.header} >
          <div className={styles.left}>
          <svg viewBox="0 0 1000 1000" role="presentation" aria-hidden="true" focusable="false" style={{height:"32px",width:"32px",fill:"#008489"}}><path d="m499.3 736.7c-51-64-81-120.1-91-168.1-10-39-6-70 11-93 18-27 45-40 80-40s62 13 80 40c17 23 21 54 11 93-11 49-41 105-91 168.1zm362.2 43c-7 47-39 86-83 105-85 37-169.1-22-241.1-102 119.1-149.1 141.1-265.1 90-340.2-30-43-73-64-128.1-64-111 0-172.1 94-148.1 203.1 14 59 51 126.1 110 201.1-37 41-72 70-103 88-24 13-47 21-69 23-101 15-180.1-83-144.1-184.1 5-13 15-37 32-74l1-2c55-120.1 122.1-256.1 199.1-407.2l2-5 22-42c17-31 24-45 51-62 13-8 29-12 47-12 36 0 64 21 76 38 6 9 13 21 22 36l21 41 3 6c77 151.1 144.1 287.1 199.1 407.2l1 1 20 46 12 29c9.2 23.1 11.2 46.1 8.2 70.1zm46-90.1c-7-22-19-48-34-79v-1c-71-151.1-137.1-287.1-200.1-409.2l-4-6c-45-92-77-147.1-170.1-147.1-92 0-131.1 64-171.1 147.1l-3 6c-63 122.1-129.1 258.1-200.1 409.2v2l-21 46c-8 19-12 29-13 32-51 140.1 54 263.1 181.1 263.1 1 0 5 0 10-1h14c66-8 134.1-50 203.1-125.1 69 75 137.1 117.1 203.1 125.1h14c5 1 9 1 10 1 127.1.1 232.1-123 181.1-263.1z"></path></svg>
          </div>
        <div className={styles.right}>
          <span>预期月收入</span>
          <span style={{fontSize:"24px",fontWeight:"bold",marginRight:"15px"}}>￥5,348</span>
          <Button type="danger">开始</Button>
        </div>
      </Header>
      <Content className={styles.content}>
        <div className={styles.banner}>
          <div className={styles.biaodan}>
              <h1>来爱彼迎当房东,轻松赚取收入</h1>
              <Input placeholder="Basic usage" value="郑州"/>
              <TreeSelect
        style={{ width: 222,marginTop:20 }}
        defaultValue="整个房源"
        dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
        treeData={treeData}
        placeholder="Please select"
        treeDefaultExpandAll
      />
      <TreeSelect
        defaultValue="1位房客"
        style={{ width: 150,marginTop:20,marginLeft:20 }}
        dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
        treeData={treePeople}
        placeholder="Please select"
        treeDefaultExpandAll
      />
      <div>
        <span style={{fontSize:40,fontWeight:"bold",color:'black',marginTop:20}}>￥5,348</span><span>每月</span>
      </div>
      <Button type="danger" style={{width:400,height:48,fontWeight:"bold",fontSize:'16px',marginTop:20}}>开始</Button>
          </div>
        </div>
        <div className={styles.card}>
            <div className={styles.smallcard}>
              <h2>为什么选择在爱彼迎出租房源？</h2>
              <p>不论您出租的是哪种类型的房屋或房间，爱彼迎都可以让您轻松、安全地接待旅行者。 可订日期、价格、房屋守则、与房客的互动方式等，完全由您掌控。</p>
            </div>
            <div className={styles.smallcard}>
              <h2>爱彼迎保护房东的利益</h2>
              <p>为了保护您、您的房源和物品的安全，我们为每笔预订均提供价值100万美元的财产损坏保障，以及价值100万美元的意外事件保障险。</p>
              <div><Link to="/d/safety" style={{color:'#008489',fontSize:'16px'}}>了解爱彼迎如何保护房东</Link></div>
            </div>
            <div className={styles.smallcard}>
              <h2>房客已验证</h2>
              <p>爱彼迎始终要求房客在提供某些信息后才可预订，如已验证的手机号和邮箱地址。 如果您想更安心，还可以要求房客提供其他房东的推荐语和已验证身份。</p>
            </div>
        </div>
            <div style={{width:64,border:'1px solid #767676',margin:'0 auto',marginTop:150}}></div>
            <h2 style={{fontSize:60,fontWeight:"bold",color:'#333333',textAlign:"center"}}>出租三步走</h2>
            <div className={styles.card}>
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
              <div><Link to="/d/setup"style={{color:'#008489',fontSize:'16px'}}>了解如何开始出租</Link></div>
            </div>
        </div>
        <div className={styles.rates}>
              <div className={styles.rate}>
              <img src={require('../../../public/2.jpg')} style={{width:516,height:516,padding:'0px 24px'}}/>
              </div>
              <div style={{width:82,height:516,float:"left"}}></div>
              <div className={styles.rate} style={{width:433,paddingTop:150}}>
                <h2 className={styles.font}>
                出租房源帮助我支付了新厨房和其他装修项目的费用。」
                </h2>
                <p>Tessa在伦敦出租房屋赚取额外收入</p>
                <button className={styles.know}>了解他们的出租方式</button>
              </div>
        </div>
        <div style={{width:64,border:'1px solid #767676',margin:'0 auto',marginTop:150}}></div>
        <h2 style={{fontSize:60,fontWeight:"bold",color:'#333333',textAlign:"center"}}>为您答疑解惑</h2>
        <div className={styles.links}>
            <div className={styles.link}>
                  <span>谁可以成为爱彼迎房东?</span>
            </div>
            <div className={styles.link}>
            <span>我会得到怎样的财产损失保护?</span>
            </div>
            <div className={styles.link}>
            <span>房客预订之前需要满足哪些条件?</span>
            </div>
            <div className={styles.link}>
            <span>我如何选择房源价格?</span>
            </div>
            <div className={styles.link}>
            <span>发布空间如何收费?</span>
            </div>
            <div className={styles.link}>
            <span>爱彼迎如何帮助我设定价格?</span>
            </div>
        </div>
        <div className={styles.more}>
        <h2>了解更多关于房源出租的内容</h2>
          <div className={styles.smallmore}>
            <div><img src={require('../../../public/3.jpg')}/></div>
            <h3 className={styles.desc}>出租设置</h3>
            <p>如何开始出租</p>
            <Link to="/"><span>了解详情</span></Link>
          </div>
          <div className={styles.smallmore}>
            <div><img src={require('../../../public/4.jpg')}/></div>
            <h3 className={styles.desc}>人身安全</h3>
            <p>爱彼迎如何保护房东</p>
            <Link to="/"><span>了解详情</span></Link>
          </div>
          <div className={styles.smallmore}>
            <div><img src={require('../../../public/5.jpg')}/></div>
            <h3 className={styles.desc}>改善经济条件</h3>
            <p>如何在爱彼迎上赚取收入</p>
            <Link to="/"><span>了解详情</span></Link>
          </div>
          
        </div>
        <div className={styles.areyouready}>
                <div className={styles.bigfont}>
                  准备好当房东赚钱了吗?
                </div>
                <button>开始</button>
        </div>
      </Content>
      <Footer>
        <Footers/>
      </Footer>
    </Layout>
  </div>
  );
}
