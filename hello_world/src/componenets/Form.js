import React, { Component } from 'react'
import './formStyle.css'
class Form extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         userName: '',
         comments: '',
         topic: 'react'
      }
    }

      handleUserNameChange = event =>{
        this.setState({
            userName: event.target.value
        })
      }

      handleCommentsChange = event=>{
        this.setState({
            comments: event.target.value
        })
      }

      handleTopic = event =>{
        this.setState({
            topic:event.target.value
        })
      }
      handleSubmit =event=>{
        alert(` ${this.state.userName} ${this.state.comments} ${this.state.topic}`)
        
      }
  render() {
    return (
      <body>
      <form className='form' onSubmit={this.handleSubmit}>

        <div >
            <label>User Name </label>
            <input type="text" 
            value={this.state.userName} 
            onChange={this.handleUserNameChange}
            >
            </input>
        </div>

        <div>
            <label>Comments </label>
            <textarea value={this.state.comments} onChange={this.handleCommentsChange}></textarea>
        </div>

        <div>
            <label>Topic </label>
            <select value={this.state.topic} onChange={this.handleTopic}>
                <option value="react">React</option>
                <option value="angular">Angular</option>
            </select>
        </div> 
        <button type='submit'>Submit</button>
      </form>
      </body>
    )
  }
}

export default Form