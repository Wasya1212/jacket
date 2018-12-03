import React, { Component } from 'react'
import AppSettings from '../components/Settings'

const ITEMS = [
  {
    handleClick: () => {
      console.log("Lang settings")
    },
    title: 'Language',
    description: "Select language"
  },
  {
    handleClick: () => {
      console.log("Activities settings")
    },
    title: 'Activities',
    description: "Some activities"
  },
  {
    handleClick: () => {
      console.log("Applications settings")
    },
    title: 'Applications',
    description: "Some applications"
  },
  {
    handleClick: () => {
      console.log("Test settings")
    },
    title: 'Test',
    description: "Test application"
  },
  {
    handleClick: () => {
      console.log("About settings")
    },
    title: 'About',
    description: ""
  },
  {
    handleClick: () => {
      console.log("License settings")
    },
    title: 'License',
    description: ""
  },
  {
    handleClick: () => {
      console.log("Logout settings")
    },
    title: 'Logout',
    description: ""
  }
]

const Settings = () => (
  <AppSettings items={ITEMS} />
)

export default Settings
