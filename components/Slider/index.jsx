import React from 'react'
import { prefixLink } from 'gatsby-helpers'
import _ from 'lodash'
import './style.scss'
import './slick.css'

// import Slider from 'react-slick'
import Slide from '../Slide'

const slides = [
  <Slide
    key="0"
    type={'normal'}
    imageUrl={prefixLink('/assets/images/fotopub4.jpg')}
    caption={'prvi'}
  />,
  <Slide
    key="1"
    type={'bleeding'}
    imageUrl={prefixLink('/assets/images/fullscreen.jpg')}
    caption={'drugi'}
  />,
  <Slide
    key="2"
    type={'normal'}
    imageUrl={prefixLink('/assets/images/koordinate_zvoka_2.jpg')}
    caption={'tretji'}
  />,
  <Slide
    key="3"
    type={'bleeding'}
    imageUrl={prefixLink('/assets/images/_G4A8913.jpg')}
    caption={'četrti'}
  />,
  <Slide
    key="4"
    type={'normal'}
    imageUrl={prefixLink('/assets/images/4.jpg')}
    caption={'peti'}
  />,
  <Slide
    key="5"
    type={'normal'}
    imageUrl={prefixLink('/assets/images/Dan_documentation.jpg')}
    caption={'šesti'}
  />,
]

export default class SliderComponent extends React.Component {
  constructor () {
    super()
    const randomStart = _.random(0, slides.length - 1)
    for(let i=0; i<randomStart; i++) {
      slides.push(slides.shift());
    }

    this.state = {
      visible: [slides[0]],
      lastShown: 0,
      isAllShown: false
    }
  }
  handleClickNext () {
    let newVisible = this.state.visible;
    const nextShown = this.state.lastShown + 1
    const isAllShown = this.state.isAllShown || nextShown === slides.length

    if(isAllShown) {
      // move last to first
      newVisible.push(newVisible.shift())
      slides.push(slides.shift())
    }
    else {
      // keep adding
      newVisible.push(slides[nextShown])
    }

    this.setState({
      visible: newVisible,
      lastShown: nextShown === slides.length ? 0 : nextShown,
      isAllShown: isAllShown
    })
  }
  handleClickPrev () {
    let newVisible = this.state.visible;
    newVisible.length > 1 && newVisible.pop();

    this.setState({
      visible: newVisible,
      lastShown: newVisible.length - 1,
      isAllShown: false
    })
  }
  render () {
    console.log(this.state);
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
      {this.state.visible}
      </div>
    )
  }
}
