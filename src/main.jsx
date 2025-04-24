import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { FronteggProvider } from '@frontegg/react'
import { contextOptions } from './config/frontegg_options.js'
import './index.css'
// Components
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FronteggProvider contextOptions={contextOptions} hostedLoginBox={true}>
      <App />
    </FronteggProvider>
  </StrictMode>,
)
