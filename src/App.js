import React, { useEffect, Suspense, lazy } from 'react';
import { useDispatch } from 'react-redux';
import {BrowserRouter as Router, Switch, Redirect} from 'react-router-dom';
import MyLoader from './components/Loader/Loader';
import Menu from './components/Menu/Menu';
import {getCurrentUser} from './redux/authorization/authorizationActions'
import PrivateRoute from './components/Menu/PrivateRoute';
import PublicRoute from './components/Menu/PublicRoute';

const HomePage = lazy(() => import('./components/Pages/HomePage')) /* webpackChunkName: "home-page" */
const LoginPage = lazy(() => import('./components/Pages/LoginPage')) /* webpackChunkName: "login-page" */
const RegisterPage = lazy(() => import('./components/Pages/RegisterPage')) /* webpackChunkName: "register-page" */
const ContactsPage = lazy(() => import('./components/Pages/ContactsPage')) /* webpackChunkName: "contacts-page" */

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCurrentUser())
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [])

  return (
    <div>
      <Router>
        <Menu />
        <Suspense fallback={<MyLoader />}>
          <Switch>
            <PublicRoute path="/" exact>
              <HomePage />
            </PublicRoute>
            <PublicRoute path="/register" restricted>
              <RegisterPage />
            </PublicRoute>
            <PublicRoute path="/login" restricted>
              <LoginPage />
            </PublicRoute>
            <PrivateRoute path="/contacts">
              <ContactsPage />
            </PrivateRoute>
            <Redirect to="/" />
          </Switch>
        </Suspense>
      </Router>
    </div>
  )
}

export default App;