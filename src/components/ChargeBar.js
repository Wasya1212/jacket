import React, { Component } from 'react'

const ChargeBar = (props) => (
  <div className="app-charge-bar">
    <div className="app-charge-bar__icon">
      <div className="app-charge-bar__icon__default"></div>
      <div className="app-charge-bar__icon__current" style={{height: `${props.value}%`}}></div>
    </div>
    <div className="app-charge-bar__value">{`${props.value}%`}</div>
  </div>
)

export default ChargeBar
