import React, { Component } from 'react'

class FirstHelp extends Component {
  constructor(props) {
    super(props)

    this.state = {
      activated: false
    }
  }

  handleClick = () => {
    if (!this.state.activated) {
      this.props.onActivate()
    } else {
      this.props.onDisable()
    }

    this.setState({
      activated: !this.state.activated
    })
  }

  render() {
    return (
      <div className="app-first-help">
        <div className="app-first-help__title">First Aid</div>
        <div className="app-first-help__button">
          <button activated={this.state.activated.toString()} onClick={this.handleClick}>{this.state.activated ? "Disactivate" : "Activate"}</button>
        </div>
        <div className="app-first-help__description">You can activate first help on your devise. This option make some with your body and kill you so fast, how you even can thing.</div>
      </div>
    )
  }
}

export default FirstHelp
