import React, { Component } from 'react'
import { Line, Pie } from 'react-chartjs-2'

import AppStatusBar from '../components/StatusBar'
import AppDateBar from '../components/DateBar'
import AppTimingBar from '../components/TimingBar'

let DATA = {
	labels: [],
	datasets: [{
		label: 'Heartbeats',
		fill: false,
		backgroundColor: '#ff5858',
		borderColor: '#ff5858',
		data: [],
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
	}, {
		label: 'Temperature',
		fill: false,
		backgroundColor: '#4688f7',
		borderColor: '#4688f7',
		data: [],
		backgroundColor: [
			'#63daff',
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

function addData({ temperature, heartbeat, date }) {
	let temperatureValue = temperature || 36.6
	let heartbeatsValue = heartbeat || 120
	let time = date || Date.now()

	let newData = {
		labels: DATA.labels,
		temperatureData: DATA.datasets[1].data,
		heartbeatsData: DATA.datasets[0].data,
	}

	if (newData.labels.length > 12) {
		newData.labels.splice(0, 1)
		newData.temperatureData.splice(0, 1)
		newData.heartbeatsData.splice(0, 1)
	}

	newData.labels.push(time)
	newData.heartbeatsData.push(heartbeatsValue)
	newData.temperatureData.push(temperatureValue)

	DATA.labels = newData.labels.slice(0)
	DATA.datasets[0].data = newData.heartbeatsData.slice(0)
	DATA.datasets[1].data = newData.temperatureData.slice(0)
}

const options = {
	responsive: true,
	aspectRatio: 0.3,
	maintainAspectRatio: true,
	animation: {
		duration: 700
		// easing: 'linear'
	},
	title: {
		display: true,
		text: 'Heartbeats chart ( 12 sec )'
	},
	scales: {
		xAxes: [{
			type: 'time',
			format: 'MM/DD/YYYY HH:mm',
			tooltipFormat: 'll HH:mm',
			display: true,
		}],
		yAxes: [{
			ticks: {
				beginAtZero: false,
				// suggestedMin: 90,
        // suggestedMax: 160,
				steps: 4
			},
			display: true
		}]
	}
}

function dateToDMY(date) {
    let d = date.getDate()
    let m = date.getMonth() + 1
    let y = date.getFullYear()

		return `${(d <= 9 ? '0' + d : d)}.${(m<=9 ? '0' + m : m)}.${y}`
}

function timeToHM(date) {
	let h = date.getHours()
	let m = date.getMinutes()

	return `${(h <= 9 ? '0' + h : h)}:${(m <= 9 ? '0' + m : m)}`
}

class Home extends Component {
	constructor(props) {
		super(props)
		let currentTime = new Date()

		this.state = {
			bodyStatus: {
				healthParameters: [],
			  currentHeartBeat: 120,
				currentTime: Date.now(),
				date: dateToDMY(currentTime),
				time: timeToHM(currentTime),
				currentTemperature: 36.6
			}
		}
	}

	componentWillMount() {

	}

	componentDidMount() {
		this.timer = setInterval(this.tick, 1000)
	}

	componentWillUnmount() {
		clearInterval(this.timer)
	}

	tick = () => {
		let heartbeat = Math.floor(Math.random() * 61 + 90)
		let temperature = (Math.random() * 1 + 36).toFixed(1)
		let date = new Date()
		let dateNow = Date.now()

		this.setState({
			bodyStatus: {
				currentHeartBeat: heartbeat,
				currentTime: dateNow,
				date: dateToDMY(date),
				time: timeToHM(date),
				healthParameters: [...this.state.bodyStatus.healthParameters, { temperature, heartbeat, date: dateNow, time: timeToHM(date) }],
				currentTemperature: temperature
			}
		})

		addData({ heartbeat: heartbeat, date: dateNow, time: timeToHM(date), temperature: temperature })
	}

	render() {
		return (
			<div className="main-health-status-container">
		    <AppStatusBar heartBeatsValue={this.state.bodyStatus.currentHeartBeat} totalTemperatureValue={this.state.bodyStatus.currentTemperature}/>
		    <AppDateBar date={this.state.bodyStatus.date} time={this.state.bodyStatus.time} />
		    <Line height="250" data={DATA} options={options} />
		    <AppTimingBar health={this.state.bodyStatus.healthParameters} />
		  </div>
		)
	}
}

export default Home
