import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Router
import { BrowserRouter } from 'react-router-dom';

// Global styling
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)