import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { FronteggProvider } from '@frontegg/react'
import './index.css'
import App from './App.jsx'


const contextOptions = {
  baseUrl: 'https://app-p1dk09yawte1.frontegg.com',
  clientId: '67020ee2-9c0f-431a-ac4d-8a762897157c',
  appId: 'd107ff40-2f78-407f-8654-c411873367b1' 
};


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FronteggProvider contextOptions={contextOptions} hostedLoginBox={true}>
      <App />
    </FronteggProvider>
  </StrictMode>,
)
