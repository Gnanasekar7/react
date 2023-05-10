import React, { Component } from 'react'
import LiftingUpChild from './LiftingUpChild'

export class LiftingUpParent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         data:0
      }
    }

globalChange(item){
    this.setState({data:item})
}
  render() {
    return (
      <div>
        <LiftingUpChild val={this.state.data} comb={this.globalChange.bind(this)}/>
        <br/>
        <LiftingUpChild val={this.state.data} comb={this.globalChange.bind(this)}/>
      </div>
    )
  }
}

export default LiftingUpParent