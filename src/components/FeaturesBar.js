import React, { Component } from 'react'

const Feature = (props) => (
  <div className={`app-features__feature ${props.name || ''}`} disabled={props.disabled} onClick={props.onClick}>
    {props.children}
  </div>
)

const FeaturesBar = (props) => (
  <div className="app-features">{props.children}</div>
)

export { Feature, FeaturesBar }
