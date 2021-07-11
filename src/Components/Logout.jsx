import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import LoginContext from './Context/Logincontext'
export default function Logout() {
    const context = useContext(LoginContext)
    const history = useHistory()
    context.loggedin()
    console.log(context);
    history.push('/')
    return (
        <>
         
        </>
    )
}