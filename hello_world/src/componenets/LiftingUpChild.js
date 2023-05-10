import React, { Component } from 'react'

export class LiftingUpChild extends Component {
  render() {
    return (
      <div>
        <input
        value={this.props.val}
        onChange={(e)=>{this.props.comb(e.target.value)}}
        />
      </div>
    )
  }
}

export default LiftingUpChild