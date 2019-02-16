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
  DiscoverContainer as Discover
} from '../discover'
import {
  MineContainer as Mine
} from '../mine'
import {
  RecommendContainer as Recommend
} from '../recommend'
import {
  CarContainer as Car
} from '../shoppingcar'
import {
  StoreContainer as store
} from '../store'






class FooterContainer extends Component {
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
              this.goRoute('recommend')
            }}
          >
       <Switch>
         {/* <Recommend></Recommend> */}
          <Route path='/recommend' component ={Recommend}></Route>
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
          {/* <Discover></Discover> */}
          <Route path='/discover' component ={Discover}></Route>
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
          {/* <Car></Car> */}
          <Route path='/car' component ={Car}></Route>
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
          <Mine></Mine>
 <Route path='/mine' component ={Mine}></Route>
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
export default withRouter(FooterContainer)
