import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAuthorization } from '../../redux/authorization/authorizationSelectors'

const PrivateRoute = ({
  children,
  ...routeProps
}) => {
  const isAuthorized = useSelector(getAuthorization)

  return (
    <Route {...routeProps}>
      {isAuthorized ? children : <Redirect to="/login" />}
    </Route>
  )
}

export default PrivateRoute