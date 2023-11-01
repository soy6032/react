import React, { Suspense, createContext, useState } from 'react';
import ReactDOM from 'react-dom/client';
import "./assets/scss/style.scss";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import Loader from "./layouts/loader/Loader";

export const LoginContext = createContext();
export const LoginFunContext = createContext();

function Root() {
  const [id, setId] = useState(''); // useState를 컴포넌트 내에서 사용

  return (
    <LoginContext.Provider value={id}>
      <LoginFunContext.Provider value={{ setId }}>
        <Suspense fallback={<Loader />}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Suspense>
      </LoginFunContext.Provider>
    </LoginContext.Provider>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Root />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
