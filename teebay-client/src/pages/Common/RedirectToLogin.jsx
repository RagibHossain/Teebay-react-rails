import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'

const RedirectToLogin = () => {
    const token = useSelector((state) => state.user.token)
  
    return (
        <div>
            {!token && <Redirect to="/"/>}
        </div>
    )
}

export default RedirectToLogin
