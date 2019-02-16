import React, { Component } from 'react'
import {TitleStyled,TitleWrap} from './styledComponents'

class TitleContainers extends Component {
  render() {

    let {title} = this.props;
    return (
      <TitleStyled>
        <TitleWrap>
            <span className="titleSpan">
              <span>{title}</span>
            </span>
        </TitleWrap>
      </TitleStyled>
    )
  }
}
 
const titleDefault =   "默认title";
 


export default TitleContainers;







 
//  class Header extends Component{
//     render(){
//         let {icon,text} = this.props;
//         return (
//             <div className="header">
//                 {icon?<div>{icon}</div>:""}
//                 <h2>{text}</h2>
//             </div>
//         )
//     }
// }
// Header.defaultProps = {
//     icon:"",
//     text:"猫眼电影"
// }

// export default Header;
