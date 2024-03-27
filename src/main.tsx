import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Toaster } from 'sonner';
import { Provider } from 'react-redux'; 
import { store } from './store/store.ts';
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    	<Provider store={store}>
    <App />
      </Provider>
    <Toaster richColors={true} />
  </React.StrictMode>,
)
