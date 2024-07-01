import React from 'react'
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom'
import Login from './Login'
import Register from './Register'

const auth = localStorage.getItem('autentication') === 'true';

function Home() {
  return (
    <BrowserRouter>
        <div>
        <div>
            <nav>
                <Link to='/Login'>Login</Link>
                <Link to='/Register'>Register</Link>
            </nav>
        </div>
            
            <div>
                <section>
                    <Switch>
                        <Route path='/Login' Component={<Login/>}/>
                        <Route path='/Register' Component={<Register/>}/>
                    </Switch>
                </section>
            </div>
    </div>
    </BrowserRouter>
  )
}

export default Home
