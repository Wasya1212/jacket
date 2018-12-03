import React, { Component } from 'react'
import { Pie } from 'react-chartjs-2'

import AppHealthBar from '../components/HealthBar'
import AppFeaturesBar from '../components/FeaturesBar'

const DATA = {
  labels: [
    'Critical', 'Unstable', 'Stable'
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

const HealthStatus = () => (
  <div className="main-health-status-container">
    <div className="main-health-status-chart">
      <Pie data={DATA} />
    </div>
    <AppHealthBar heartbeats={120} outTemperature={-12} inTemperature={27} sugarLevel={4.2} pressure={`${'110/80'}`} />
    <div className="main-features-container">
      <AppFeaturesBar />
    </div>
  </div>
)

export default HealthStatus
