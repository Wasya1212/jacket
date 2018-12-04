import React, { Component } from 'react'

import { library as IconsLibrary } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeartbeat, faTemperatureHigh, faUtensilSpoon, faVial } from '@fortawesome/free-solid-svg-icons'

IconsLibrary.add(faHeartbeat, faTemperatureHigh, faUtensilSpoon, faVial)

const HealthBar = ({heartbeats, outTemperature, inTemperature, sugarLevel, pressure}) => (
  <div className="app-health-bar">
    <section className="app-health-bar__content heart">
      <div className="app-health-bar__icon"><FontAwesomeIcon className="icon heartbeats" icon={['fa', 'heartbeat']} color="red"/></div>
      <div className="app-health-bar__value">
        <span>Heartbeats: <strong>{heartbeats}</strong></span>
      </div>
    </section>
    <section className="app-health-bar__content out-temperature">
      <div className="app-health-bar__icon"><FontAwesomeIcon className="icon temperature" icon={['fa', 'temperature-high']} color="red"/></div>
      <div className="app-health-bar__value">
        <span>Outdor temperature: <strong>{outTemperature}</strong></span>
      </div>
    </section>
    <section className="app-health-bar__content in-temperature">
      <div className="app-health-bar__icon"><FontAwesomeIcon className="icon temperature" icon={['fa', 'temperature-high']} color="red"/></div>
      <div className="app-health-bar__value">
        <span>Indor temperature: <strong>{inTemperature}</strong></span>
      </div>
    </section>
    <section className="app-health-bar__content sugar-level">
      <div className="app-health-bar__icon"><FontAwesomeIcon className="icon sugar-level" icon={['fas', 'utensil-spoon']} color="red"/></div>
      <div className="app-health-bar__value">
        <span>Sugar level: <strong>{sugarLevel}</strong></span>
      </div>
    </section>
    <section className="app-health-bar__content pressure">
      <div className="app-health-bar__icon"><FontAwesomeIcon className="icon pressure" icon={['fas', 'vial']} color="red"/></div>
      <div className="app-health-bar__value">
        <span>Pressure: <strong>{pressure}</strong></span>
      </div>
    </section>
  </div>
)

export default HealthBar
