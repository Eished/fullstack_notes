import React from 'react'
import ReactDOM from 'react-dom'

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>
}

// class Welcome extends React.Component {
//   render() {
//     return <h1>Hello, {this.props.name}</h1>
//   }
// }
const element = <Welcome name="Sara" age="19" />
ReactDOM.render(element, document.getElementById('root'))
