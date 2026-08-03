import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { IntlProvider } from 'react-intl'
import './index.css'
import App from './App.tsx'
import { messages } from './i18n/messages'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <IntlProvider locale="en" defaultLocale="en" messages={messages}>
      <App />
    </IntlProvider>
  </StrictMode>,
)
