import React, { Component } from 'react'

class ConditionalRender extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        isLoggedIn: true
      }
    }
  render() {

    return this.state.isLoggedIn && <div>Welcome User</div>

//    return this.state.isLoggedIn?<div>Welcome User</div>:<div>Welcome Guest</div>

    // let Message
    // if(this.state.isLoggedIn){
    //     Message=<div>Welcome User</div>
    // }else{
    //     Message=<div>Welcome Guest</div>
    // }
    // return <div>{Message}</div>

    // if(this.state.isLoggedIn){
    //     return(<div>Welcome User</div>)
    // }else{
    //     return(<div>Welcome Guest</div>)
    // }
  }
}

export default ConditionalRender