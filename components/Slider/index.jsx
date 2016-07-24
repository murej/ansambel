import React from 'react'
import { prefixLink } from 'gatsby-helpers'
import _ from 'lodash'
import './style.scss'

// import Slider from 'react-slick'
import Slide from '../Slide'

const slides = [
  <Slide
    key="4"
    type={'normal'}
    imageUrl={prefixLink('/assets/images/ansambel5.jpg')}
    caption={'Hud naslov, installation shot'}
    ratios={{
      horizontal: [1,7,4],  // razmerje širine grida
      vertical: [10,80,10]  // procent višine screena
    }}
  />,
  <Slide
    key="15"
    type={'normal'}
    imageUrl={prefixLink('/assets/images/ansambel16.jpg')}
    caption={'Can squeeze jewelry inside layers of foam'}
    ratios={{
      horizontal: [6,6,0],
      vertical: [10,80,10]
    }}
  />,
  <Slide
    key="12"
    type={'normal'}
    imageUrl={prefixLink('/assets/images/ansambel13.jpg')}
    caption={'Bathers'}
    ratios={{
      horizontal: [3,6,3],
      vertical: [5,90,5]
    }}
  />,
  <Slide
    key="10"
    type={'normal'}
    imageUrl={prefixLink('/assets/images/ansambel11.jpg')}
    caption={'A catalog for Fotopub, a photography festival in Novo mesto (with custom flags)'}
    ratios={{
      horizontal: [6,6,0],
      vertical: [40,50,10]
    }}
  />,
  <Slide
    key="5"
    type={'normal'}
    imageUrl={prefixLink('/assets/images/ansambel6.jpg')}
    caption={'Satellite dish, photo of Saturunus GX 700'}
    ratios={{
      horizontal: [4,6,2],
      vertical: [20,40,40]
    }}
  />,
  <Slide
    key="8"
    type={'normal'}
    imageUrl={prefixLink('/assets/images/ansambel9.jpg')}
    caption={'“Electricity is just like WHOA!” website'}
    ratios={{
      horizontal: [1,11,6],
      vertical: [25,70,5]
    }}
  />,
  <Slide
    key="0"
    type={'bleeding'}
    imageUrl={prefixLink('/assets/images/ansambel1.jpg')}
    caption={'Trust me it’s Art, an online gallery of passwords'}
  />,
  <Slide
    key="6"
    type={'normal'}
    imageUrl={prefixLink('/assets/images/ansambel7.jpg')}
    caption={'Locks and Keys'}
    ratios={{
      horizontal: [5,6,1],
      vertical: [5,90,5]
    }}
  />,
  <Slide
    key="9"
    type={'normal'}
    imageUrl={prefixLink('/assets/images/ansambel10.jpg')}
    caption={'A standby lamp that emits light in the dark'}
    ratios={{
      horizontal: [1,7,4],
      vertical: [10,80,10]
    }}
  />,
  <Slide
    key="2"
    type={'bleeding'}
    imageUrl={prefixLink('/assets/images/ansambel3.jpg')}
    caption={'Branko Oblak, football player'}
  />,
  <Slide
    key="22"
    type={'normal'}
    imageUrl={prefixLink('/assets/images/ansambel23.jpg')}
    caption={'Zaza, an illustration for an article in Tribuna magazine'}
    ratios={{
      horizontal: [1,6,5],
      vertical: [5,88,7]
    }}
  />,
  <Slide
    key="11"
    type={'normal'}
    imageUrl={prefixLink('/assets/images/ansambel12.jpg')}
    caption={'Dreaming of vacation while pouring concrete, (creative direction for a series of musical events in Ljubjana, organized by Žiga Murko)'}
    ratios={{
      horizontal: [5,6,1],
      vertical: [10,80,10]
    }}
  />,
  <Slide
    key="21"
    type={'normal'}
    imageUrl={prefixLink('/assets/images/ansambel22.jpg')}
    caption={'Wires, photography'}
    ratios={{
      horizontal: [2,6,4],
      vertical: [4,78,18]
    }}
  />,
  <Slide
    key="3"
    type={'bleeding'}
    imageUrl={prefixLink('/assets/images/ansambel4.gif')}
    caption={'Live Screen, a mirror which only reflects when activated'}
  />,
  <Slide
    key="20"
    type={'normal'}
    imageUrl={prefixLink('/assets/images/ansambel21.jpg')}
    caption={'TDC Tokyo, an identity for an exhibiton in Tokyo'}
    ratios={{
      horizontal: [4,7,1],
      vertical: [10,85,5]
    }}
  />,
  <Slide
    key="14"
    type={'normal'}
    imageUrl={prefixLink('/assets/images/ansambel15.jpg')}
    caption={'Dragons in a Baththub, an illustrated fairytale, special issue for Tribuna magazine'}
    ratios={{
      horizontal: [1,9,6],
      vertical: [0,100,0]
    }}
  />,
  <Slide
    key="13"
    type={'normal'}
    imageUrl={prefixLink('/assets/images/ansambel14.jpg')}
    caption={'A led-based drawing keyboard'}
    ratios={{
      horizontal: [3,7,2],
      vertical: [0,70,30]
    }}
  />,
  <Slide
    key="1"
    type={'bleeding'}
    imageUrl={prefixLink('/assets/images/ansambel2.jpg')}
    caption={'Čačke, a wallpaper pattern'}
  />,
  <Slide
    key="19"
    type={'normal'}
    imageUrl={prefixLink('/assets/images/ansambel20.jpg')}
    caption={'Room service'}
    ratios={{
      horizontal: [4,6,2],
      vertical: [20,40,40]
    }}
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
