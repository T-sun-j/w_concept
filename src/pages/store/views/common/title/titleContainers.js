import React, { Component } from 'react'
import {TitleStyled,TitleWrap} from './styledComponents'

class TitleContainers extends Component {
  constructor(){
    super();
    this.state={
      titleDefault: "默认title",
      flagDefault: "none"
    }
  
     
    
  }
  render() {

    let {title,flag} = this.props;
    return (
      <TitleStyled>
        <TitleWrap>
            <span className="titleSpan">
              <span>{title?title:this.state.titleDefault}</span>
            </span>
            <a  style= {{display: flag ? flag : this.state.flagDefault}} href="##"></a>
        </TitleWrap>
      </TitleStyled>
    )
  }
}
 


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
