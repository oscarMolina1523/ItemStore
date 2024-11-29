import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { FirebaseAppProvider } from 'reactfire'
import App from './app/App.tsx'
import './index.css'
import { firebaseConfig } from './services/firebase.ts'

createRoot(document.getElementById('root')!).render(
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <StrictMode>
      <App />
    </StrictMode>
  </FirebaseAppProvider>
)
