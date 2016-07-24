import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import './style.scss'

import Grid from '../Grid'

export default class HeaderComponent extends React.Component {
  constructor () {
    super()
    this.state = { count: 0 }
  }

  render () {
    return (
      <div className="Header">
        <Grid type="wide">
          <Link
            to={'/'}
            style={{
              color: 'black',
              textDecoration: 'none',
            }}
          >
            Ansambel
          </Link>
          <Link
            to={'/info/'}
            style={{
              color: 'black',
              textDecoration: 'none',
            }}
          >
            What?
          </Link>
        </Grid>
      </div>
    )
  }
}


// <Headroom
//   wrapperStyle={{
//     marginBottom: rhythm(1),
//   }}
//   style={{
//     background: 'lightgray',
//   }}
// >
// </Headroom>
