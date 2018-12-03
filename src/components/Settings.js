import React, { Component } from 'react'

const SettingsItem = (props) => (
  <li className="app-settings__list__item" onClick={props.onClick}>
    <div className="app-settings__list__item__title">{props.title}</div>
    <div className="app-settings__list__item__description">{props.description}</div>
  </li>
)

const Settings = ({items}) => (
  <div className="app-settings">
    <ul className="app-settings__list">
      {
        items.map((item, key) => <SettingsItem key={`settings-item-${key}`} description={item.description} title={item.title} onClick={item.handleClick} />)
      }
    </ul>
  </div>
)

export default Settings
