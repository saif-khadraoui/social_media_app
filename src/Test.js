import React from 'react'
import { Link } from "react-router-dom"

function Test() {
  return (
    <div>
        <h1>test</h1>
        <Link to={"/"}>
            <button>home</button>
        </Link>
        
    </div>
  )
}

export default Test