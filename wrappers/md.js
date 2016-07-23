import React from 'react'
import 'css/markdown-styles.css'
import DocumentTitle from 'react-document-title'
import { config } from 'config'

import Grid from '../components/Grid'

module.exports = React.createClass({
  propTypes () {
    return {
      router: React.PropTypes.object,
    }
  },
  render () {
    const post = this.props.route.page.data
    return (
      <DocumentTitle title={`${config.siteTitle} | ${post.title}`}>
        <Grid type="narrow">
          <div className="markdown" style={{
              backgroundColor: post.backgroundColor
            }}>
            <h1>{post.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: post.body }} />
          </div>
        </Grid>
      </DocumentTitle>
    )
  },
})
