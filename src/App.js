
import './App.css';
import { routing } from './Routerr';
import {router2} from './Router2';
import LoginContext from './Components/Context/Logincontext';
import { useState } from 'react';
 

function App() {
  const [login, setlogin] = useState()
  
  const loggedin =()=> {
    setlogin(!login)
    
  }
  const data={login, loggedin}
  return (
     <>
    <LoginContext.Provider value={data}>
      {login ? <>{routing}</>:<>{router2}</>}
    </LoginContext.Provider>
    </>
     
    
  );
}

export default App;
