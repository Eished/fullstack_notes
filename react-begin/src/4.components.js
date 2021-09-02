import React from 'react'
import ReactDOM from 'react-dom'

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

class WelcomeC extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}, {this.props.mate}</h1>;
  }
}

const element = <div>
  <Welcome name='Element'></Welcome>
  <WelcomeC name='Mike' mate='Jane'></WelcomeC>
</div> 

// Extract components
const user = {
  firstName: 'Harper',
  lastName: 'Perez',
  avatarUrl: 'favicon.ico'
}

function Avatar(props) {
  return (
    <img className="Avatar"
      src={props.user.avatarUrl}
      alt={props.user.name}
    />
  );
}

function UserInfo(props){
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      {props.user.name}
    </div>
  )
}

function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.user} />
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {/* {formatDate(props.date)} */}
      </div>
    </div>
  );
}

// Props Read-only

function App() {
  return (
    <div>
      <Welcome name='App'></Welcome>
      <WelcomeC name='Mike' mate='Jane'></WelcomeC>
      <Comment user={user} />
    </div>
  )
}

ReactDOM.render(
  <App/>, 
  document.getElementById('root')
)