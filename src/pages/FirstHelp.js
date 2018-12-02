import React, { Component } from 'react'
import AppFirstHelp from '../components/FirstHelp'

function onActivate() {
  console.log("Activating")
}

function onDisable() {
  console.log("Disabling")
}

const FirstHelp = (props) => (
  <AppFirstHelp onActivate={onActivate} onDisable={onDisable} />
)

export default FirstHelp
