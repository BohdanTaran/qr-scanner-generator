import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Layout } from './Layout'

import './globals.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
)
