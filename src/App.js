import React, { Component } from 'react'
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom'
import './styles/main.sass'

import AppHeader from './components/Header'
import AppHomePage from './pages/Home'

// import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import * as Icons from '@fortawesome/free-solid-svg-icons'
//
// // library.add(Icons)

const TEST = () => (
  <div>
    hello test
  </div>
)

const HEALTH = () => (
  <div>
    hello health
  </div>
)

const BODY = () => (
  <div>
    hello body
  </div>
)

const FHELP = () => (
  <div>
    hello first help
  </div>
)

const SETTINGS = () => (
  <div>
    hello settings
  </div>
)

const CHARGE = () => (
  <div>
    hello charge
  </div>
)

const MAIN = () => (
  <main className="main column">
    <Switch>
      <Route exact path="/" component={AppHomePage} />
      <Route path="/test" component={TEST} />
      <Route path="/health" component={HEALTH} />
      <Route path="/body" component={BODY} />
      <Route path="/first-help" component={FHELP} />
      <Route path="/settings" component={SETTINGS} />
      <Route path="/charge" component={CHARGE} />
    </Switch>
  </main>
)

const MENU_ITEMS = [
  <Link to="/">Profile</Link>,
  <Link to="/health">Health Data</Link>,
  <Link to="/body">Body Data</Link>,
  <Link to="/first-help">First Help</Link>,
  <Link to="/charge">Jacket Charge</Link>,
  <Link to="/settings">Settings</Link>,
  <Link to="/test">Test</Link>
]
const USER = {
  username: 'some user',
  img: 'https://i.pinimg.com/736x/2d/6f/3f/2d6f3f1052698b13b8864d76dafa9d75--anime-child-anime-girls.jpg'
}

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="header">
            <AppHeader menuItems={MENU_ITEMS} user={USER}/>
          </header>
          <MAIN />
        </div>
      </BrowserRouter>
    )
  }
}

export default App
