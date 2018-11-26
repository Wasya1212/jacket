// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
//
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }
//
// export default App;

import React, { Component } from 'react'
import './App.css'

import AppHeader from './components/Header'
import AppStatusBar from './components/StatusBar'

const STATUS = {
  heart: {
    val: 120
  },
  temperature: {
    val: 36.6
  }
}

const MENU_ITEMS = [1, 2, 3, 4, 5]
const USER = {
  username: 'some user',
  img: 'https://i.pinimg.com/736x/2d/6f/3f/2d6f3f1052698b13b8864d76dafa9d75--anime-child-anime-girls.jpg'
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">
          <AppHeader menuItems={MENU_ITEMS} user={USER}/>
        </header>
        <main>
          <AppStatusBar heartBeatsValue={STATUS.heart.val} totalTemperatureValue={STATUS.temperature.val}/>
        </main>
      </div>
    )
  }
}

export default App
