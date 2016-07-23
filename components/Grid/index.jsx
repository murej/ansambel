import React from 'react'
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

    let className = cx({
      'Grid': true,
      'Grid--bleeding': isBleedingType,
      'Grid--wide': isWideType,
      'Grid--normal': isNormalType,
      'Grid--narrow': isNarrowType
    })
    return (
      <div className={className}>
        {hasMargins && <div className="Grid-Margin" />}
        <div className="Grid-Content">{this.props.children}</div>
        {hasMargins && <div className="Grid-Margin" />}
      </div>
    )
  }
}

GridComponent.defaultProps = {
  type: 'normal',
}

export default GridComponent
