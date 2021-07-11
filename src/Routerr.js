
import {Link, BrowserRouter, Route,Switch } from "react-router-dom"
import Home from "./Components/Home"
import Login from "./Components/Login"



export const routing=(
    <BrowserRouter>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <Link  class="navbar-brand" to="/" >Employee Portal</Link >
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
    <li class="nav-item active">
        <Link class="nav-link" to="/home">Home </Link>
    </li>

    {/* <li class="nav-item">
        <Link  class="nav-link" to="/colorchange">EmployeeList</Link >
    </li>
      
      
    <li class="nav-item">
        <Link class="nav-link " to="/count">EmployeeDetails</Link>
    </li> */}
    

    <li class="nav-item">
        <Link class="nav-link " to="/login">Login</Link>
    </li>
    </ul>
    
  </div>
</nav>

            <Switch>

            <Route path="/" exact> <Home/> </Route>
            <Route path="/home" component={Home} />
            <Route path="/login" component={Login} />

            </Switch>

     </BrowserRouter>
)

