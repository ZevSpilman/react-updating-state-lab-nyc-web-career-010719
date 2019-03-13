import React from 'react'

class DigitalClicker extends React.Component{

  constructor(){
    super()
    this.state = {
      timesClicked: 0
    }
  }

  handleClick = () => {
    console.log("hi");
    let prevousState = this.state.timesClicked
    this.setState({ timesClicked: prevousState + 1})
  }


  render(){
    return(
      <div>
      <button onClick={this.handleClick}>{this.state.timesClicked}</button>
      </div>
    )
  }
}

export default DigitalClicker
