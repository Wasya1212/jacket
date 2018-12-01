import React, { Component } from 'react'

const DateBar = ({ date, time }) => (
  <div className="app-date-bar">
    <span className="app-date-bar__date">{date}</span>
    <span className="app-date-bar__time">{time}</span>
  </div>
)

export default DateBar
