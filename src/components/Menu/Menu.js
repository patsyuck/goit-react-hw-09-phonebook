import React from 'react'
import { useSelector } from 'react-redux'
import Navigation from './Navigation'
import UserMenu from './UserMenu'
import Authorization from './Authorization'
import {getAuthorization} from '../../redux/authorization/authorizationSelectors'
import './Menu.css'

function Menu() {
  const isAuthorized = useSelector(getAuthorization)

  return (
    <header className="menuHeader">
      <Navigation />
      {isAuthorized ? <UserMenu /> : <Authorization />}
    </header>
  )
}

export default Menu