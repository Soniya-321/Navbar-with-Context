// Write your code here
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const onClickTheme = event => {
        toggleTheme(event.target.value)
        console.log('clikc')
      }

      return isDarkTheme ? (
        <navbar className="navbar-container-1">
          <div className="logo-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png"
              className="logo-img"
              alt="website logo"
            />
          </div>
          <ul className="options-container">
            <Link to="/" className="link">
              <li className="option-1">Home</li>
            </Link>
            <Link to="/about" className="link">
              <li className="option-1">About</li>
            </Link>
          </ul>
          <button
            data-testid="theme"
            className="theme-container"
            onClick={onClickTheme}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
              className="theme-img"
              alt="theme"
            />
          </button>
        </navbar>
      ) : (
        <navbar className="navbar-container">
          <div className="logo-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
              className="logo-img"
              alt="website logo"
            />
          </div>
          <ul className="options-container">
            <Link to="/" className="link">
              <li className="option">Home</li>
            </Link>
            <Link to="/about" className="link">
              <li className="option">About</li>
            </Link>
          </ul>
          <button
            data-testid="theme"
            className="theme-container"
            onClick={onClickTheme}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
              className="theme-img"
              alt="theme"
            />
          </button>
        </navbar>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
