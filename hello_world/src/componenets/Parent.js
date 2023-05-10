import React, { Component } from 'react'
import RegComp from './RegComp'
import PureComp from './PureComp'

class Parent extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name:'Gnana'
      }
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:'Gnana'
            })
        },2000)
    }
  render() {
    console.log('**parent render**')
    return (
      <div>
        <div>ParentCompenent</div>
        <RegComp nameP={this.state.name}/>
        <PureComp nameP={this.state.name}/>
      </div>
    )
  }
}

export default Parent