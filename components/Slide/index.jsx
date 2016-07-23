import React from 'react'
import './style.scss'

import Grid from '../Grid'

class SlideComponent extends React.Component {
  render () {
    const isBleeding = this.props.type === 'bleeding';
    return (
      <div className="Slide">
        <Grid type={isBleeding ? this.props.type : 'normal'}>
          <div className="Slide-ImageContainer">
            <img
              className="Slide-Image"
              src={this.props.imageUrl}
            />
          </div>
          <p className="Slide-Caption">{this.props.caption}</p>
        </Grid>
      </div>
    )
  }
}

export default SlideComponent
