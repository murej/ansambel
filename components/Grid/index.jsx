import React from 'react'
import _ from 'lodash'
import cx from 'classnames'
import './style.scss'

class GridComponent extends React.Component {
  constructor () {
    super()
    this.state = { count: 0 }
  }
  render () {
    const type = this.props.type
    const isBleedingType = type === 'bleeding'
    const isWideType = type === 'wide'
    const isNormalType = type === 'normal'
    const isNarrowType = type === 'narrow'
    const hasMargins = isNormalType || isNarrowType
    const hasRatio = !_.isEmpty(this.props.ratio);

    let className = cx({
      'Grid': true,
      'Grid--bleeding': isBleedingType,
      'Grid--wide': isWideType,
      'Grid--normal': isNormalType,
      'Grid--narrow': isNarrowType
    })
    return (
      <div className={className}>
        {hasMargins && <div className="Grid-Margin" style={{ flex: hasRatio && this.props.ratio[0] }}/>}
        <div className="Grid-Content" style={{ flex: hasRatio && this.props.ratio[1] }}>{this.props.children}</div>
        {hasMargins && <div className="Grid-Margin" style={{ flex: hasRatio && this.props.ratio[2] }}/>}
      </div>
    )
  }
}

GridComponent.defaultProps = {
  type: 'normal',
}

export default GridComponent
