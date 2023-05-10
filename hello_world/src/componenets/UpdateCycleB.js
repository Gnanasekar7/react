import React, { Component } from 'react'

class UpdateCycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        name:'Gnana Sekar'
      }
      console.log('UpdateCycleB constructor')
    }

    static getDerivedStateFromProps(props,state){
        console.log('UpdateCycleB getDerivedStateFromProps')
        return null
    }

    componentDidMount(){
        console.log('UpdateCycleB componentDidMount')
    }
    
    shouldComponentUpdate(){
        console.log('UpdateCycleB shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('UpdateCycleB getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate(){
        console.log('UpdateCycleB componentDidUpdate')
    }
  render() {
    console.log('UpdateCycleB render')
    return (
      <div>
        <div>UpdateCycleB</div>
      </div>
    )
  }
}

export default UpdateCycleB