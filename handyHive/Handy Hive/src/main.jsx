import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { CoreApp } from './GitProfile/CoreApp'
import { GitProfile } from './GitProfile/gitProfile'
import './index.css'
import Tabs from './Tabchange'
import TabButton from './Tabchange'
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CoreApp />
  </React.StrictMode>,
)
