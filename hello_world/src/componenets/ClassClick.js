import React, { Component } from 'react'

 class ClassClick extends Component {
    eventHandler(){
        console.log('clicked button')
    }
  render() {
    return (
      <div>
        <button onClick={this.eventHandler}>Click me</button>
      </div>
    )
  }
}

export default ClassClick