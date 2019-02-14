import React, {
    Component
} from 'react';
import {
    TabBar
} from 'antd-mobile';

import {
  Route,
  withRouter,
  Switch
} from 'react-router-dom'

import {
  DiscoverContainer as discover
} from '../discover'
import {
  MineContainer as mine
} from '../mine'
import {
  RecommendContainer as recommend
} from '../recommend'
import {
  CarContainer as car
} from '../shoppingcar'
import {
  StoreContainer as store
} from '../store'






export  class footerContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'store',
            hidden: false,
            fullScreen: true,
        };
    }
    render() {
        return ( 
      <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', bottom:'0' } : { height: 400 }}>
        <TabBar
          unselectedTintColor="#9e9e9e"
          tintColor="#000"
          barTintColor="white"
          hidden={this.state.hidden}
          tabBarPosition = "bottom"
        >
          <TabBar.Item
            title="推荐"
            key="recommend"
            icon={<div style={{
              width: '25px',
              height: '25px',
              background: 'url(https:////img01.wconceptimg.cn/ws/uploads/2018/08/tabbarrecommendbuttonnormal3x.png) center center /  21px 21px no-repeat' }}
            />
            }
            selectedIcon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url(https://img01.wconceptimg.cn/ws/uploads/2018/08/tabbarrecommendbuttonselected3x.png) center center /  23px 23px no-repeat' }}
            />
            }
            selected={this.state.selectedTab === 'recommend'}
            onPress={() => {
              this.setState({
                selectedTab: 'recommend',
              });
              this.goRoute('home')
            }}
          >
       <Switch>
          <Route path='/recommend' component ={recommend}></Route>
        </Switch>
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://img01.wconceptimg.cn/ws/uploads/2018/08/tabbardiscoverybuttonnormal3x-128x128.png) center center /  21px 21px no-repeat' }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://img01.wconceptimg.cn/ws/uploads/2018/08/tabbardiscoverybuttonselected3x-128x128.png) center center /  23px 23px no-repeat' }}
              />
            }
            title="发现"
            key="discover"
            selected={this.state.selectedTab === 'discover'}
            onPress={() => {
              this.setState({
                selectedTab: 'discover',
              });
              this.goRoute('discover')
            }}
            
          >
          <Route path='/discover' component ={discover}></Route>
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://img01.wconceptimg.cn/ws/uploads/2018/08/tabbarstorebuttonnormal3x.png) center center /  21px 21px no-repeat' }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://img01.wconceptimg.cn/ws/uploads/2018/08/tabbarstorebuttonselected3x.png) center center /  23px 23px no-repeat'
                }
                }
              />
            }
            title="商店"
            key="store"
            selected = {
                this.state.selectedTab === 'store'
            }
            onPress={() => {
              this.setState({
                selectedTab: 'store',
              });
              this.goRoute('store')
            }}
          >
          <Route path='/store' component ={store}></Route>
          </TabBar.Item>
           <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://img01.wconceptimg.cn/ws/uploads/2018/08/tabbarcartbuttonnormal3x.png) center center /  21px 21px no-repeat'
                }
                }
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://img01.wconceptimg.cn/ws/uploads/2018/08/tabbarcartbuttonselected3x.png) center center /  23px 23px no-repeat'
                }
                }
              />
            }
            title = "购物车"
            key = "shoppingcar"
            selected = {
                this.state.selectedTab === 'shoppingcar'
            }
            onPress={() => {
              this.setState({
                selectedTab: 'shoppingcar',
              });
              this.goRoute('car')
            }}
          >
          <Route path='/car' component ={car}></Route>
          </TabBar.Item>
           <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://img01.wconceptimg.cn/ws/uploads/2018/08/tabbarprofilebuttonnormal3x.png) center center /  21px 21px no-repeat'
                }
                }
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://img01.wconceptimg.cn/ws/uploads/2018/08/tabbarprofilebuttonnormal3x.png) center center /  23px 23px no-repeat'
                }
                }
              />
            }
            title = "我的"
            key = "mine"
            selected = {
                this.state.selectedTab === 'mine'
            }
            onPress={() => {
              this.setState({
                selectedTab: 'mine',
              });
              this.goRoute('mine')
            }}
          >
 <Route path='/mine' component ={mine}></Route>
          </TabBar.Item>
          
        </TabBar>
      </div>
        )
}

  goRoute(value){
    this.props.history.push('/'+value)
  }
  // componentDidMount(){
  //   this.setstate({
  //     selectedTab:this.props.location.pathname.slice(1)
  //   })
  // }

}
export default withRouter(footerContainer)
