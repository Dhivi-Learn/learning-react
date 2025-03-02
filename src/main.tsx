import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import ChildComponent from "./ChildComponent.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App>
        <ChildComponent/>
    </App>
  </StrictMode>,
)
