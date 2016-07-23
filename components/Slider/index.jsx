import React from 'react'
import { prefixLink } from 'gatsby-helpers'
import './style.scss'
import './slick.css'

// import Slider from 'react-slick'
import Slide from '../Slide'

const slides = [
  <Slide
    type={'normal'}
    imageUrl={prefixLink('/assets/images/fotopub4.jpg')}
    caption={'prvi'}
  />,
  <Slide
    type={'bleeding'}
    imageUrl={prefixLink('/assets/images/fullscreen.jpg')}
    caption={'drugi'}
  />,
  <Slide
    type={'normal'}
    imageUrl={prefixLink('/assets/images/koordinate_zvoka_2.jpg')}
    caption={'tretji'}
  />,
]

export default class SliderComponent extends React.Component {
  constructor () {
    super()
    this.state = { slideNr: 0 }
  }
  handleClickNext () {
    let newSlideNr = this.state.slideNr + 1
    newSlideNr = newSlideNr < slides.length ? newSlideNr : 0
    this.setState({ slideNr: newSlideNr })
  }
  handleClickPrev () {
    let newSlideNr = this.state.slideNr - 1
    newSlideNr = newSlideNr > 0 ? newSlideNr : (slides.length - 1)
    this.setState({ slideNr: newSlideNr })
  }
  render () {
    return (
      <div className="Slider">
        <div
          className="Slider-NextButton"
          onClick={this.handleClickNext.bind(this)}
          style={{
            cursor: 'url('+prefixLink('/assets/images/arrow-right.svg')+'), auto'
          }}
        />
        <div
          className="Slider-PrevButton"
          onClick={this.handleClickPrev.bind(this)}
          style={{
            cursor: 'url('+prefixLink('/assets/images/arrow-left.svg')+'), auto'
          }}
        />
        {slides[this.state.slideNr]}
      </div>
    )
  }
}
