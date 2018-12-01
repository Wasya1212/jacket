import React, { Component } from 'react'

import { library as IconsLibrary } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faTemperatureHigh } from '@fortawesome/free-solid-svg-icons'

IconsLibrary.add(faHeart, faTemperatureHigh)

function HeartStatus(props) {
  return (
    <div className="app-status-bar__heart__status-container">
      <span className="app-status-bar__heart__icon"><FontAwesomeIcon className="heart" icon={['fa', 'heart']} color="red"/></span>
      <span className="app-status-bar__heart__value">{props.val}</span>
    </div>
  )
}

function TemperatureStatus(props) {
  return (
    <div className="app-status-bar__temperature__status-container">
      <span className="app-status-bar__temperature__icon"><FontAwesomeIcon className="temperature" icon={['fa', 'temperature-high']} color="red"/></span>
      <span className="app-status-bar__temperature__value">{props.val}</span>
    </div>
  )
}

class StatusBar extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="app-status-bar">
        <section className="app-status-bar__heart">
          <HeartStatus val={this.props.heartBeatsValue}/>
        </section>
        <div className="divide" orientation="vertical" len="medium"></div>
        <section className="app-status-bar__temperature">
          <TemperatureStatus val={this.props.totalTemperatureValue}/>
        </section>
      </div>
    )
  }
}

export default StatusBar
