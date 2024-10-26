// Write your code here
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const NotFound = () => (
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
                alt="not found"
                src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              />
              <h1>Lost Your Way?</h1>
              <p>We cannot seem to find the page you are looking for.</p>
            </div>
          ) : (
            <>
              <hr className="separator" />
              <div className="container">
                <img
                  className="img"
                  alt="not found"
                  src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
                />
                <h1>Lost Your Way?</h1>
                <p>We cannot seem to find the page you are looking for.</p>
              </div>
            </>
          )}
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
