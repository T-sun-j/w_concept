import React, { Component } from 'react'
import {PicStyled} from "./PicStyled"
export default class GoodList extends Component {
  render() {
    return (
        <PicStyled>
            <table>
                <tbody>
                    <tr>
                        <td rowSpan="2" className="goods-1">
                            <a  href="##">
                                <div><img alt="" src="//img01.wconceptimg.cn/media/catalog/product/w/i/wimg_451066381_5406927.jpg!/quality/80"/></div>
                                <div>ANODDS</div>
                                <div>
                                    <span className="=nowPrice">￥1,485</span>
                                    <span className="delPrice">￥1,856</span>
                                </div>
                            </a>
                        </td>
                        <td  className="goods-2">
                            <a  href="##">
                                <div><img alt="" src="//img01.wconceptimg.cn/media/catalog/product/w/i/wimg_450960343_5290359.jpg!/fw/254"/></div>
                                <div>LE</div>
                                <div>
                                    <span className="=nowPrice">￥1,408</span>
                                    <span className="delPrice">￥2,012</span>
                                </div>
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td  className="goods-3">
                            <a href="##">
                                <div><img alt="" src="//img01.wconceptimg.cn/media/catalog/product/w/i/wimg_451101887_5442715.jpg!/fw/254"/></div>
                                <div>RACHEL COX</div>
                                <div>
                                    <span className="=nowPrice">￥1,485</span>
                                    <span className="delPrice">￥1,856</span>
                                </div>
                            </a>
                        </td>
                    </tr>
                </tbody>
            </table>
       </PicStyled>
    )
  }
}
