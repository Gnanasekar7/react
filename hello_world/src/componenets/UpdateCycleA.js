import React, { Component } from 'react'
import UpdateCycleB from './UpdateCycleB'

class UpdateCycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        name:'Gnana Sekar'
      }
      console.log('UpdateCycleA constructor')
    }

    static getDerivedStateFromProps(props,state){
        console.log('UpdateCycleA getDerivedStateFromProps')
        return null
    }

    componentDidMount(){
        console.log('UpdateCycleA componentDidMount')
    }
    
    shouldComponentUpdate(){
        console.log('UpdateCycleA shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('UpdateCycleA getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate(){
        console.log('UpdateCycleA componentDidUpdate')
    }

    changeState=()=>{
        this.setState({
            name:'men'
        })
    }

  render() {
    console.log('UpdateCycleA render')
    return (
      <div>
        <div>UpdateCycleA</div>
        <button onClick={this.changeState}>Button</button>
        <UpdateCycleB/>
      </div>
    )
  }
}

export default UpdateCycleA