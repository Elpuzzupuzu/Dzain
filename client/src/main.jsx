
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'

import { store } from './app/store.js'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleReCaptchaProvider
      reCaptchaKey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
      scriptProps={{
        async: true,
        defer: true,
        appendTo: 'head',
      }}
    >
      <Provider store={store}>
        <App />
      </Provider>
    </GoogleReCaptchaProvider>
  </StrictMode>
)
