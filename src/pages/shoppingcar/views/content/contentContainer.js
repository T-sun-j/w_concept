import React, { Component } from 'react'
import { CarContent, Sum, MaskContent } from './styleComponents'
import { ListView, List, Checkbox, Flex } from 'antd-mobile';
// import { MaskContent} from './maskContainer'
//复选框
const CheckboxItem = Checkbox.CheckboxItem;
const AgreeItem = Checkbox.AgreeItem;

//长列表
const data = [
    {
        img: 'https://img01.wconceptimg.cn/media/catalog/product/S/i/Simg_15408826391629_l.jpg!/fw/250/fh/250',
        title: 'Meet hotel',
        des: '韩版休闲长袖立领宽松中性款牛皮皮衣',
    },
    {
        img: 'https://img01.wconceptimg.cn/media/catalog/product/S/i/Simg_15501116521116_l.jpg!/fw/250/fh/250',
        title: 'McDonald\'s invites you',
        des: 'HOWL设计师品牌情人节撞色复古情侣西服外套女',
    },
    {
        img: 'https://img01.wconceptimg.cn/media/catalog/product/w/i/wimg_451109201_5446614.jpg!/fw/250/fh/250',
        title: 'Eat the week',
        des: '不是所有的兼职汪都需要风吹日晒',
    },
];

const data1 = [
    { value: 0 },
];

const NUM_ROWS = 20;
let pageIndex = 0;

function genData(pIndex = 0) {
    const dataBlob = {};
    for (let i = 0; i < NUM_ROWS; i++) {
        const ii = (pIndex * NUM_ROWS) + i;
        dataBlob[`${ii}`] = `row - ${ii}`;
    }
    return dataBlob;
}

export default class contentContainers extends Component {
    constructor(props) {
        super(props);
        const dataSource = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2,
        });

        this.state = {
            dataSource,
            isLoading: true,
        };
    }

    componentDidMount() {
        // you can scroll to the specified position
        // setTimeout(() => this.lv.scrollTo(0, 120), 800);

        // simulate initial Ajax
        setTimeout(() => {
            this.rData = genData();
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(this.rData),
                isLoading: false,
            });
        }, 600);
    }
    // 复选框
    onChange = (val) => {
        console.log(val);
    }
    render() {
        const separator = (sectionID, rowID) => (
            <div
                key={`${sectionID}-${rowID}`}
                style={{
                    backgroundColor: '#F5F5F9',
                    height: 8,
                    borderTop: '1px solid #ECECED',
                    borderBottom: '1px solid #ECECED',
                }}
            />
        );
        let index = data.length - 1;
        const row = (rowData, sectionID, rowID) => {
            if (index < 0) {
                index = data.length - 1;
            }
            const obj = data[index--];
            return (
                <div key={rowID} style={{ padding: '0 15px' }}>
                    <div
                        style={{
                            lineHeight: '50px',
                            color: '#888',
                            fontSize: 18,
                            borderBottom: '1px solid #F6F6F6',
                        }}
                    >
                        {/* 复选框 */}
                        <List >
                            {data1.map(i => (
                                <CheckboxItem key={i.value} onChange={() => this.onChange(i.value)}>
                                    {i.label}  {obj.title}
                                </CheckboxItem>
                            ))}
                        </List></div>
                    <div style={{ display: '-webkit-box', display: 'flex', padding: '15px 0' }}>
                        <img style={{ height: '64px', marginRight: '15px' }} src={obj.img} alt="" />
                        <div style={{ lineHeight: 1 }}>
                            <div style={{ marginBottom: '8px', fontWeight: 'bold' }}>{obj.des}</div>
                            {/* 点击事件 */}
                            <div className="option">
                                <span>1件</span>
                                <span>黑色</span>
                                <span>M</span>
                                <div className="ico">
                                    <img src="https://img03.wconceptimg.cn/static/a.m/images/go.to/go.to.black.png" />
                                </div>

                            </div>
                            <div>¥<span style={{ fontSize: '14px', color: '#000' }}>{rowID}</span></div>
                        </div>
                    </div>
                </div>
            );
        };
        return (
            <div>
                <CarContent>
                    <div className="centerBox">
                        <div className="center">
                            <div className="back">
                                多选产品时我们可能会给您分开发货
                        </div>
                            <div className="main">
                                <ListView
                                    ref={el => this.lv = el}
                                    dataSource={this.state.dataSource}
                                    renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
                                        {this.state.isLoading ? 'Loading...' : 'Loaded'}
                                    </div>)}
                                    renderRow={row}
                                    renderSeparator={separator}
                                    className="am-list"
                                    pageSize={4}
                                    useBodyScroll
                                    onScroll={() => { console.log('scroll'); }}
                                    scrollRenderAheadDistance={500}
                                    onEndReached={this.onEndReached}
                                    onEndReachedThreshold={10}
                                />

                            </div>

                        </div>
                    </div>
                </CarContent>
                <Sum>
                    <Flex>
                        <Flex.Item>
                            <AgreeItem data-seed="logId" onChange={e => console.log('checkbox', e)}>
                                全选 <a onClick={(e) => { e.preventDefault(); alert('agree it'); }}>
                                    <p style={{ color: '#fd5154' }}>合计：<span>￥12365</span></p>
                                </a>
                            </AgreeItem>
                        </Flex.Item>
                    </Flex>
                    <button className="end">
                        结算
                </button>
                </Sum>
                <MaskContent>
                    <div className="updateoption">
                        <div className="updateoptionheader">
                            <span className="updateoptionclose">
                                <img src="https://img03.wconceptimg.cn/static/a.m/images/close/black.close.png" />
                            </span>
                        </div>
                        <div className="product-image">
                            <img src="https://img01.wconceptimg.cn/media/catalog/product/S/i/Simg_15408826391629_l.jpg!/fw/250/fh/250" />
                        </div>
                        <div className="product-info">
                            <div className="name">韩版休闲长袖立领宽松中性款牛皮皮衣</div>
                            <div className="currentoptions">
                            <span className="stock_status">库存紧张,仅剩1件</span>
                                <div className="options">
                                    <span>已选：</span>
                                    <span>黑色</span>&nbsp;
                            <span>M</span>&nbsp;
                            </div>
                            </div>
                            <div className="product-price"><span className="totalprice">￥2,999.00</span>
                                <span className="taxprice">
                                </span>
                            </div>
                        </div>
                        <ol className="chooseoptions">
                        <dl>
                            <dt>颜色</dt>
                                <dd>
                                    <button>黑色</button>
                                    </dd>
                        </dl>
                        <dl>
                            <dt>尺码</dt>
                                <dd>
                                    <button >M</button>
                                    <button >L</button>
                                    <button >S</button>
                                </dd>
                        </dl>
                        <dl>
                            <dt>数量</dt>
                            <dd>
                                <span className="jian">-</span>
                                <input type="text" className="qty"value='1'/>
                                    <span className="jian">+</span>
                            </dd>
                        </dl>
                        </ol>
                        <div className="updatebtn"><button type="button">确定</button></div>
                    </div>

                </MaskContent>

                {/* <MaskContainers>
                    
                </MaskContainers> */}
            </div>

        )

    }

}
