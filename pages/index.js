import React from 'react'
import { Link } from 'react-router'
import DocumentTitle from 'react-document-title'
import { config } from 'config'

import Slider from '../components/Slider'

// Styles for highlighted code blocks.
import 'css/zenburn.css'

export default class Index extends React.Component {
  render () {
    return (
      <DocumentTitle title={config.siteTitle}>
        <Slider />
      </DocumentTitle>
    )
  }
}
