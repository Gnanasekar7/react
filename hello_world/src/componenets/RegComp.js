import React, { Component } from 'react'

class RegComp extends Component {
  render() {
    console.log('regular Comp render')
    return (
      <div>RegComp {this.props.nameP}</div>
    )
  }
}

export default RegComp