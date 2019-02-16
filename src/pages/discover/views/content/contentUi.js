
import React, { Component } from 'react'
import { Discovercontent } from './styleComponents'


export default class extends Component {
    render() {
        let { first } = this.props;
        let firstData = [];
        firstData = firstData.array
        console.log(first, firstData)
        return (
            <Discovercontent>
                <div></div>
            </Discovercontent>
        )
    }

}
