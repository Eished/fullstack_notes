import React from 'react'
import ReactDOM from 'react-dom'

function formatName(user) {
  return user.firstName + ' ' + user.lastName
}

function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez',
  avatarUrl: 'favicon.ico'
}

const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);

const img = <img src={user.avatarUrl} className={user.firstName} />

ReactDOM.render(
  element, 
  document.getElementById('root')
)


