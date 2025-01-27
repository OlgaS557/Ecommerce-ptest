import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store/configureStore';
import { AuthContext } from './context';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

function MyRoot() {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth
    }}>
      <React.StrictMode>
        <Provider store={store}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Provider>
      </React.StrictMode >
    </AuthContext.Provider>
  );
}

root.render(<MyRoot />)

// При диплое на GitHub
// <BrowserRouter basename='/Ecommerce-ptest'>
// package.json:
// {
//   "name": "ecommerce-ptest",
//   "version": "0.1.0",
//   "private": true,
//   "homepage": "https://olgas557.github.io/Ecommerce-ptest",

// "scripts": {
//   "predeploy": "npm run build",
//   "deploy": "gh-pages -d build",
//   "start": "react-scripts start",
//   "build": "react-scripts build",
//   "test": "react-scripts test",
//   "eject": "react-scripts eject"
// },


//netlify.toml
// base = "C:\\Java45\\Ecommerce-ptest"