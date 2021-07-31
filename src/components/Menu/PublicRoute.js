import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAuthorization } from '../../redux/authorization/authorizationSelectors'

const PublicRoute = ({
  children,
  ...routeProps
}) => {
  const isAuthorized = useSelector(getAuthorization)

  return (
    <Route {...routeProps}>
      {isAuthorized && routeProps.restricted ? <Redirect to="/contacts" /> : children}
    </Route>
  )
}

export default PublicRoute