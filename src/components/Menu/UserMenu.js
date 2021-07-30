import React, {useCallback} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { postLogout } from '../../redux/authorization/authorizationActions'
import { getName } from '../../redux/authorization/authorizationSelectors'
import './Menu.css'
import image from './mine.jpg'

function UserMenu () {
  const name = useSelector(getName)
  const dispatch = useDispatch()
  const onLogout = useCallback(() => { dispatch(postLogout()) }, [dispatch])

  return (
    <div className="menuUser">
      <img className="userImage" src={image} alt="" width="32"/>
      <span className="userName">Welcome, {name}</span>
      <button type="button" onClick={onLogout}>
        Logout
      </button>
    </div>
  )
}

export default UserMenu