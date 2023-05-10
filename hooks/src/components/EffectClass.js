import React, { Component } from 'react'

export class EffectClass extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count:0,
         name:''
      }
    }

    componentDidMount(){
        document.title =`you clicked ${this.state.count} times`
    }

    componentDidUpdate(prevProps,prevState){
        if(prevState.count !== this.state.count)
        console.log('Updatimg document title')
        document.title =`you clicked ${this.state.count} times`
    }
  render() {
    return (
      <div>
        <input 
        type="text" 
        value={this.state.name} 
        onChange={(e)=>this.setState({name:e.target.value})}/>
        <button onClick={()=>this.setState({count:this.state.count+1})}>
            clicked {this.state.count}
        </button>
      </div>
    )
  }
}

export default EffectClass