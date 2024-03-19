import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { WheatherApp } from './WheatherApp.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <WheatherApp />
  </React.StrictMode>,
)
