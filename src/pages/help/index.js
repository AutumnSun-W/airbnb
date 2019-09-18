import React from 'react';
import { Card, Icon, Input } from 'antd';
import style from './index.css';
import { connect } from 'dva';
import Child from './child';
import Childs from './childs';
class Help extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            val: ''
        }
    }
    
    ophelp = () => {
        this.props.dispatch({
            type: 'user/change',
            payload: {
                ophelp: 'block'
            }
        })
    }
    close = () => {
        this.props.dispatch({
            type: 'user/change',
            payload: {
                ophelp: 'none'
            }
        })
    }
    back = () => {
        this.props.dispatch({
            type: 'user/change',
            payload: {
                helpHome: 'block',
                help: 'none'
            }
        })
    }
    
    change = e => {
        this.setState({
            val: e.target.value
        },()=>this.changeOn())
        console.log(this.state.val)
    }
    changeOn =()=>{
        if (this.state.val == ''
        ) {
            this.props.dispatch({
                type: 'user/change',
                payload: {
                    searchHome: 'block',
                    search: 'none'
                }
            })
        } else {
            this.props.dispatch({
                type: 'user/change',
                payload: {
                    searchHome: 'none',
                    search: 'block'
                }
            })
        }
    }
    render() {
        return (
            <div >
                <div onClick={this.ophelp}>帮助</div>
                <Card className={style.helpcss} title="推荐帮助" extra={<span onClick={this.close} className={style.close}><Icon type="close" /></span>} style={{ width: 400, display: this.props.ophelp }}
                    headStyle={{ fontSize: '16px', fontWeight: 600 }}
                    bodyStyle={{ width: '100%', height: '100%' }}
                >
                    <div style={{ display: this.props.helpHome }}>
                        <p className={style.title}>按关键字搜索</p>
                        <Input prefix={<Icon type="search" style={{ fontSize: '16px' }} />}
                            placeholder='例如：预订状态' className={style.search}
                            onChange={this.change} value={this.state.val}
                        />
                        <div style={{ display: this.props.searchHome }}>
                            <p className={style.text}>推荐文章</p>
                            <Child />
                        </div>
                        <div style={{ display: this.props.search }}>
                            <p className={style.searchText}>[{this.state.val}]的搜索结果</p>

                        </div>
                    </div>
                    <div style={{ display: this.props.help }}>
                        <div className={style.back} onClick={this.back}>
                            <Icon type="left" /> 返回</div>
                        <Childs />
                    </div>
                </Card>
            </div>
        )
    }
}
export default connect(state => state.user)(Help)