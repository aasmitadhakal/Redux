import React, { Component } from 'react'

export class state extends Component {
    constructor(){
        super()
        this.state={
            message:"welcome visitor"
        }
    }
    changetext(){
      this.setState({
        message:"thank for clicking me"
      })  
    }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button on onClick={()=>this.changetext()}>click me</button>
      </div>
    )
  }
}

export default state