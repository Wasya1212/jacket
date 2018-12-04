import React, { Component } from 'react'

class MenuBar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      active: false
    }
  }

  handleClick = () => {
    this.setState({
      active: !this.state.active
    })

    if (this.state.active === false) {
      document.body.style.height = "100vh"
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.height = "auto"
      document.body.style.overflow = "auto"
    }
  }

  hide = () => {
    this.setState({
      active: false
    })
    document.body.style.height = "auto"
    document.body.style.overflow = "auto"
  }

  render() {
    return (
      <div className="app-menu">
        <div className="app-menu__control" onClick={this.handleClick}>
          <div className="app-menu__control__line"></div>
          <div className="app-menu__control__line"></div>
          <div className="app-menu__control__line"></div>
        </div>
        <nav className={`app-menu__content ${this.state.active ? '' : 'hidden'}`}>
          {
            this.props.children.map((child) => (
              <div onClick={this.hide}>{child}</div>
            ))
          }
          <div className="close" onClick={this.hide}></div>
        </nav>
      </div>
    )
  }
}

function MenuItem(props) {
  return (
    <div className="app-menu__item">{props.children}</div>
  )
}

class ProfileBar extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="app-profile">
        <div className="app-profile__username">
          <span>{this.props.user.username}</span>
        </div>
        <div className="app-profile__picture">
          <img src={this.props.user.img} alt={`${this.props.user.username} avatar`} />
        </div>
      </div>
    )
  }
}

class Header extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="app-header">
        <div className="app-header__top-bar top-bar">
          <div className="app-header__top-bar__left top-bar-left">
            <div className="app-header__menu">
              <MenuBar>
                {
                  (menuItems => {
                    return menuItems.map((menuItem, index) => {
                      return (
                        <MenuItem key={`main-header-menu-item-${index + 1}`}>{menuItem}</MenuItem>
                      )
                    })
                  })(this.props.menuItems)
                }
              </MenuBar>
            </div>
          </div>
          <div className="app-header__top-bar__right top-bar-right">
            <div className="app-header__profile">
              <ProfileBar user={this.props.user} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Header
