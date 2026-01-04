import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { routes } from './routes';
import { useAppDispatch, useAppSelector } from './hook/redux';
import { refreshTokens } from './redux/slices/userSlice';
//import { AuthContext } from './context';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import './scss/styles.scss';


function App() {
  const dispatch = useAppDispatch();
  const jwtToken = useAppSelector(state => state.userReducer.jwtToken)
  //const {isAuth, setIsAuth} = useContext(AuthContext);
  //const navigate = useNavigate();
  
  useEffect(() => {
    if (jwtToken) {
      dispatch(refreshTokens())
    }  
  }, [dispatch, jwtToken])

  // if (!jwtToken) {
  //   navigate('/login');
  // }

  return (
    <div className='container'>
      <NavBar />
      <Routes>
        {routes.map((route, key) => {
          return <Route key={route.path} path={route.path} element={route.element} />
        })}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;


// {
//   isAuth
//     ?
//     <Routes>
//       {privateRoutes.map((route, key) => {
//         return <Route key={route.path} path={route.path} element={route.element} />
//       })}
//     </Routes>
//     :
//     <Routes>
//       {publicRoutes.map((route, key) => {
//         return <Route key={route.path} path={route.path} element={route.element} />
//       })}
//     </Routes>
// }