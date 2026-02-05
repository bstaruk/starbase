import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import '@fontsource/bricolage-grotesque/400.css'
import '@fontsource/bricolage-grotesque/500.css'
import '@fontsource/bricolage-grotesque/600.css'
import '@fontsource/nunito/400.css'
import '@fontsource/nunito/500.css'
import '@fontsource/nunito/600.css'
import '@fontsource/roboto-mono/400.css'

import './theme/app.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
