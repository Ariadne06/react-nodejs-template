import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [serverStatus, setServerStatus] = useState('Checking...')

  useEffect(() => {
    // Check if backend is running
    fetch('/api')
      .then(res => res.json())
      .then(data => {
        setServerStatus(data.message || 'Connected')
      })
      .catch(() => {
        setServerStatus('Backend not connected')
      })
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>React + Node.js Template</h1>
        <p>Welcome to your full-stack application!</p>
        <div className="status">
          <p>Backend Status: <span className={serverStatus.includes('not') ? 'error' : 'success'}>{serverStatus}</span></p>
        </div>
      </header>
    </div>
  )
}

export default App
