import React from 'react';
import { BrowserRouter as Router, Routes as Switch, Route, Link } from "react-router-dom";
import { Navbar, NavbarBrand, Collapse } from 'reactstrap';
import Waiter from './components/Waiter';
import './App.css';
import logo from './images/logo.png';
import fail from './images/construction.png';

function App() {
  return (
    <Router>
      <div className='container'>
        <Navbar className='header'
          color='ligth'
          expand="lg"
          fixed=""
          light
        >
          <NavbarBrand>
            <Link to='/'><img width='50%' src={logo} alt='logo del sitio' /></Link>
          </NavbarBrand>
          <Collapse className='btn-group-lg menu' navbar>
            <Link to='/garzones' className='btn btn-outline-warning'>GARZONES</Link>
            <Link to='/cocina' className='btn btn-outline-warning'>COCINA</Link>
          </Collapse>
        </Navbar>
        <Switch>
          <Route path='/garzones' element={<Waiter />} />
          <Route path='/cocina' element={<img width='50%' src={fail} alt='Sitio en construcción.' />} />
          {/* <Route path='/*' element='ERROR 404' /> */}
          <Route path='/' element={<div className='container sarten'><span className="loader"></span></div>} />
        </Switch>
      </div>
    </Router>
  )
}

export default App;
