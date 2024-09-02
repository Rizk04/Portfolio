import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <footer className=' flex flex-col mt-10 items-center justify-center'>
    <p className='text-xl my-10 text-yellow-200'> Copyright Malek Rizk 2024</p>
    </footer>
  </React.StrictMode>,
)
