import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// Import Redux libraries
import ReactDOM from "react-dom";
import store from "./app/store";
import { Provider } from "react-redux";
// import { createStore } from "redux";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
