import { ToIcon } from './styledComponents'

import React ,{Component} from 'react'


class ToTop extends Component {
    render(){
        return (
            <ToIcon 
            className={this.props.show?'animated fadeIn faster':'animated fadeOut faster'}
            onTouchStart={this.props.toTop.bind(this)}
            ></ToIcon>
        )
    }
}

export default ToTop