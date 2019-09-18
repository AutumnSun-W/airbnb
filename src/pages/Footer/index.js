import React, { Component } from 'react';
import styles from './index.css';
import { Row, Col, Icon } from 'antd';
export default class Footer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            buts:"中文(简体)",
            money:"人民币-￥"
        }
    }
    render() {
        return (
            <div className={styles.foot}>
                <div className={styles.foot1}>
                    <Row>
                        <Col span={6}>
                            <div className={styles.aby}>
                                <h4 className={styles.biaoti4}>爱彼迎</h4>
                                <ul className={styles.caidan}>
                                    <li>
                                        <a href="#">工作机会</a>
                                    </li>
                                    <li>
                                        <a href="#">爱彼迎新闻</a>
                                    </li>
                                    <li>
                                        <a href="#">政策</a>
                                    </li>
                                    <li>
                                        <a href="#">帮助</a>
                                    </li>
                                    <li>
                                        <a href="#">多元化与归属感</a>
                                    </li>
                                    <li>
                                        <a href="#">无障碍设施</a>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col span={6}>
                            <div className={styles.aby}>
                                <h4 className={styles.biaoti4}>发现</h4>
                                <ul className={styles.caidan}>
                                    <li>
                                        <a href="#">信任与安全</a>
                                    </li>
                                    <li>
                                        <a href="#">旅行基金</a>
                                    </li>
                                    <li>
                                        <a href="#">爱彼迎公民</a>
                                    </li>
                                    <li>
                                        <a href="#">商务差旅</a>
                                    </li>
                                    <li>
                                        <a href="#">旅游指南</a>
                                    </li>
                                    <li>
                                        <a href="#">爱彼迎杂志</a>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col span={6}>
                            <div className={styles.aby}>
                                <h4 className={styles.biaoti4}>出租</h4>
                                <ul className={styles.caidan}>
                                    <li>
                                        <a href="#">为什么要出租?</a>
                                    </li>
                                    <li>
                                        <a href="#">待客之道</a>
                                    </li>
                                    <li>
                                        <a href="#">房东义务</a>
                                    </li>
                                    <li>
                                        <a href="#">开展体验</a>
                                    </li>
                                    <li>
                                        <a href="#">Open Homes</a>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col span={6}>
                            <div className={styles.aby}>
                                <ul className={styles.tiaokuan}>
                                    <li>
                                        <span><a href="#"><Icon type="weibo" style={{ fontSize: "18px" }} /></a></span>
                                        <span><a href="#"><Icon type="wechat" style={{ fontSize: "18px" }} /></a></span>
                                    </li>
                                    <li style={{ marginTop: "16px" }}>
                                        <a href="#">条款</a>
                                    </li>
                                    <li>
                                        <a href="#">隐私政策</a>
                                    </li>
                                    <li>
                                        <a href="#">网站地图</a>
                                    </li>

                                </ul>
                            </div>
                        </Col>
                    </Row>

                    <div className={styles.foot2}>
                    <Row>
                        <Col span={19}>
                            <div className={styles.tubiao}><svg t="1568637191069" className={styles.icon} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="925" width="26" height="26"><path d="M769.896296 845.748148c-66.37037 37.925926-136.533333-13.274074-189.629629-70.162963 47.407407-64.474074 92.918519-140.325926 94.814814-219.97037 1.896296-75.851852-39.822222-132.740741-100.503703-155.496296-32.237037-11.377778-68.266667-13.274074-100.503704-3.792593-60.681481 17.066667-104.296296 70.162963-109.985185 136.533333-7.585185 85.333333 43.614815 174.459259 94.814815 242.725926-30.340741 34.133333-72.059259 70.162963-115.674074 79.644445-77.748148 18.962963-144.118519-54.992593-117.570371-134.637037 15.17037-39.822222 223.762963-494.933333 257.896297-523.377778 20.859259-17.066667 54.992593-17.066667 77.748148 1.896296 32.237037 28.444444 244.622222 487.348148 256 529.066667 13.274074 47.407407-7.585185 94.814815-47.407408 117.57037M521.481481 701.62963c-18.962963-26.548148-34.133333-51.2-47.407407-79.644445-18.962963-43.614815-30.340741-100.503704 9.481482-127.051852 24.651852-17.066667 60.681481-15.17037 83.437037 5.688889 28.444444 24.651852 20.859259 70.162963 7.585185 104.296297-13.274074 36.02963-34.133333 70.162963-53.096297 96.711111M625.777778 136.533333c-58.785185-56.888889-155.496296-53.096296-208.592593 1.896297C367.881481 185.837037 144.118519 663.703704 136.533333 726.281481c-18.962963 121.362963 79.644444 229.451852 199.111111 221.866667 75.851852-3.792593 136.533333-49.303704 187.733334-104.296296 89.125926 92.918519 201.007407 142.222222 303.407407 72.059259 53.096296-36.02963 85.333333-98.607407 85.333334-164.977778C908.325926 661.807407 667.496296 174.459259 625.777778 136.533333" p-id="926"></path></svg></div>
                            <div className={styles.zhizao}><p style={{lineHeight:"24pxs"}}>京ICP备16017121号-3 京ICP证 160773号 中国公安局标志<img src="https://z1.muscache.cn/airbnb/static/packages/public_security_bureau_logo.d0289dc0.png" alt=""/> <a href="#">京公网安备 11010502032345号</a> 安彼迎网络（北京）有限公司</p> 营业执照© 2019 Airbnb, Inc. All rights reserved.</div>
                        </Col>
                        <Col span={5}>
                            <div className={styles.but}>
                                <button className={styles.buts}>{this.state.buts}</button>
                                <button className={styles.money}>{this.state.money}</button>
                            </div>
                        </Col>
                        </Row>

                    </div>
                </div>

            </div>
        )
    }
}