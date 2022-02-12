import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav>
      <section>
        <h1>Redux Essentials Example</h1>

        <div className="navContent">
          <div className="navLinks">
            <Link to={'/'}>Home</Link>
            <Link to={'/posts'}>Posts</Link>
            <Link to={'/counter'}>Counter</Link>
          </div>
        </div>
      </section>
    </nav>
  )
}
