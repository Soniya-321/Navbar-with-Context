// Write your code here
import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <>
          <Navbar />
          {isDarkTheme ? (
            <div className="container-1">
              <img
                className="img" alt='home'
                src="https://assets.ccbp.in/frontend/react-js/home-dark-img.png"
              />
              <h1>Home</h1>
            </div>
          ) : (
            <>
              <hr className="separator" />
              <div className="container">
                <img
                  className="img" alt='home'
                  src="https://assets.ccbp.in/frontend/react-js/home-light-img.png"
                />
                <h1>Home</h1>
              </div>
            </>
          )}
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
