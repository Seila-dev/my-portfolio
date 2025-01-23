import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App.tsx'
import { GlobalStyle } from './styles/GlobalStyles.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStyle />
    <App />
  </StrictMode>,
)
