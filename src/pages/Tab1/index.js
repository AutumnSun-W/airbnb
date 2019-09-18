import React, { Component } from 'react';
import styles from './index.css'
import Link from 'umi/link';
import axios from 'axios'
import { Button, Icon } from 'antd';
export default class Tab1 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            autumns: ["重庆", "北京", "杭州", "大理", "台北", "东京", "伦敦", "纽约"],
            autuLi: {
                float: "left",
                fontSize: "17px",
                padding: "14px 16px",
                border: "solid 0.5px #D8D8D8",
                minWidth: "120px",
                height: "48px",
                textAlign: " center",
                lineHeight: "20px",
                fontWeight: " bold ",
                marginRight: "16px",
                cursor: "pointer",
                
            },
            num: 7,
            list: [],
            cakan: "南京",
            buts: { display: "none" },
            buts1: { display: "block" },
            fany: { position: "absolute", left: "0px" }
        }
    }
    componentDidMount() {
        let _this = this
        let titles1 = document.querySelectorAll(".index__fangyuan___2FUFT li")
        for (let i = 0; i < titles1.length; i++) {
            titles1[i].onclick = function () {
                for (let i = 0; i < titles1.length; i++) titles1[i].classList.remove("index__autuLi___3CRzw");
                this.classList.add('index__autuLi___3CRzw')
                let cakans=_this.state.autumns[i]
                let inst=i+7
                _this.setState({
                    num: inst,
                    cakan: cakans
                })
                axios({
                    url: "http://jx.xuzhixiang.top/ap/api/allproductlist.php",
                    params: { uid: 19802, pagesize: 6, pagenum: _this.state.num }
                }).then((data) => {
                    _this.setState({
                        list: data.data.data
                    })
                })
            }
        }
        axios({
            url: "http://jx.xuzhixiang.top/ap/api/allproductlist.php",
            params: { uid: 19802, pagesize: 6, pagenum:_this.state.num }
        }).then((data) => {
            _this.setState({
                list: data.data.data
            })
        })


    }

    buts() {
        this.setState({
            buts: { display: "none" },
            buts1: { display: "block" },
            fany: { position: "absolute", left: "0px" ,transition:"left 400ms"}
        })
    }
    buts1() {
        this.setState({
            buts: { display: "block" },
            buts1: { display: "none" },
            fany: { position: "absolute", left: "-60px",transition:"left 400ms"}
        })
    }

    render() {
        return (
            <div className={styles.min}>

                <div className={styles.autumn}>
                    <div className={styles.fubiao}>
                        <h3>热门目的地</h3>
                    </div>
                    <div className={styles.box}>
                        <ul className={styles.fangyuan} style={this.state.fany}>
                            <li className={styles.autuLi} style={this.state.autuLi}>{this.state.autumns[0]}</li>
                            <li style={this.state.autuLi}>{this.state.autumns[1]}</li>
                            <li style={this.state.autuLi}>{this.state.autumns[2]}</li>
                            <li style={this.state.autuLi}>{this.state.autumns[3]}</li>
                            <li style={this.state.autuLi}>{this.state.autumns[4]}</li>
                            <li style={this.state.autuLi}>{this.state.autumns[5]}</li>
                            <li style={this.state.autuLi}>{this.state.autumns[6]}</li>
                            <li style={this.state.autuLi}>{this.state.autumns[7]}</li>
                        </ul>

                    </div>
                    <div className={styles.zansi}>
                        <ul>
                            {
                                this.state.list.map((item, i) => {
                                    return (
                                        <li key={i}>
                                            <Link to="/">
                                                <img src={item.pimg} alt="" />
                                                <p className={styles.zansip}>{item.pname}</p>
                                                <span>{item.pdesc}</span>
                                                <p className={styles.zansijin}>￥{item.pprice}</p>
                                            </Link>
                                            <div>评价</div>
                                        </li>
                                    )
                                })
                            }
                        </ul>

                    </div>
                    <Link to="/" className={styles.cakan}>查看更多{this.state.cakan}房源></Link>
                </div>
                <Button type="primary" shape="circle" style={this.state.buts} className={styles.buts} onClick={this.buts.bind(this)}>
                    <Icon type="left" />
                </Button>
                <Button type="primary" shape="circle" style={this.state.buts1} className={styles.buts1} onClick={this.buts1.bind(this)}>
                    <Icon type="right" />
                </Button>
            </div>



        )
    }
}
