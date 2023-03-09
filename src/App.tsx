import { Link } from 'react-router-dom'
import { useRoutes } from 'react-router-dom'
import './App.css'
import routes from './router'

function App() {
  const element = useRoutes(routes)
  return (
    <div className="App">
      <div>
        <a href="/">
          <img src="/logo.svg" className="logo" />
        </a>
      </div>
      <h1>RC PROJECT</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/404">404</Link>
          </li>
        </ul>
      </nav>

      <div>{element}</div>
    </div>
  )
}

export default App
