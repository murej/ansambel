import React from 'react'

import { rhythm } from 'utils/typography'

import Header from '../components/Header'

module.exports = React.createClass({
  propTypes () {
    return {
      children: React.PropTypes.any,
    }
  },
  render () {
    return (
      <div style={{ height: '100%' }}>
        <Header />
        {this.props.children}
      </div>
    )
  },
})
