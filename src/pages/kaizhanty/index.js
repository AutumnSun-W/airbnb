import React from 'react'
import style from './index.css'
import {Row, Col, Button, Card} from 'antd'
import Footer from '../Footer'
import Register from "../register";
import Login from "../login";
import Link from 'umi/link'
import Help from '../help'

function Index(props) {
    window.onscroll = function () {
        let scroll = document.documentElement.scrollTop || document.body.scrollTop;
        if (document.getElementById('fixedHd')) {
            if (scroll > 400) {
                document.getElementById('fixedHd').style.display = "block";
            } else {
                document.getElementById('fixedHd').style.display = "none";
            }
        }
        if (scroll > 640) {
            let container = document.getElementById('scrollDiv')
            //判断浏览器
            let isIE = navigator.userAgent.match(/MSIE (\d)/i);
            isIE = isIE ? isIE[1] : undefined;
            let isFF = /FireFox/i.test(navigator.userAgent);

            if (isIE < 9)//传统浏览器使用MouseWheel事件
                container.attachEvent("onmousewheel", function (e) {
                    //计算鼠标滚轮滚动的距离
                    //一格3行，每行40像素
                    let v = e.wheelDelta / 34;
                    container.scrollLeft += v;
                    //阻止浏览器默认方法
                    return false;
                })
            else if (!isFF && container)  //除火狐外的现代浏览器也使用MouseWheel事件
                container.addEventListener("mousewheel", function (e) {
                    //计算鼠标滚轮滚动的距离
                    let v = -e.wheelDelta / 34;
                    container.scrollLeft += v;
                    // console.log(container.scrollLeft)

                    //阻止浏览器默认方法
                    e.preventDefault();
                }, false);
            else if (container)//火狐使用DOMMouseScroll事件
                container.addEventListener("DOMMouseScroll", function (e) {
                    //计算鼠标滚轮滚动的距离
                    //一格是3行，但是要注意，这里和像素不同的是它是负值
                    container.scrollLeft += e.detail * 100;
                    //阻止浏览器默认方法
                    e.preventDefault();
                }, false);


        }
    }


    let flag = true;
    const videoControl = () => {
        let video = document.getElementsByTagName('video')[0]
        flag = !flag;
        if (flag) {
            video.play()
        } else {
            video.pause()
        }
    };
    let disflag = false;

    function xianshi() {
        disflag = !disflag;
        let target = document.getElementsByClassName('index__hidden___2Sqz7')
        if (disflag) {
            for (let i = 0; i < target.length; i++) {
                target[i].style.opacity = 1;
                target[i].style.display = "block"
            }
        } else {
            for (let i = 0; i < target.length; i++) {
                target[i].style.opacity = 0;
                setTimeout(function () {
                    target[i].style.display = "none"
                }, 500)
            }
        }
    }

    let Lchu = 0;

    function runR() {
        Lchu -= 244;
        Lchu = Lchu < -2684 ? -2684 : Lchu;
        document.getElementsByClassName('index__diandong1___2aJ7Z')[0].style.left = Lchu + "px";

    }

    function runL() {
        Lchu += 244;
        Lchu = Lchu > 0 ? 0 : Lchu;
        document.getElementsByClassName('index__diandong1___2aJ7Z')[0].style.left = Lchu + "px";
    }
    let Lchu2 = 0;
    function runR2() {
        Lchu2 -= 240;
        Lchu2 = Lchu2 < -3840 ? -3840 : Lchu2;
        document.getElementsByClassName('index__diandong2___3xMo2')[0].style.left = Lchu2 + "px";

    }

    function runL2() {
        Lchu2 += 240;
        Lchu2 = Lchu2 > 0 ? 0 : Lchu2;
        document.getElementsByClassName('index__diandong2___3xMo2')[0].style.left = Lchu2 + "px";
    }

    return (
        <div>
            <Row>
                <Col span={24} className={style.videoBack}>
                    <video autoPlay loop muted className={style.video}>
                        <source
                            src="https://z1.muscache.cn/v/76/07/76078ccb-c33d-4d25-aa9e-4fc4c7886633/bdcbe89cac105172b0faee8a2a064c76_8000k_1.mp4"
                            type="video/mp4" className={style.source}/>
                        Your browser does not support the video tag.
                    </video>
                </Col>
            </Row>

            <Row className={style.header}>
                <Row className={style.navbox}>
                    <div className={style.top}>
                        {/* 导航 */}
                        <Col span={2} style={{lineHeight: "80px", textIndent: "24px"}}>
                            <Link to="/" style={{color:"#484848"}}><span className={style.iconfont}>&#xe613;</span></Link>
                        </Col>
                        {/* 导航 */}
                        <Col span={16}>
                            <div className={style.topRight}>
                                <ul>
                                    <li>
                                        <div className={style.nav}>人民币-￥</div>
                                    </li>

                                    <li>
                                        <div className={style.nav}>手机端</div>
                                    </li>
                                    <li>
                                        <Link to="/" className={style.nav}>出租房源</Link>
                                    </li>
                                    <li>
                                        <Link to="/kaizhanty" className={style.nav}>开展体验</Link>
                                    </li>
                                    <li>
                                        <Link to="/" className={style.nav}>故事</Link>
                                    </li>
                                    <li>
                                        <Link to="/" className={style.nav}>历史足迹</Link>
                                    </li>
                                    <li>
                                        <Help/>
                                    </li>
                                    <li>
                                        <div className={style.nav}>
                                            <Register  />
                                        </div>
                                    </li>
                                    <li>
                                        <div className={style.nav}>
                                            <Login  />
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </div>
                </Row>
                <Row>
                    <Col span={3}> </Col>
                    <Col span={18}>
                        <p className={style.smallText}>在爱彼迎开展体验</p>
                        <h2 className={style.bigTitle}>带领别人做自己热爱的事，顺便赚取收入</h2>                  <Button type="primary"
                                                                                                        size="large"
                                                                                                        className={style.headBtn}>开始吧</Button>
                    </Col>
                    <Col span={3}> </Col>
                </Row>
            </Row>
            <Row className={style.fixedHead} id='fixedHd'>
                <Col span={2} style={{lineHeight: "80px", textIndent: "24px"}}>
                    <Link to='/'><span className={style.iconfont}>&#xe613;</span></Link>
                </Col>
                <Col span={20}>

                </Col>
                <Col span={2}>
                    <Button type="primary" className={style.fixedBtn} size='large'>开始吧</Button>
                </Col>
            </Row>
            <Row className={style.tiyan}>
                <Row className={style.space}>
                </Row>
                <Row className={style.tiyanhead}>
                    <Col span={4}> </Col>
                    <Col span={14}>
                        <Row>
                            <Col span={22}>
                                <h2 className={style.tiyantitle}>什么是体验？</h2>
                                <p className={style.tiyantext}>体验是由世界各地的当地达人策划并组织开展的活动，而不仅仅是普通的参观游览或课程。快来通过开展体验，向大家展示一下您的城市、技艺、事业或文化吧。 </p>

                            </Col>
                            <Col span={2}>
                                <Button onClick={videoControl}
                                        style={{position: "relative", left: 200, top: 80}}>暂停</Button>
                            </Col>


                        </Row>
                    </Col>
                    <Col span={6}> </Col>
                </Row>
                <Row className={style.tymain}>
                    <Row>
                        <Col span={4}> </Col>
                        <Col span={20} className={style.tymaintitle}>开展体验能为您带来各种可能</Col>
                    </Row>
                    <Row className={style.tybn} id='scrollDiv'>
                        <div className={style.tybnBox}>
                            <div className={style.img}>
                                <img
                                    src="https://a0.muscache.com/im/pictures/2bdf020b-303c-46a4-bf2c-6c6a8e775bd8.jpg?aki_policy=xx_large"
                                    alt=""/>
                            </div>
                            <div className={style.tybnText}>
                                <h3>
                                    以您的独到方式创建活动
                                </h3>
                                <p>
                                    自行车美食之旅、灯光秀夜景拍摄、在船上品尝小吃、有小山羊陪伴的瑜伽体验。您可以策划和打造让大家渴望尝试的独特活动。
                                </p>
                            </div>

                        </div>
                        <div className={style.tybnBox}>
                            <div className={style.img}>
                                <img
                                    src="https://a0.muscache.com/im/pictures/55b065f5-e6d9-4a0a-8066-9c1850db7660.jpg?aki_policy=xx_large"
                                    alt=""/>
                            </div>
                            <div className={style.tybnText}>
                                <h3>
                                    做自己喜欢的事情（并获得报酬）
                                </h3>
                                <p>
                                    开展街头艺术之旅、夕阳冲浪体验，把您的兴趣爱好转化为收入来源。不用拼命工作，照样能轻松赚取收入。
                                </p>
                            </div>

                        </div>
                        <div className={style.tybnBox}>
                            <div className={style.img}>
                                <img
                                    src="https://a0.muscache.com/im/pictures/d1d720a0-7253-4f89-b9b4-50759c376a9a.jpg?aki_policy=xx_large"
                                    alt=""/>
                            </div>
                            <div className={style.tybnText}>
                                <h3>
                                    让更多人了解您为之奋斗的事业
                                </h3>
                                <p>
                                    组织和救援犬同行的徒步体验或宣扬风尚理念，以全新方式提高大众对慈善和社区事业的认知。
                                </p>
                            </div>

                        </div>
                        <div style={{width: "400px"}}>
                            &nbsp;
                        </div>
                    </Row>
                </Row>

            </Row>
            <Row className={style.techang}>
                <Row className={style.techangHead}>
                    <Col span={12}>
                        <h3>展示你的特长</h3>
                    </Col>
                    <Col span={12}>
                        <p>
                            体验类别丰富，有音乐表演、舞蹈课、品酒等，您可以毫无束缚
                            地尽情发挥。以下是部分精选类别。
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col span={2}>

                    </Col>
                    <Col span={20} className={style.techangCard}>

                        <Card
                            hoverable
                            style={{width: 310, float: 'left', marginLeft: 20, boxShadow: "0px 0px 5px #ccc"}}
                            cover={<img alt="example"
                                        src="https://a0.muscache.com/im/pictures/36ad251f-02c2-486a-965f-1d473e25e509.jpg?aki_policy=x_large"/>}
                        >
                            <Row className={style.tcCardTit}>

                                <h3>文化与历史</h3>
                                <p>分享您所在城市著名地标背后的故事</p>
                                <span className={style.tcCardTitLink} style={{color: '#B83F5D'}}>浏览该类别</span>

                            </Row>


                        </Card>

                        <Card
                            hoverable
                            style={{width: 310, float: 'left', marginLeft: 20, boxShadow: "0px 0px 5px #ccc"}}
                            cover={<img alt="example"
                                        src="https://a0.muscache.com/im/pictures/eca85a07-8fad-4648-a4a4-b4c9283fdd65.jpg?aki_policy=x_large"/>}
                        >
                            <Row className={style.tcCardTit}>
                                <h3>美食</h3>
                                <p>您可以组织美食之旅、烹饪课、用餐体验及其他活动</p>
                                <span className={style.tcCardTitLink} style={{color: '#C98722'}}>浏览该类别</span>
                            </Row>


                        </Card>

                        <Card
                            hoverable
                            style={{width: 310, float: 'left', marginLeft: 20, boxShadow: "0px 0px 5px #ccc"}}
                            cover={<img alt="example"
                                        src="https://a0.muscache.com/im/pictures/1ecf2c03-5b86-4af3-a194-c18764eafbb3.jpg?aki_policy=x_large"/>}
                        >
                            <Row className={style.tcCardTit}>
                                <h3>自然与户外</h3>
                                <p>组织大自然徒步之旅、水上运动、山地运动等精彩活动</p>
                                <span className={style.tcCardTitLink} style={{color: '#888F22'}}>浏览该类别</span>
                            </Row>
                        </Card>

                    </Col>
                    <Col span={2}>

                    </Col>


                </Row>

            </Row>

            <Row className={style.jiaru}>
                <Row className={style.techangHead} style={{background: "#f9f9f9"}}>
                    <Col span={12}>
                        <h3>加入成长中的达人社区</h3>
                    </Col>
                    <Col span={12}>
                        <p>
                            我们的体验达人有厨师、艺术家、DJ和其他各行各业的人才。 体验达人帮助来自世界各地的人们彼此相连，让他们有机会参观独一无二的地方，参加独一无二的活动。
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col span={3}> </Col>
                    <Col span={18}>
                        <div className={style.jiarubox}>
                            <div className={style.jiarucon} style={{backgroundColor: "#ECEFDE", marginRight: '2%'}}>
                                <div className={style.jiaruImg}>
                                    <img
                                        src="https://a0.muscache.com/im/pictures/b7f0cbdb-2251-4513-b3cc-b93546606c7c.jpg?aki_policy=x_large"
                                        alt=""/>
                                </div>
                                <div className={style.jiaruText}>
                                    <h3>DJ Jigüe</h3>
                                    <p>Jigüe热衷于分享自己对古巴黑人音乐的热爱。听完他介绍古巴厚重的音乐史，有些参与者甚至去了德州的奥斯汀看他演出。</p>
                                    <h4>查看体验</h4>
                                </div>
                            </div>
                            <div className={style.jiarucon} style={{backgroundColor: "#F5E3CE"}}>
                                <div className={style.jiaruImg}>
                                    <img
                                        src="https://a0.muscache.com/im/pictures/ff8d1952-e25c-4df8-889f-a846f7b34897.jpg?aki_policy=x_large"
                                        alt=""/>
                                </div>
                                <div className={style.jiaruText}>
                                    <h3>Cici</h3>
                                    <p>烹饪体验达人Cici是上海人，她相信烹饪能够带来幸福。 她欢迎参与者来到她的厨房，学习如何以有趣的方式制作经典上海小笼包。</p>
                                    <h4>查看体验</h4>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col span={3}> </Col>
                </Row>

            </Row>
            <Row className={style.zhichi}>
                <Row className={style.techangHead}>
                    <Col span={12}>
                        <h3>我们全程为您提供支持</h3>
                    </Col>
                    <Col span={12}>
                        <p>
                            专门针对您开展体验的需求而提供的文章和见解等资源、为您和参与者提供24小时客服支持、提高体验曝光率等。
                        </p>
                    </Col>
                </Row>
                <Row className={style.zhichicon}>
                    <Col span={3}> </Col>
                    <Col span={18} className={style.zhichibox} style={{padding: "0 20px 0 20px"}}>
                        <Row className={style.zhichi1}>
                            <Col span={12} style={{marginTop: "1%", paddingLeft: "2.5%"}}>
                                <div className={style.zhichi1box}>
                                    <div><img
                                        src="https://a0.muscache.com/airbnb/static/packages/icon-uc-alarm.e0a2b02f.gif"
                                        alt=""/></div>
                                    <h4 className={style.zhichi1boxtit} style={{color: "#FD5B60"}}>达成目标</h4>
                                </div>
                                <div className={style.zhichi1box}>
                                    <div style={{borderColor: "#60B6B5"}}><img
                                        src="https://a0.muscache.com/airbnb/static/packages/icon-uc-calendar.ace59291.gif"
                                        alt=""/></div>
                                    <h4 className={style.zhichi1boxtit} style={{color: "#60B6B5"}}>安排体验</h4>
                                </div>
                                <div className={style.zhichi1box}>
                                    <div style={{borderColor: "#FFB400"}}><img
                                        src="https://a0.muscache.com/airbnb/static/packages/icon-uc-money-saved.0d988c4e.gif"
                                        alt=""/></div>
                                    <h4 className={style.zhichi1boxtit} style={{color: "#FFB400"}}>接受付款</h4>
                                </div>
                                <div className={style.zhichi1box}>
                                    <div style={{borderColor: "#60b6b5"}}><img
                                        src="https://a0.muscache.com/airbnb/static/packages/icon-uc-graph.3f8bd411.gif"
                                        alt=""/></div>
                                    <h4 className={style.zhichi1boxtit} style={{color: "#60b6b5"}}>数据支持</h4>
                                </div>
                            </Col>
                            <Col span={12}>
                                <div className={style.zhichi1text}>
                                    <h3>为您量身打造的工具</h3>
                                    <p>通过控制面板，您可以查看有价值的建议、收到改进建议，查看世界各地的参与者如何通过搜索和筛选功能发现您的体验，另外还有无忧支付和其他功能。</p>
                                </div>
                            </Col>
                        </Row>
                        <Row className={style.zhichi2}>
                            <div className={style.zhichi2con} style={{marginRight: "3%"}}>
                                <div className={style.zhichi2Limgbox}>
                                    <div className={style.zhichi2LimgL}>
                                        <img
                                            src="https://a0.muscache.com/airbnb/static/packages/insurance@2x.e06aa9c7.png"
                                            alt=""/>
                                    </div>
                                    <div className={style.zhichi2LimgR}>
                                        <span> </span>
                                        <p>大多数活动都提供高达一百万美元的体验保障险</p>
                                    </div>
                                </div>
                                <div className={style.zhichi2Ltit}>
                                    <h3>安心无忧</h3>
                                    <p>
                                        对于大多数体验项目，我们有高达100万美元的保险为您提供保障。 此外我们还提供24小时用户支持，让您可以专注追求您的兴趣所在。
                                        <a href="#">了解详情</a>
                                    </p>
                                </div>

                            </div>

                            <div className={style.zhichi2con}>
                                <div className={style.zhichi2Rimgbox}>
                                    <div>
                                        <img
                                            src="https://a0.muscache.com/im/pictures/3a775aa8-1242-4343-bd3e-70104b1b9a3c.jpg?aki_policy=x_large"
                                            alt=""/>
                                        <h3>最新动向</h3>
                                    </div>
                                    <div style={{marginLeft: '4%', marginRight: "4%"}}>
                                        <img
                                            src="https://a0.muscache.com/im/pictures/b4c1f176-6cfb-496e-aca2-83e139963502.jpg?aki_policy=x_large"
                                            alt=""/>
                                        <h3>特别福利</h3>
                                    </div>
                                    <div>
                                        <img
                                            src="https://a0.muscache.com/im/pictures/53682240-aa14-4690-9df2-14b521e9c884.jpg?aki_policy=x_large"
                                            alt=""/>
                                        <h3>达人活动</h3>
                                    </div>

                                </div>
                                <div className={style.zhichi2Ltit} style={{position: "relative", top: "-8%"}}>
                                    <h3>成长指南</h3>
                                    <p>
                                        每周简讯、文章和资源致力于帮助您在开展体验过程中的每一步都取得成功。
                                    </p>
                                </div>
                            </div>

                        </Row>
                    </Col>
                    <Col span={3}> </Col>
                </Row>
            </Row>
            <Row className={style.xinshou}>
                <Row className={style.techangHead} style={{backgroundColor: "#fdfdfd"}}>
                    <Col span={12}>
                        <h3>新手上路</h3>
                    </Col>
                    <Col span={12}>
                        <p>
                            开展体验的完整流程如下：
                        </p>
                    </Col>
                </Row>
                <Row className={style.xinshoucon}>
                    <Row>
                        <Col span={3}> </Col>
                        <Col span={18} style={{padding: "0 20px 0 20px"}}>
                            <div className={style.xinshoulc}>
                                <span className={style.yuanbiao}>1</span>
                                <h3>了解我们的品质标准</h3>
                                <p>满足我们对体验的要求：展现个人专业知识、提供独家专享资源、拉近人与人之间的距离。</p>
                            </div>
                            <div className={style.xinshoulc} style={{margin: "0 5%"}}>
                                <span className={style.yuanbiao}>2</span>
                                <h3>创建体验页面</h3>
                                <p>人们会通过您的体验页面找到您。请重点强调您的专业技能，添加一些高品质的照片，留下良好的第一印象。</p>
                            </div>
                            <div className={style.xinshoulc}>
                                <span className={style.yuanbiao}>3</span>
                                <h3>体验上线</h3>
                                <p>只要您的体验符合标准，您便可以添加可订日期，随心开展体验</p>
                            </div>
                        </Col>
                        <Col span={3}> </Col>
                    </Row>
                    <Row style={{marginTop: "60px"}}>
                        <Col span={11}> </Col>
                        <Col span={2}>
                            <Button className={style.fixedBtn} size='large' style={{color: "#fff"}}>开始吧</Button>
                        </Col>
                        <Col span={11}> </Col>
                    </Row>
                </Row>
            </Row>
            <Row className={style.wenti}>
                <Col span={3}> </Col>
                <Col span={18} style={{padding: "0 20px 0 20px"}}>
                    <h2 className={style.wentihead}>常见问题</h2>
                    <ul>
                        <li>
                            <h3>我必须要出租房屋，然后才能开展体验吗？</h3>
                            <div>不需要！开展体验无需在家中或其他地方留宿参与者。</div>
                        </li>
                        <li>
                            <h3>我需要多长时间开展一次体验？</h3>
                            <div>多长时间开展一次体验由你决定——你可以自由选择最合适的日期和时间。请记住，只有开放了可预订日期的体验才能被搜索和看到。</div>
                        </li>
                        <li>
                            <h3>我需要营业执照吗？</h3>
                            <div>某些体验可能需要提供营业执照，这取决于体验中涉及的活动。请务必查阅当地法律规定，确定你的体验中可能需要的执照，特别是体验中涉及食物、酒精或交通工具时，需要格外留心。
                                <a href="#">了解详情</a></div>
                        </li>
                        <li className={style.hidden}>
                            <h3>我能设置每次体验的最少参与人数吗？</h3>
                            <div>每次体验的参与人数至少为1人。</div>
                        </li>
                        <li className={style.hidden}>
                            <h3>我需要为参与者购买保险吗？</h3>
                            <div>体验保障险的承保范围包括了体验中的大部分活动，但飞行、驾驶这一类活动不在保险范围内。如果体验涉及这些活动，你可能需要自行购买保险。
                                <a href="#">了解详情</a></div>
                        </li>
                        <li className={style.hidden}>
                            <h3>我可以和别人一起组织体验吗？</h3>
                            <div>如果体验由你想和其他人共同开展，请在体验页面注明他们的名字，让参与者知道他们将和谁同行。所有体验组织者均需在爱彼迎平台上验证个人真实身份。</div>
                        </li>
                    </ul>
                    <h4 style={{height: "80px", lineHeight: "80px"}} onClick={xianshi}>
                        <span style={{fontSize: "16px", fontWeight: "800", color: "#008489"}}>显示更多</span>
                        <span className={style.iconfont} style={{fontSize: "14px", color: "#008489"}}>&#xe692;</span>
                    </h4>
                </Col>
                <Col span={3}> </Col>
            </Row>
            <Row className={style.qita}>
                <Col span={3}> </Col>
                <Col span={18} style={{padding: "0 20px 0 20px", position: "relative"}}>
                    <h2 className={style.qitahead}>浏览其他体验</h2>
                    <button type='button' className={style.diandongbtn} style={{top: "140px", left: "0"}}
                            onClick={runL}><span>1</span></button>
                    <Row className={style.diandong1wrap}>
                        <div className={style.diandong1} style={{
                            position: "absolute", left: '0', top: '0', transition: 'left  400ms'
                        }}>
                            <div className={style.diandong1item}>
                                <div className={style.diandong1img}
                                     style={{backgroundImage: 'url("https://z1.muscache.cn/4ea/air/v2/pictures/1a2600f4-9072-48c2-928b-1186279c8636.jpg?t=r:w375-h250-sfit,e:fjpg-c80")'}}> </div>
                                <h3>餐饮</h3>
                            </div>
                            <div className={style.diandong1item}>
                                <div className={style.diandong1img}
                                     style={{backgroundImage: 'url("https://z1.muscache.cn/4ea/air/v2/pictures/123db951-47d7-4509-808e-f4f613221407.jpg?t=r:w375-h250-sfit,e:fjpg-c80")'}}> </div>
                                <h3>音乐会</h3>
                            </div>
                            <div className={style.diandong1item}>
                                <div className={style.diandong1img}
                                     style={{backgroundImage: 'url("https://z1.muscache.cn/4ea/air/v2/pictures/f5e12cf3-45ff-427c-8c04-7ab9568c3018.jpg?t=r:w375-h250-sfit,e:fjpg-c80")'}}> </div>
                                <h3>课程和工作坊</h3>
                            </div>
                            <div className={style.diandong1item}>
                                <div className={style.diandong1img}
                                     style={{backgroundImage: 'url("https://z1.muscache.cn/4ea/air/v2/pictures/3f72f9a0-908b-456d-8f3f-29ba0ece52a9.jpg?t=r:w375-h250-sfit,e:fjpg-c80")'}}> </div>
                                <h3>冲浪</h3>
                            </div>
                            <div className={style.diandong1item}>
                                <div className={style.diandong1img}
                                     style={{backgroundImage: 'url("https://z1.muscache.cn/4ea/air/v2/pictures/e68fa5af-8ddc-4129-acf4-b7ceb591039e.jpg?t=r:w375-h250-sfit,e:fjpg-c80")'}}> </div>
                                <h3>艺术</h3>
                            </div>
                            <div className={style.diandong1item}>
                                <div className={style.diandong1img}
                                     style={{backgroundImage: 'url("https://z1.muscache.cn/4ea/air/v2/pictures/9cea780b-6b70-47cb-a11d-451849e427af.jpg?t=r:w375-h250-sfit,e:fjpg-c80")'}}> </div>
                                <h3>体育运动</h3>
                            </div>
                            <div className={style.diandong1item}>
                                <div className={style.diandong1img}
                                     style={{backgroundImage: 'url("https://z1.muscache.cn/4ea/air/v2/pictures/f912a732-213f-4a81-8ef8-145681b4236c.jpg?t=r:w375-h250-sfit,e:fjpg-c80")'}}> </div>
                                <h3>自然</h3>
                            </div>
                            <div className={style.diandong1item}>
                                <div className={style.diandong1img}
                                     style={{backgroundImage: 'url("https://z1.muscache.cn/4ea/air/v2/pictures/43db42c0-fc8e-49a4-bde7-0436df024c11.jpg?t=r:w375-h250-sfit,e:fjpg-c80")'}}> </div>
                                <h3>历史之旅</h3>
                            </div>
                            <div className={style.diandong1item}>
                                <div className={style.diandong1img}
                                     style={{backgroundImage: 'url("https://z1.muscache.cn/4ea/air/v2/pictures/44c6817d-4b3a-4f56-a717-82443d9c85e3.jpg?t=r:w375-h250-sfit,e:fjpg-c80")'}}> </div>
                                <h3>娱乐</h3>
                            </div>
                            <div className={style.diandong1item}>
                                <div className={style.diandong1img}
                                     style={{backgroundImage: 'url("https://z1.muscache.cn/4ea/air/v2/pictures/79e93efb-0806-46f4-858d-3a104b449593.jpg?t=r:w375-h250-sfit,e:fjpg-c80")'}}> </div>
                                <h3>烹饪课</h3>
                            </div>
                            <div className={style.diandong1item}>
                                <div className={style.diandong1img}
                                     style={{backgroundImage: 'url("https://z1.muscache.cn/4ea/air/v2/pictures/04eb09e2-e625-4d6a-af22-fa74bca16c05.jpg?t=r:w375-h250-sfit,e:fjpg-c80")'}}> </div>
                                <h3>健康与养生</h3>
                            </div>
                            <div className={style.diandong1item}>
                                <div className={style.diandong1img}
                                     style={{backgroundImage: 'url("https://z1.muscache.cn/4ea/air/v2/pictures/f61fb2a1-bd9e-4f05-ae0f-ad1194676efb.jpg?t=r:w375-h250-sfit,e:fjpg-c80")'}}> </div>
                                <h3>美食之旅</h3>
                            </div>
                            <div className={style.diandong1item}>
                                <div className={style.diandong1img}
                                     style={{backgroundImage: 'url("https://z1.muscache.cn/4ea/air/v2/pictures/6fce8029-e6c4-4cd6-a84a-c8633646622b.jpg?t=r:w375-h250-sfit,e:fjpg-c80")'}}> </div>
                                <h3>夜生活</h3>
                            </div>
                            <div className={style.diandong1item}>
                                <div className={style.diandong1img}
                                     style={{backgroundImage: 'url("https://z1.muscache.cn/4ea/air/v2/pictures/e1744e3c-405b-49d9-b0b6-a620f490f7ad.jpg?t=r:w375-h250-sfit,e:fjpg-c80")'}}> </div>
                                <h3>社会责任</h3>
                            </div>
                            <div className={style.diandong1item}>
                                <div className={style.diandong1img}
                                     style={{backgroundImage: 'url("https://z1.muscache.cn/4ea/air/v2/pictures/7f6df343-304b-457a-8b8d-a2896f0783d1.jpg?t=r:w375-h250-sfit,e:fjpg-c80")'}}> </div>
                                <h3>音乐</h3>
                            </div>
                        </div>
                    </Row>
                    <button type='button' className={style.diandongbtn} style={{top: '140px', right: '75px'}}
                            onClick={runR}><span>2</span></button>

                    <button type='button' className={style.diandongbtn} style={{top: '280px', left: '0'}}
                            onClick={runL2}><span>2</span></button>

                    <button type='button' className={style.diandongbtn} style={{top: '280px', right: '75px'}}
                            onClick={runR2}><span>2</span></button>
                    <Row className={style.diandong2wrap}>
                        <div className={style.diandong2} style={{
                            position: "absolute", left: '0', top: '0', transition: 'left  400ms'
                        }}>
                            <Card
                                hoverable
                                bodyStyle={{padding:3}}
                                style={{width: 246,border:"none",marginRight:20}}
                                cover={<img alt="example"
                                            src="https://z1.muscache.cn/im/pictures/d4045b4d-9326-4722-ba64-4e6474bb5cd6.jpg?aki_policy=large"
                                            style={{borderRadius:5}}/>}
                            >
                                <span className={style.diandong2dz}>青岛</span>
                                <h4 className={style.diandong2tit}>青岛CityWalk·阿喜的私人订制</h4>
                                <p className={style.diandong2price}>每人￥249</p>
                                <p className={style.diandong2xing}>5.0*<span>(14)</span></p>
                            </Card>
                            <Card
                                hoverable
                                bodyStyle={{padding:3}}
                                style={{width: 246,border:"none",marginRight:20}}
                                cover={<img alt="example"
                                            src="https://z1.muscache.cn/im/pictures/d4045b4d-9326-4722-ba64-4e6474bb5cd6.jpg?aki_policy=large"
                                            style={{borderRadius:5}}/>}
                            >
                                <span className={style.diandong2dz}>青岛</span>
                                <h4 className={style.diandong2tit}>青岛CityWalk·阿喜的私人订制</h4>
                                <p className={style.diandong2price}>每人￥249</p>
                                <p className={style.diandong2xing}>5.0*<span>(14)</span></p>
                            </Card>
                            <Card
                                hoverable
                                bodyStyle={{padding:3}}
                                style={{width: 246,border:"none",marginRight:20}}
                                cover={<img alt="example"
                                            src="https://z1.muscache.cn/im/pictures/d4045b4d-9326-4722-ba64-4e6474bb5cd6.jpg?aki_policy=large"
                                            style={{borderRadius:5}}/>}
                            >
                                <span className={style.diandong2dz}>青岛</span>
                                <h4 className={style.diandong2tit}>青岛CityWalk·阿喜的私人订制</h4>
                                <p className={style.diandong2price}>每人￥249</p>
                                <p className={style.diandong2xing}>5.0*<span>(14)</span></p>
                            </Card>
                            <Card
                                hoverable
                                bodyStyle={{padding:3}}
                                style={{width: 246,border:"none",marginRight:20}}
                                cover={<img alt="example"
                                            src="https://z1.muscache.cn/im/pictures/d4045b4d-9326-4722-ba64-4e6474bb5cd6.jpg?aki_policy=large"
                                            style={{borderRadius:5}}/>}
                            >
                                <span className={style.diandong2dz}>青岛</span>
                                <h4 className={style.diandong2tit}>青岛CityWalk·阿喜的私人订制</h4>
                                <p className={style.diandong2price}>每人￥249</p>
                                <p className={style.diandong2xing}>5.0*<span>(14)</span></p>
                            </Card>
                            <Card
                                hoverable
                                bodyStyle={{padding:3}}
                                style={{width: 246,border:"none",marginRight:20}}
                                cover={<img alt="example"
                                            src="https://z1.muscache.cn/im/pictures/d4045b4d-9326-4722-ba64-4e6474bb5cd6.jpg?aki_policy=large"
                                            style={{borderRadius:5}}/>}
                            >
                                <span className={style.diandong2dz}>青岛</span>
                                <h4 className={style.diandong2tit}>青岛CityWalk·阿喜的私人订制</h4>
                                <p className={style.diandong2price}>每人￥249</p>
                                <p className={style.diandong2xing}>5.0*<span>(14)</span></p>
                            </Card>
                            <Card
                                hoverable
                                bodyStyle={{padding:3}}
                                style={{width: 246,border:"none",marginRight:20}}
                                cover={<img alt="example"
                                            src="https://z1.muscache.cn/im/pictures/d4045b4d-9326-4722-ba64-4e6474bb5cd6.jpg?aki_policy=large"
                                            style={{borderRadius:5}}/>}
                            >
                                <span className={style.diandong2dz}>青岛</span>
                                <h4 className={style.diandong2tit}>青岛CityWalk·阿喜的私人订制</h4>
                                <p className={style.diandong2price}>每人￥249</p>
                                <p className={style.diandong2xing}>5.0*<span>(14)</span></p>
                            </Card>
                            <Card
                                hoverable
                                bodyStyle={{padding:3}}
                                style={{width: 246,border:"none",marginRight:20}}
                                cover={<img alt="example"
                                            src="https://z1.muscache.cn/im/pictures/d4045b4d-9326-4722-ba64-4e6474bb5cd6.jpg?aki_policy=large"
                                            style={{borderRadius:5}}/>}
                            >
                                <span className={style.diandong2dz}>青岛</span>
                                <h4 className={style.diandong2tit}>青岛CityWalk·阿喜的私人订制</h4>
                                <p className={style.diandong2price}>每人￥249</p>
                                <p className={style.diandong2xing}>5.0*<span>(14)</span></p>
                            </Card>
                            <Card
                                hoverable
                                bodyStyle={{padding:3}}
                                style={{width: 246,border:"none",marginRight:20}}
                                cover={<img alt="example"
                                            src="https://z1.muscache.cn/im/pictures/d4045b4d-9326-4722-ba64-4e6474bb5cd6.jpg?aki_policy=large"
                                            style={{borderRadius:5}}/>}
                            >
                                <span className={style.diandong2dz}>青岛</span>
                                <h4 className={style.diandong2tit}>青岛CityWalk·阿喜的私人订制</h4>
                                <p className={style.diandong2price}>每人￥249</p>
                                <p className={style.diandong2xing}>5.0*<span>(14)</span></p>
                            </Card>
                            <Card
                                hoverable
                                bodyStyle={{padding:3}}
                                style={{width: 246,border:"none",marginRight:20}}
                                cover={<img alt="example"
                                            src="https://z1.muscache.cn/im/pictures/d4045b4d-9326-4722-ba64-4e6474bb5cd6.jpg?aki_policy=large"
                                            style={{borderRadius:5}}/>}
                            >
                                <span className={style.diandong2dz}>青岛</span>
                                <h4 className={style.diandong2tit}>青岛CityWalk·阿喜的私人订制</h4>
                                <p className={style.diandong2price}>每人￥249</p>
                                <p className={style.diandong2xing}>5.0*<span>(14)</span></p>
                            </Card>
                            <Card
                                hoverable
                                bodyStyle={{padding:3}}
                                style={{width: 246,border:"none",marginRight:20}}
                                cover={<img alt="example"
                                            src="https://z1.muscache.cn/im/pictures/d4045b4d-9326-4722-ba64-4e6474bb5cd6.jpg?aki_policy=large"
                                            style={{borderRadius:5}}/>}
                            >
                                <span className={style.diandong2dz}>青岛</span>
                                <h4 className={style.diandong2tit}>青岛CityWalk·阿喜的私人订制</h4>
                                <p className={style.diandong2price}>每人￥249</p>
                                <p className={style.diandong2xing}>5.0*<span>(14)</span></p>
                            </Card>
                            <Card
                                hoverable
                                bodyStyle={{padding:3}}
                                style={{width: 246,border:"none",marginRight:20}}
                                cover={<img alt="example"
                                            src="https://z1.muscache.cn/im/pictures/d4045b4d-9326-4722-ba64-4e6474bb5cd6.jpg?aki_policy=large"
                                            style={{borderRadius:5}}/>}
                            >
                                <span className={style.diandong2dz}>青岛</span>
                                <h4 className={style.diandong2tit}>青岛CityWalk·阿喜的私人订制</h4>
                                <p className={style.diandong2price}>每人￥249</p>
                                <p className={style.diandong2xing}>5.0*<span>(14)</span></p>
                            </Card>
                            <Card
                                hoverable
                                bodyStyle={{padding:3}}
                                style={{width: 246,border:"none",marginRight:20}}
                                cover={<img alt="example"
                                            src="https://z1.muscache.cn/im/pictures/d4045b4d-9326-4722-ba64-4e6474bb5cd6.jpg?aki_policy=large"
                                            style={{borderRadius:5}}/>}
                            >
                                <span className={style.diandong2dz}>青岛</span>
                                <h4 className={style.diandong2tit}>青岛CityWalk·阿喜的私人订制</h4>
                                <p className={style.diandong2price}>每人￥249</p>
                                <p className={style.diandong2xing}>5.0*<span>(14)</span></p>
                            </Card>
                            <Card
                                hoverable
                                bodyStyle={{padding:3}}
                                style={{width: 246,border:"none",marginRight:20}}
                                cover={<img alt="example"
                                            src="https://z1.muscache.cn/im/pictures/d4045b4d-9326-4722-ba64-4e6474bb5cd6.jpg?aki_policy=large"
                                            style={{borderRadius:5}}/>}
                            >
                                <span className={style.diandong2dz}>青岛</span>
                                <h4 className={style.diandong2tit}>青岛CityWalk·阿喜的私人订制</h4>
                                <p className={style.diandong2price}>每人￥249</p>
                                <p className={style.diandong2xing}>5.0*<span>(14)</span></p>
                            </Card>
                            <Card
                                hoverable
                                bodyStyle={{padding:3}}
                                style={{width: 246,border:"none",marginRight:20}}
                                cover={<img alt="example"
                                            src="https://z1.muscache.cn/im/pictures/d4045b4d-9326-4722-ba64-4e6474bb5cd6.jpg?aki_policy=large"
                                            style={{borderRadius:5}}/>}
                            >
                                <span className={style.diandong2dz}>青岛</span>
                                <h4 className={style.diandong2tit}>青岛CityWalk·阿喜的私人订制</h4>
                                <p className={style.diandong2price}>每人￥249</p>
                                <p className={style.diandong2xing}>5.0*<span>(14)</span></p>
                            </Card>
                            <Card
                                hoverable
                                bodyStyle={{padding:3}}
                                style={{width: 246,border:"none",marginRight:20}}
                                cover={<img alt="example"
                                            src="https://z1.muscache.cn/im/pictures/d4045b4d-9326-4722-ba64-4e6474bb5cd6.jpg?aki_policy=large"
                                            style={{borderRadius:5}}/>}
                            >
                                <span className={style.diandong2dz}>青岛</span>
                                <h4 className={style.diandong2tit}>青岛CityWalk·阿喜的私人订制</h4>
                                <p className={style.diandong2price}>每人￥249</p>
                                <p className={style.diandong2xing}>5.0*<span>(14)</span></p>
                            </Card>
                            <Card
                                hoverable
                                bodyStyle={{padding:3}}
                                style={{width: 246,border:"none",marginRight:20}}
                                cover={<img alt="example"
                                            src="https://z1.muscache.cn/im/pictures/d4045b4d-9326-4722-ba64-4e6474bb5cd6.jpg?aki_policy=large"
                                            style={{borderRadius:5}}/>}
                            >
                                <span className={style.diandong2dz}>青岛</span>
                                <h4 className={style.diandong2tit}>青岛CityWalk·阿喜的私人订制</h4>
                                <p className={style.diandong2price}>每人￥249</p>
                                <p className={style.diandong2xing}>5.0*<span>(14)</span></p>
                            </Card>
                            <Card
                                hoverable
                                bodyStyle={{padding:3}}
                                style={{width: 246,border:"none",marginRight:20}}
                                cover={<img alt="example"
                                            src="https://z1.muscache.cn/im/pictures/d4045b4d-9326-4722-ba64-4e6474bb5cd6.jpg?aki_policy=large"
                                            style={{borderRadius:5}}/>}
                            >
                                <span className={style.diandong2dz}>青岛</span>
                                <h4 className={style.diandong2tit}>青岛CityWalk·阿喜的私人订制</h4>
                                <p className={style.diandong2price}>每人￥249</p>
                                <p className={style.diandong2xing}>5.0*<span>(14)</span></p>
                            </Card>
                            <Card
                                hoverable
                                bodyStyle={{padding:3}}
                                style={{width: 246,border:"none",marginRight:20}}
                                cover={<img alt="example"
                                            src="https://z1.muscache.cn/im/pictures/d4045b4d-9326-4722-ba64-4e6474bb5cd6.jpg?aki_policy=large"
                                            style={{borderRadius:5}}/>}
                            >
                                <span className={style.diandong2dz}>青岛</span>
                                <h4 className={style.diandong2tit}>青岛CityWalk·阿喜的私人订制</h4>
                                <p className={style.diandong2price}>每人￥249</p>
                                <p className={style.diandong2xing}>5.0*<span>(14)</span></p>
                            </Card>
                            <Card
                                hoverable
                                bodyStyle={{padding:3}}
                                style={{width: 246,border:"none",marginRight:20}}
                                cover={<img alt="example"
                                            src="https://z1.muscache.cn/im/pictures/d4045b4d-9326-4722-ba64-4e6474bb5cd6.jpg?aki_policy=large"
                                            style={{borderRadius:5}}/>}
                            >
                                <span className={style.diandong2dz}>青岛</span>
                                <h4 className={style.diandong2tit}>青岛CityWalk·阿喜的私人订制</h4>
                                <p className={style.diandong2price}>每人￥249</p>
                                <p className={style.diandong2xing}>5.0*<span>(14)</span></p>
                            </Card>
                            <Card
                                hoverable
                                bodyStyle={{padding:3}}
                                style={{width: 246,border:"none",marginRight:20}}
                                cover={<img alt="example"
                                            src="https://z1.muscache.cn/im/pictures/d4045b4d-9326-4722-ba64-4e6474bb5cd6.jpg?aki_policy=large"
                                            style={{borderRadius:5}}/>}
                            >
                                <span className={style.diandong2dz}>青岛</span>
                                <h4 className={style.diandong2tit}>青岛CityWalk·阿喜的私人订制</h4>
                                <p className={style.diandong2price}>每人￥249</p>
                                <p className={style.diandong2xing}>5.0*<span>(14)</span></p>
                            </Card>

                        </div>
                    </Row>
                </Col>
                <Col span={3}> </Col>
            </Row>
            <Row style={{backgroundColor:"#fff"}}>
                <Footer> </Footer>
            </Row>
        </div>
    )


}

export default Index;