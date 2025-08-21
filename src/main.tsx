import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App.tsx'
import { GlobalStyle } from './styles/GlobalStyles.ts'
import { Toaster } from 'sonner'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStyle />
    <Toaster />
    <App />
  </StrictMode>,
)
