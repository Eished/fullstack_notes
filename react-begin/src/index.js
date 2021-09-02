import React from 'react'
import ReactDOM from 'react-dom'

// function Clock(props){
//   return (
//     <div>
//       <h1>Hello</h1>
//       <h2>It is {props.date.toLocaleTimeString()} </h2>
//     </div>
//   )
// }

// function tick(){
//   ReactDOM.render(
//     <Clock/>,
//     document.getElementById('root')
//   )
// }

// setInterval(tick,1000)

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
  componentDidMount(){
    this.timerId=setInterval(
      ()=>this.tick(),
      1000
    )
  }
  componentWillUnmount(){
    clearInterval(this.timerId)
  }
  tick(){
    this.setState({
      date: new Date()
    })
  }
  render(){
    return (
      <div>
        <h1>Hello</h1>
        <h2>It is {this.state.date.toLocaleTimeString()} </h2>
      </div>
    )
  }
}


ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);