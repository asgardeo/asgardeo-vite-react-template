import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AsgardeoProvider } from '@asgardeo/react'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AsgardeoProvider clientId="{{ tmplr.clientId }}" baseUrl="https://api.asgardeo.io/t/{{ tmplr.organization_name }}">
      <App />
    </AsgardeoProvider>
  </StrictMode>,
)
