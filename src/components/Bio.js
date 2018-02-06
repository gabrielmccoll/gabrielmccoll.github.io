import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './Gmc.jpg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt={`Gabriel McColl`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        <p>
          Written by <strong>Gabriel McColl </strong> who ripped this off a very basic template
          and has no real idea what he's doing. 
          {' '}{' '}          
          
           <a href="https://twitter.com/gabrielmccoll">
            You should follow him on Twitter and tell him his hair looks pretty
          </a>
        </p>
      </div>
    )
  }
}

export default Bio
