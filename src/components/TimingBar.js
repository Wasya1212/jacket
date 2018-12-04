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

function checkHeartbeat(heartbeat) {
  let heartStatus = 'normal';

  if (heartbeat < 91 || heartbeat > 149) {
    heartStatus = 'critical'
  }

  if ((heartbeat > 91 && heartbeat < 110) || (heartbeat < 149 && heartbeat > 130)) {
    heartStatus = 'unstable'
  }

  return heartStatus
}

function checkTemperature(temperature) {
  let temperatureStatus = 'normal';

  if (temperature < 35 || temperature > 40) {
    temperatureStatus = 'critical'
  }

  if (temperature > 37 && temperature < 40) {
    temperatureStatus = 'unstable'
  }

  return temperatureStatus
}

function checkHealthColor(heartStatus, temperatureStatus) {
  let healthStatus = 'green'

  if (heartStatus === 'unstable' || temperatureStatus === 'unstable') {
    healthStatus = '#dade17'
  }

  if (heartStatus === 'critical' || temperatureStatus === 'critical') {
    healthStatus = 'red'
  }

  return healthStatus
}

function timingHealt(healthStatuses) {
  let statusBars = []

  for (let i = 1; i <= Math.floor(healthStatuses.length / 12); i++) {

    let { time, heartbeat, temperature } = healthStatuses[i * 11];

    statusBars.unshift({
      heart: checkHeartbeat(heartbeat),
      temperature: checkTemperature(temperature),
      color: checkHealthColor(checkHeartbeat(heartbeat), checkTemperature(temperature)),
      time: time
    })
  }

  return statusBars.map((statusBar, index) => (
    <StatusBar key={`status-bar-${index}`} heart={statusBar.heart} temperature={statusBar.temperature} color={statusBar.color} time={statusBar.time} />
  ))
}

const TimingBar = ({ health }) => (
  <div className="app-timing-bar">
    <h2 className="app-timing-bar__title">Timing statuses</h2>
    <div className="app-timing-bar__statuses">
      {
        timingHealt(health)
      }
    </div>

  </div>
)

export default TimingBar
