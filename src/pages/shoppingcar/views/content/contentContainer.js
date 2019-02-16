import React, { Component } from 'react'
import { CarContent } from './styleComponents'
import { ListView, List,Checkbox} from 'antd-mobile';
//复选框
const CheckboxItem = Checkbox.CheckboxItem;



//长列表
const data = [
    {
        img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
        title: 'Meet hotel',
        des: '不是所有的兼职汪都需要风吹日晒',
    },
    {
        img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
        title: 'McDonald\'s invites you',
        des: '不是所有的兼职汪都需要风吹日晒',
    },
    {
        img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
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
                                <CheckboxItem  key={i.value} onChange={() => this.onChange(i.value)}>
                                    {i.label}  {obj.title}
                                </CheckboxItem>
                            ))}
                        </List></div>
                    <div style={{ display: '-webkit-box', display: 'flex', padding: '15px 0' }}>
                        <img style={{ height: '64px', marginRight: '15px' }} src={obj.img} alt="" />
                        <div style={{ lineHeight: 1 }}>
                            <div style={{ marginBottom: '8px', fontWeight: 'bold' }}>{obj.des}</div>
                            <div><span style={{ fontSize: '30px', color: '#FF6E27' }}>{rowID}</span>¥</div>
                        </div>
                    </div>
                </div>
            );
        };
        return (
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
                                // renderHeader={() => <span>多选产品时我们可能会给您分开发货</span>}
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
        )
        
    }
     


}
