import React from 'react';
import { BrowserRouter as Router, Routes as Switch, Route, Link } from "react-router-dom";
import Waiter from './components/Waiter';
import './App.css';
import logo from './images/logo.png';

function App() {
  return (
    <Router>
      <div className='container'>
        <Link to='/'><img src={logo} alt='logo del sitio' /></Link>
        <div>
          <Link to='/garzones' className='btn btn-outline-warning'>GARZONES</Link>
          <Link to='/cocina' className='btn btn-outline-warning'>COCINA</Link>
        </div>
        <Switch>
          <Route path='/garzones' element={<Waiter />} />
          <Route path='/cocina' element='APP COCINA EN CONSTRUCCIÓN' />
          <Route path='/' />
        </Switch>
      </div>
    </Router>
  )
}

export default App;
