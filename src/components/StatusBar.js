import React, { Component } from 'react'

function HeartStatus(props) {
  return (
    <div className="heart-status">
      <span className="heart-status__value">{props.val}</span>
    </div>
  )
}

function TemperatureStatus(props) {
  return (
    <div className="temperature-status">
      <span className="temperature-status__value">{props.val}</span>
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
        <section className="app-status-bar__temperature">
          <TemperatureStatus val={this.props.totalTemperatureValue}/>
        </section>
      </div>
    )
  }
}

export default StatusBar
