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
          <BrowserRouter basename='/Ecommerce-ptest'>
            <App />
          </BrowserRouter>
        </Provider>
      </React.StrictMode >
    </AuthContext.Provider>
  );
}

root.render(<MyRoot />)