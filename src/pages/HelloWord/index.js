import React, { Fragment, PureComponent } from 'react';
import { Card, Button,BackTop,Icon,Input} from 'antd';
import InputDemo from './InputDemo'
const style = {
    width: '400px',
    margin: '30px',
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
    border: '1px solid #e8e8e8',
}
class QWER extends PureComponent {
    state={
        inputvalue:''
    }
    handButton=()=>{
        this.setState({
            inputvalue:'123'
        })
    }
    render() {
        return (
            <div>
                <Button type="primary" ghost>
                </Button>
                <Button ghost>
                    Default</Button>
                <Button type="dashed" ghost>
                    Dashed
                </Button>

                <Card style={style} actions={[<a>存钱</a>, <a>取钱</a>]} title="宝江的支付宝" >
                    <Card.Meta
                        avatar={<img
                            alt=""
                            style={{ width: '64px', height: '64px', borderRadius: '36px' }}
                            src="https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png"
                        />
                        }
                        title="展示信息"
                        description="13213123131231"
                    />
                </Card> 
                <BackTop />
          <strong style={{ color: 'rgba(64, 64, 64, 0.6)' }}> gray </strong>
          <Icon type="home" />
          <br/>
          <br/>
          <Button onClick={this.handButton}>点击</Button>
          <input value={this.state.inputvalue}/>
          <InputDemo/>
            </div>
        )

    }
}
export default QWER;
