// Write your code here
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <>
          <Navbar />
          {isDarkTheme ? (
            <div className="container-1">
              <img
                className="img"
                alt="about"
                src="https://assets.ccbp.in/frontend/react-js/about-dark-img.png"
              />
              <h1>About</h1>
            </div>
          ) : (
            <>
              <hr className="separator" />
              <div className="container">
                <img
                  className="img"
                  alt="about"
                  src="https://assets.ccbp.in/frontend/react-js/about-light-img.png"
                />
                <h1>About</h1>
              </div>
            </>
          )}
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
