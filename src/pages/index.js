import React, { Component } from 'react';
import Nav from './Nav/index'
import styles from './index.css'
import { DatePicker, Icon, Carousel, Row, Col, Button } from 'antd';
import Link from 'umi/link';
import Tab from './Tab/index'
import Tab1 from './Tab1/index';
import Footer from './Footer/index'

const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

function onChange(date, dateString) {
    console.log(date, dateString);
}

export default class View extends Component {
    constructor(props) {
        super(props)

        this.state = {
            hous: "房源"
        }
    }



    render() {
        return (
            <div>
                <Nav></Nav>
                <div className={styles.lunbo}>

                    <Carousel effect="fade" autoplay>
                        <div>
                            <Link to='/' className={styles.banner1}>
                                <div className={styles.biaoti}>
                                    <div className={styles.biaoti1}>
                                        <div>
                                            <p>一家人享受团圆佳节</p>
                                        </div>
                                        <button className={styles.chakan}>领取最高￥1600 礼券</button>
                                    </div>
                                </div>
                            </Link>

                        </div>
                        <div>
                            <Link to='/' className={styles.banner2}>
                                <div className={styles.biaoti}>
                                    <div className={styles.biaoti1}>
                                        <div>
                                            <p>领取精选房源专属券</p>
                                        </div>
                                        <button className={styles.chakan1}>进入特惠专场</button>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div>
                            <Link to='/' className={styles.banner3}>
                                <div className={styles.biaoti}>
                                    <div className={styles.biaoti1}>
                                        <div>
                                            <p>汇率「破 7」超值游</p>
                                        </div>
                                        <button className={styles.chakan1}>查看合集</button>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div>
                            <Link to='/' className={styles.banner4}>
                                <div className={styles.biaoti}>
                                    <div className={styles.biaoti1}>
                                        <div>
                                            <p>打卡照片里的奇妙家</p>
                                        </div>
                                        <button className={styles.chakan1}>查看合集</button>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div>
                            <Link to='/' className={styles.banner5}>
                                <div className={styles.biaoti}>
                                    <div className={styles.biaoti1}>
                                        <div>
                                            <p>溯.承</p>
                                            <span className={styles.tesu}>非遗体验，欢迎新生代的你</span>
                                        </div>
                                        <button className={styles.chakan1}>查看合集</button>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </Carousel>
                    <div className={styles.site}>
                        <div className={styles.site1}>
                            <Row>
                                <Col span={2}>
                                    <div className={styles.hous}>
                                        <span>
                                            {this.state.hous}
                                        </span>
                                    </div>
                                </Col>
                                <Col span={13}>
                                    <div className={styles.dizhi}>
                                        <span><Icon type="environment" /></span>
                                        <input type="text" placeholder="输入目的地、城市或景点" className={styles.txt} />
                                    </div>
                                </Col>
                                <Col span={7}>
                                    <div className={styles.riqi}>
                                        <RangePicker onChange={onChange} style={{ width: "100%", height: "72px" }} />
                                    </div>
                                </Col>
                                <Col span={2}>
                                    <div className={styles.zmc}>
                                        <Button type="danger" size='large'>
                                            搜索
                                    </Button>
                                    </div>
                                </Col>
                            </Row>
                        </div>

                    </div>

                </div>
                {/* 主体   部分 */}
                <div>
                    <Tab></Tab>
                    <Tab1></Tab1>
                    {/* 故事 */}
                    <div className={styles.safeguard}>
                        <div className={styles.bia}>
                            <h3>爱彼迎旅行保障</h3>
                        </div>
                        <div className={styles.safeguard1}>
                            <dl>
                                <dt><img src="https://z1.muscache.cn/airbnb/static/packages/IndicatorHostGuarantee.20c37f9e.svg" alt="" /></dt>
                                <dd><span>安心房源保障</span>人工审核所有中国房源页面信息，入住更放心</dd>
                            </dl>
                            <dl>
                                <dt><img src="https://z1.muscache.cn/airbnb/static/packages/IndicatorCXinsurance.32cdc2f5.svg" alt="" /></dt>
                                <dd><span>专业中文客服</span>(86) 400-120-8508、(86) 010-8783-3463，24 小时服务</dd>
                            </dl>
                            <dl>
                                <dt><img src="https://z1.muscache.cn/airbnb/static/packages/IndicatorExperienceInsurance.903112a9.svg" alt="" /></dt>
                                <dd><span>旅行安全保障</span>多重风险控制设计，全方位保障您的行程安全</dd>
                            </dl>
                        </div>
                        <Link to="/" className={styles.cakan}>查看全方位保障计划></Link>
                    </div>
                    <div className={styles.plus}>
                        <div className={styles.bia}>
                            <h3>爱彼迎Plus房源</h3>
                            <h4>品质和设计经过验证的精选房源系列</h4>
                        </div>
                        <div className={styles.bjtu}>
                            <img src="https://z1.muscache.cn/4ea/air/v2/pictures/ea6285d9-5352-4447-b13d-b39bfc92dfe5.jpg?t=c:w2262-h686,r:w2262-h686-sfit,e:fjpg-c75" alt="" />
                        </div>
                    </div>

                    <div className={styles.travel}>
                        <div className={styles.bia}>
                            <h3>经典旅行城市</h3>
                        </div>
                        <div>
                            <ul className={styles.travel1}>
                                <li>
                                    <img src="https://z1.muscache.cn/airbnb/static/china_p1_redesign/HongKong-d2a0c673c4e1a28dbb7f6f0fddf38c32.jpg" alt="" />
                                    <div className={styles.travel2}>
                                        <p>香港&nbsp;&nbsp; 亚洲美食之都</p>
                                        <span>人均￥440/晚</span>
                                    </div>
                                </li>
                                <li>
                                    <img src="https://z1.muscache.cn/airbnb/static/china_p1_redesign/optimized/Chiang-Mai-0c02e1fa3f13340df4e366004db7a7c7.jpg" alt="" />
                                    <div className={styles.travel2}>
                                        <p>清迈&nbsp;&nbsp; 泰国最文艺小城</p>
                                        <span>人均￥168/晚</span>
                                    </div>
                                </li>
                                <li>
                                    <img src="https://z1.muscache.cn/airbnb/static/china_p1_redesign/optimized/London-19c5702c00785c96a626e3989e0a3461.jpg" alt="" />
                                    <div className={styles.travel2}>
                                        <p>伦敦&nbsp;&nbsp; 感受英伦风情</p>
                                        <span>人均￥354/晚</span>
                                    </div>
                                </li>
                                <li>
                                    <img src="https://z1.muscache.cn/airbnb/static/china_p1_redesign/optimized/Phuket-237db8c73af4ec081e69c3d0571b2a51.jpg" alt="" />
                                    <div className={styles.travel2}>
                                        <p>普吉岛&nbsp;&nbsp; 东南亚看海</p>
                                        <span>人均￥360/晚</span>
                                    </div>
                                </li>
                                <li>
                                    <img src="https://z1.muscache.cn/airbnb/static/china_p1_redesign/optimized/Los-Angeles-b59e4b468916be8f5295c1491252f752.jpg" alt="" />
                                    <div className={styles.travel2}>
                                        <p>洛杉矶&nbsp;&nbsp; 好莱坞式繁华</p>
                                        <span>人均￥445/晚</span>
                                    </div>
                                </li>
                                <li>
                                    <img src="https://z1.muscache.cn/airbnb/static/china_p1_redesign/optimized/Bali-380c5db84250a6207a0fca6c24e34349.jpg" alt="" />
                                    <div className={styles.travel2}>
                                        <p>巴厘岛&nbsp;&nbsp; 度蜜月的首选</p>
                                        <span>人均￥396/晚</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>


                    <div className={styles.story}>
                        <div className={styles.bia}>
                            <h3>精彩旅行故事</h3>
                        </div>
                        <div className={styles.story0}>
                            <ul className={styles.story1}>
                                <li>
                                    <img className={styles.storyImg} src="https://z1.muscache.cn/im/pictures/c6a66b67-57d4-4206-90b9-82d94329762a.jpg?aki_policy=x_large" alt="" />
                                    <p><span>广州&nbsp;</span>房东说，欢迎体验你的 “珠江之夜”。</p>
                                    <div className={styles.pinglun}>
                                        <img src="https://z1.muscache.cn/im/pictures/user/b4739251-2e16-4a3f-84e0-d1b777ad9d56.jpg?aki_policy=profile_tiny" alt="" />
                                        <span></span>
                                    </div>
                                </li>
                                <li>
                                    <img className={styles.storyImg} src="https://z1.muscache.cn/im/pictures/694ef74b-4caf-4a10-98c4-78215bf0fb6c.jpg?aki_policy=x_large" alt="" />
                                    <p><span>台州市&nbsp;</span>去这家深藏最美渔村的海边石墅 赏一场不容错过的东海日出！</p>
                                    <div className={styles.pinglun}>
                                        <img src="https://z1.muscache.cn/im/pictures/user/33d51af2-60cc-49cc-ac17-ff7821acc2d1.jpg?aki_policy=profile_tiny" alt="" />
                                        <span></span>
                                    </div>
                                </li>
                                <li>
                                    <img className={styles.storyImg} src="https://z1.muscache.cn/im/pictures/41d3443a-97bf-401b-9acc-c5ba9ef1bf5e.jpg?aki_policy=x_large_portrait" alt="" />
                                    <p><span>曼谷&nbsp;</span>曼谷有座四合院，隐秘又惊艳</p>
                                    <div className={styles.pinglun}>
                                        <img src="https://z1.muscache.cn/im/pictures/user/cd9f4bae-3c95-48fa-96ce-d06aab99e8d1.jpg?aki_policy=profile_tiny" alt="" />
                                        <span></span>
                                    </div>
                                </li>
                                <li>
                                    <img className={styles.storyImg} src="https://z1.muscache.cn/im/pictures/ed07ac15-ea02-4b73-8ada-9e511618f9dd.jpg?aki_policy=x_large_portrait" alt="" />
                                    <p><span>威克斯福德&nbsp;</span>为了体验地道的爱尔兰乡村风情，我竟然住进城堡马厩！</p>
                                    <div className={styles.pinglun}>
                                        <img src="https://z1.muscache.cn/im/pictures/user/33d51af2-60cc-49cc-ac17-ff7821acc2d1.jpg?aki_policy=profile_tiny" alt="" />
                                        <span></span>
                                    </div>
                                </li>
                                <li>
                                    <img className={styles.storyImg} src="https://z1.muscache.cn/im/pictures/4b2f982f-68e6-44c8-a547-7c47291c1736.jpg?aki_policy=x_large_portrait" alt="" />
                                    <p><span>上海&nbsp;</span>一秒穿越到18世纪的欧洲</p>
                                    <div className={styles.pinglun}>
                                        <img src="https://z1.muscache.cn/im/pictures/user/6fbbbec7-2e9e-415e-aecd-44c96cc6c887.jpg?aki_policy=profile_tiny" alt="" />
                                        <span></span>
                                    </div>
                                </li>
                                <li>
                                    <img className={styles.storyImg} src="https://z1.muscache.cn/im/pictures/c3361ff9-3aca-45da-901c-509532afeef0.jpg?aki_policy=x_large" alt="" />
                                    <p><span>青岛&nbsp;</span>领地咖啡-大隐隐于市的室外桃园</p>
                                    <div className={styles.pinglun}>
                                        <img src="https://z1.muscache.cn/im/pictures/user/f424302d-e3b1-420a-9abc-e739080e839d.jpg?aki_policy=profile_tiny" alt="" />
                                        <span></span>
                                    </div>
                                </li>
                                <li>
                                    <img className={styles.storyImg} src="https://z1.muscache.cn/im/pictures/210dd2ac-53da-41c3-b15d-f70ac51f61ba.jpg?aki_policy=x_large" alt="" />
                                    <p><span>汉城&nbsp;</span>拔草首尔治愈系小浣熊咖啡厅-Raccoon Cafe</p>
                                    <div className={styles.pinglun}>
                                        <img src="https://z1.muscache.cn/im/pictures/user/b1cbc64c-8d1b-4529-bec7-eed82269dbfa.jpg?aki_policy=profile_tiny" alt="" />
                                        <span></span>
                                    </div>
                                </li>
                                <li>
                                    <img className={styles.storyImg} src="https://z1.muscache.cn/im/pictures/b8765b8e-dc7e-4e09-982b-a466117ab6fc.jpg?aki_policy=x_large_portrait" alt="" />
                                    <p><span>牛津&nbsp;</span>英式最乡村生活, 尽在Cotswolds</p>
                                    <div className={styles.pinglun}>
                                        <img src="https://z1.muscache.cn/im/pictures/08258f67-b7bf-4a84-b6a3-b98f133d81eb.jpg?aki_policy=profile_tiny" alt="" />
                                        <span></span>
                                    </div>
                                </li>
                            </ul>

                        </div>
                        <Link to="/" className={styles.cakan} style={{ marginTop: "8px" }}>显示全部></Link>
                    </div>



                    <div className={styles.experience}>
                        <div className={styles.bia}>
                            <h3>高分体验</h3>
                            <h4>在下趟旅程中，不妨预订由本地达人组织的体验活动</h4>

                        </div>
                        <div className={styles.experience1}>
                            <ul>
                                <li>
                                    <img src="https://z1.muscache.cn/im/pictures/45a7e80e-aadf-4cc4-bfaa-361034b85218.jpg?aki_policy=poster" alt="" />
                                    <div className={styles.experience2}>
                                        <span>工作坊 · 清迈</span>
                                        <h5>泰国传统具纹身</h5>
                                        <p>￥598/人起</p>
                                        <div className={styles.experience3}>
                                            <p><span>4.99 <Icon type="star" /> </span>(197)</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <img src="https://z1.muscache.cn/im/pictures/dd4573ee-4499-46b0-93f3-fdf50b8060d2.jpg?aki_policy=poster" alt="" />
                                    <div className={styles.experience2}>
                                        <span>徒步 · 波多黎各</span>
                                        <h5>不为人知的瀑布徒步之旅</h5>
                                        <p>￥584/人起</p>
                                        <div className={styles.experience3}>
                                            <p><span>4.97 <Icon type="star" /> </span>(306)</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <img src="https://z1.muscache.cn/im/pictures/763cbba6-1c23-44e2-a4dd-7605de06f445.jpg?aki_policy=poster" alt="" />
                                    <div className={styles.experience2}>
                                        <span>摄影 · 东京</span>
                                        <h5>您的私人东京摄影师！</h5>
                                        <p>￥642/人起</p>
                                        <div className={styles.experience3}>
                                            <p><span>4.94 <Icon type="star" /> </span>(524)</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <img src="https://z1.muscache.cn/im/pictures/610804da-99d8-4f23-bbe5-198e6e12cb03.jpg?aki_policy=poster" alt="" />
                                    <div className={styles.experience2}>
                                        <span>浮潜 · 梅里达</span>
                                        <h5>⭐探秘天然井与大庄园</h5>
                                        <p>￥282/人起</p>
                                        <div className={styles.experience3}>
                                            <p><span>4.98 <Icon type="star" /> </span>(386)</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <img src="https://z1.muscache.cn/im/pictures/e0411113-5854-4628-905a-f2dd67b663a2.jpg?aki_policy=poster" alt="" />
                                    <div className={styles.experience2}>
                                        <span>徒步 · 海参崴</span>
                                        <h5>⭐午餐+海参崴最佳一日游</h5>
                                        <p>￥57/人起</p>
                                        <div className={styles.experience3}>
                                            <p><span>4.9 <Icon type="star" /> </span>(351)</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <Link to="/" className={styles.cakan}>显示所有体验></Link>
                    </div>

                </div>
                <Footer></Footer>           
            </div >

        )
    }

}
