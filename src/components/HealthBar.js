import React, { Component } from 'react'

import { library as IconsLibrary } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeartbeat, faTemperatureHigh, faUtensilSpoon, faVial } from '@fortawesome/free-solid-svg-icons'

IconsLibrary.add(faHeartbeat, faTemperatureHigh, faUtensilSpoon, faVial)

const HealthBar = ({heartbeats, outTemperature, inTemperature, sugarLevel, pressure}) => (
  <div className="app-health-bar">
    <section className="app-health-bar__heart">
      <div className="app-health-bar__icon"><FontAwesomeIcon className="heartbeats" icon={['fa', 'heartbeat']} color="red"/></div>
      <div className="app-health-bar__value">
        <span>Heartbeats: {heartbeats}</span>
      </div>
    </section>
    <section className="app-health-bar__out-temperature">
      <div className="app-health-bar__icon"><FontAwesomeIcon className="temperature" icon={['fa', 'temperature-high']} color="red"/></div>
      <div className="app-health-bar__value">
        <span>Outdor temperature: {outTemperature}</span>
      </div>
    </section>
    <section className="app-health-bar__in-temperature">
      <div className="app-health-bar__icon"><FontAwesomeIcon className="temperature" icon={['fa', 'temperature-high']} color="red"/></div>
      <div className="app-health-bar__value">
        <span>Indor temperature: {inTemperature}</span>
      </div>
    </section>
    <section className="app-health-bar__sugar-level">
      <div className="app-health-bar__icon"><FontAwesomeIcon className="sugar-level" icon={['fas', 'utensil-spoon']} color="red"/></div>
      <div className="app-health-bar__value">
        <span>Sugar level: {sugarLevel}</span>
      </div>
    </section>
    <section className="app-health-bar__pressure">
      <div className="app-health-bar__icon"><FontAwesomeIcon className="pressure" icon={['fas', 'vial']} color="red"/></div>
      <div className="app-health-bar__value">
        <span>Pressure: {pressure}</span>
      </div>
    </section>
  </div>
)

export default HealthBar
