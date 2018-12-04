import React, { Component } from 'react'
import { Pie } from 'react-chartjs-2'

import { library as IconsLibrary } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWind, faCloud, faLightbulb, faVial } from '@fortawesome/free-solid-svg-icons'

import AppHealthBar from '../components/HealthBar'
import { FeaturesBar as AppFeaturesBar, Feature } from '../components/FeaturesBar'

IconsLibrary.add(faWind, faCloud, faLightbulb, faVial)

const DATA = {
  labels: [
    'Stable', 'Unstable', 'Critical'
  ],
  datasets: [
    {
      label: "hui",
      data: [2640, 920, 280],
      backgroundColor: [
        '#1fc421',
        '#ffa800',
        '#ff0000'
      ]
    }
  ]
}

class HealthStatus extends Component {
  constructor(props) {
    super(props)
    this.state = {
      features: {
        wind: {
          disabled: 'true',
          color: '#bababa'
        },
        cloud: {
          disabled: 'true',
          color: '#bababa'
        },
        lightbulb: {
          disabled: 'true',
          color: '#bababa'
        }
      },
      bodyStatus: {
        heartbeat: 120,
        pressure: '110/80'
      }
    }
  }

  toggleWindFeature = () => {
    this.setState({
      features: Object.assign(this.state.features, {
        wind: {
          disabled: !this.state.features.wind.disabled ? true : false,
          color: this.state.features.wind.color === '#84af86' ? '#bababa' : '#84af86'
        }
      })
    })
  }

  togglecloudFeature = () => {
    this.setState({
      features: Object.assign(this.state.features, {
        cloud: {
          disabled: !this.state.features.cloud.disabled ? true : false,
          color: this.state.features.cloud.color === '#84af86' ? '#bababa' : '#84af86'
        }
      })
    })
  }

  togglelightbulbFeature = () => {
    this.setState({
      features: Object.assign(this.state.features, {
        lightbulb: {
          disabled: !this.state.features.lightbulb.disabled ? true : false,
          color: this.state.features.lightbulb.color === '#84af86' ? '#bababa' : '#84af86'
        }
      })
    })
  }

  componentDidMount() {
		this.timer = setInterval(this.tick, 1000)
	}

  componentWillUnmount() {
		clearInterval(this.timer)
	}

  tick = () => {
    this.setState({
      bodyStatus: {
        heartbeat: Math.floor(Math.random() * 61 + 90),
        pressure: `${Math.floor(Math.random() * 20 + 110)}/80`
      }
    })
  }

  render() {
    return (
      <div className="main-health-status-container">
        <div className="main-health-status-chart">
          <h2 className="main-health-status-chart__title">
            <center>Status per month</center>
          </h2>
          <Pie data={DATA} />
        </div>
        <AppHealthBar heartbeats={this.state.bodyStatus.heartbeat} outTemperature={-12} inTemperature={27} sugarLevel={4.2} pressure={this.state.bodyStatus.pressure} />
        <div className="main-features-container">
          <AppFeaturesBar>
            <Feature name="wind" disabled={this.state.features.wind.disabled} onClick={this.toggleWindFeature}><FontAwesomeIcon className="app-features__feature__icon wind" icon={['fa', 'wind']} color={this.state.features.wind.color} /></Feature>
            <Feature name="cloud" disabled={this.state.features.cloud.disabled} onClick={this.togglecloudFeature}><FontAwesomeIcon className="app-features__feature__icon cloud" icon={['fa', 'cloud']} color={this.state.features.cloud.color} /></Feature>
            <Feature name="lightbulb" disabled={this.state.features.lightbulb.disabled} onClick={this.togglelightbulbFeature}><FontAwesomeIcon className="app-features__feature__icon lightbulb" icon={['fa', 'lightbulb']} color={this.state.features.lightbulb.color} /></Feature>
          </AppFeaturesBar>
        </div>
      </div>
    )
  }
}

export default HealthStatus
