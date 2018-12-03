import React, { Component } from 'react'
import { Line } from 'react-chartjs-2'

import AppStatusBar from '../components/StatusBar'
import AppDateBar from '../components/DateBar'
import AppTimingBar from '../components/TimingBar'

const DATA = {

	labels: [

		'Red',

		'Green',

		'Yellow'

	],

	datasets: [{

		data: [300, 50, 100],

		backgroundColor: [

		'#FF6384',

		'#36A2EB',

		'#FFCE56'

		],

		hoverBackgroundColor: [

		'#FF6384',

		'#36A2EB',

		'#FFCE56'

		]

	}]

}

const OPTIONS = {
  title: {
    text: 'Chart.js Time Scale'
  },
  scales: {
    xAxes: [{
      type: 'time',
      time: {
        format: 'MM/DD/YYYY HH:mm',
        // round: 'day'
        tooltipFormat: 'll HH:mm'
      },
      scaleLabel: {
        display: true,
        labelString: 'Date'
      }
    }],
    yAxes: [{
      scaleLabel: {
        display: true,
        labelString: 'value'
      }
    }]
  },
}

class Chart extends Component {
  constructor() {

  }

  render() {
    return (
      <div className="app-helth-status-chart">
        <Line data={DATA} />
      </div>
    )
  }
}

const STATUS = {
  heart: {
    val: 120
  },
  temperature: {
    val: 36.6
  }
}

const DATE = {
  date: '01.12.2018',
  time: '21:40'
}

const HOME = () => (
  <div className="main-health-status-container">
    <AppStatusBar heartBeatsValue={STATUS.heart.val} totalTemperatureValue={STATUS.temperature.val}/>
    <AppDateBar date={DATE.date} time={DATE.time} />
    <Line data={{labels: ['temperature, heart'], datsets: [1, 2, 3, 4, 5]}} options={OPTIONS}/>
    <AppTimingBar />
  </div>
)

export default HOME
