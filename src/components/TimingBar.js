import React, { Component } from 'react'

import { library as IconsLibrary } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRunning } from '@fortawesome/free-solid-svg-icons'

IconsLibrary.add(faRunning)

const StatusBar = (props) => (
  <div className="app-timing-bar__status">
    <div className="app-timing-bar__status__icon"><FontAwesomeIcon className="running" icon={['fa', 'running']} color={props.color}/></div>
    <div className="app-timing-bar__status__message">
      <p className="app-timing-bar__status__message__heart">
        <span><strong>{props.heart}</strong> heart beats</span>
      </p>
      <p className="app-timing-bar__status__message__temperature">
        <span><strong>{props.temperature}</strong> temperature</span>
      </p>
    </div>
    <div className="app-timing-bar__status__time">{props.time}</div>
  </div>
)

const TimingBar = () => (
  <div className="app-timing-bar">
    <h2 className="app-timing-bar__title">Timing statuses</h2>
    <div className="app-timing-bar__statuses">
      <StatusBar heart="normal" temperature="normal" color="green" time="23:00"/>
      <StatusBar heart="normal" temperature="high" color="yellow" time="22:00"/>
      <StatusBar heart="normal" temperature="normal" color="green" time="21:00"/>
    </div>

  </div>
)

export default TimingBar
