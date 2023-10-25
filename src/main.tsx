import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.scss'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename={'/FM_Scoot-multi-page-website/'}>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
