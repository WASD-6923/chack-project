
import reactLogo from './assets/react.svg'

import './App.css'

function App() {
  

  return (
    <>
      <div>
        <a href="https://www.djangoproject.com/" target="_blank">
          <img src="https://www.svgrepo.com/show/353657/django-icon.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Django + React</h1>
 
      <p className="read-the-docs">
        Test Deploy
      </p>
    </>
  )
}

export default App