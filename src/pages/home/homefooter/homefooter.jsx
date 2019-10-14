import React, { Component } from 'react'
import './homefooter.styl'

export default class homefooter extends Component {
  render() {
    return (
      <div class="content-footer">
        <div class="row">
          <button>下载App</button>
          <button>电脑版</button>
        </div>
        <div class="info">
          <span>网易公司版权所有 © 1997-2019</span>
          <span>食品经营许可证：JY13301080111719</span>
        </div>
      </div>
    );
  }
}
