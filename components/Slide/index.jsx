import React from 'react'
import './style.scss'

import Grid from '../Grid'

class SlideComponent extends React.Component {
  render () {
    const type = this.props.type;
    const ratios = this.props.ratios;
    const isBleeding = this.props.type === 'bleeding';

    return (
      <div className="Slide">
        <Grid
          type={isBleeding ? type : 'normal'}
          ratio={!isBleeding && ratios.horizontal}
        >
          <div
            className="Slide-ImageContainer"
            style={{
              marginTop: !isBleeding && ratios.vertical[0] + "vh",
              height: !isBleeding && ratios.vertical[1] + "vh",
              marginBottom: !isBleeding && ratios.vertical[2] + "vh"
            }}
          >
            <img
              className="Slide-Image"
              src={this.props.imageUrl}
              style={{
              }}
            />
            <p className="Slide-Caption"
              style={{
              }}
            ><span className="Slide-CaptionBg">{this.props.caption}</span></p>
          </div>
        </Grid>
      </div>
    )
  }
}

export default SlideComponent
