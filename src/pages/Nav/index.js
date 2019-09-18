import React, { Component } from 'react';
import styles from './index.css'
import Link from 'umi/link';
import Register from '../register/index';
import Login from '../login/index';
import { Row, Col } from 'antd';
import Help from '../help/index';
export default class Nav extends Component {
    constructor(props) {
        super(props)
        this.state = {
            huilv: "人民币-￥",
            crete:{}
        }
    }
    ipt() {
        this.setState({
            crete:{width:"600px",transition:"width 400ms"}
        })
    }
    ipts() {
        this.setState({
            crete:{width:"460px",transition:"width 400ms"}
        })
    }


    render() {
        return (
            <div>
                <Row>
                    <div className={styles.top}>
                        {/* 导航 */}
                        <Col span={1}>
                            <a className={styles.topLeft}>
                                <div className={styles.logo}></div>
                            </a>
                        </Col>
                        {/* 搜索框 */}
                        <Col span={7}>
                            <div className={styles.topMidd} ref="sousuo" style={this.state.crete}>
                                <Row>
                                    <Col span={2}><div className={styles.fadajin}></div></Col>
                                    <Col span={22}><input type="search" className={styles.tex} placeholder="搜“克里特岛(Crete)”试试" onFocus={this.ipt.bind(this)} onBlur={this.ipts.bind(this)} /></Col>
                                </Row>
                            </div>
                        </Col>
                        {/* 导航 */}
                        <Col span={16}>
                            <div className={styles.topRight}>
                                <ul>
                                    <li>
                                        <div className={styles.nav}>{this.state.huilv}</div>
                                    </li>

                                    <li>
                                        <div className={styles.nav}>手机端</div>
                                    </li>
                                    <li>
                                        <Link to="/host/homes" className={styles.nav}>出租房源</Link>
                                    </li>
                                    <li>
                                        <Link to="/kaizhanty" className={styles.nav}>开展体验</Link>
                                    </li>
                                    <li>
                                        <Link to="/" className={styles.nav}>故事</Link>
                                    </li>
                                    <li>
                                        <Link to="/" className={styles.nav}>历史足迹</Link>
                                    </li>
                                    <li>
                                       
                                       <div className={styles.nav}>
                                            <Help/>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={styles.nav}>
                                            <Register  />
                                        </div>
                                    </li>
                                    <li>
                                        <div className={styles.nav}>
                                            <Login  />
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </div>
                </Row>
            </div>

        )
    }
}
