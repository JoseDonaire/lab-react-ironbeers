import React from 'react'
import {Link} from 'react-router-dom'

function Home() {
  return (
    <div>
        <Link to='/beers'>All Beers</Link>
        <Link to='/beers/random'>Random Beers</Link>
        <Link to='/beers/new'>New Beer</Link>
    </div>
  )
}

export default Home