import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/whatsappLogo.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Çok Yakında Web Sitemiz Hizmetinizde!</h1>
      <div className="card">
          <a href="https://wa.me/5433451076" target="_blank">
              <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
      </div>
    </>
  )
}

export default App
