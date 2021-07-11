import React from 'react'
import {useContext} from 'react'
import {useHistory} from 'react-router-dom'
import LoginContext from './Context/Logincontext'

export default function Login() {
    const context=useContext(LoginContext)
    const history=useHistory()
    function submit(event) {
        event.preventDefault()
        history.push('/home')
        context.loggedin()      
    }
    return (
        <div Style={"margin-left:600px"}>
            <input type="text" placeholder="USERNAME " /> <br/><br/>  
            <input type="text" placeholder="PASSWORD" /> <br /><br/> 
            <button onClick={(event)=>{submit(event)}}>LOGIN</button>
        </div>
    )
}
