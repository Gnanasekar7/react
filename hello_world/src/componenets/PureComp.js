import React, { PureComponent } from 'react'

class PureComp extends PureComponent {
  render() {
    console.log('pure comp render')
    return (
      <div>PureComp {this.props.nameP}</div>
    )
  }
}

export default PureComp