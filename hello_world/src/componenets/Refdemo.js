import React, { Component } from 'react'

 class Refdemo extends Component {
    constructor(props) {
      super(props)
      //first method
      this.inputRef=React.createRef()
      //second method
      this.cbRef=null
      this.setRef=(element)=>{
        this.cbRef=element
      }
    }
    componentDidMount(){
        // this.inputRef.current.focus()
        if(this.cbRef){
            this.cbRef.focus()
        }
    }
    handleSubmit=()=>{
        alert(this.inputRef.current.value)
    }
  render() {
    return (
      <div>
        <input type="text" placeholder='refs' ref={this.inputRef}/>
        <input type="text" placeholder='cbrefs' ref={this.setRef}/>
        <button onClick={this.handleSubmit}>Click</button>
      </div>
    )
  }
}

export default Refdemo