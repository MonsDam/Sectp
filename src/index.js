import React from 'react';
import ReactDOM from 'react-dom';
import './estilos/Navbar.css'
import './estilos/Log-in.css'
import './estilos/Form_Login.css'
import './estilos/Navbar_User.css';
import './estilos/Fish_tanks.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import Routes_sectp from './components/Routes_sectp';
// import Example from './pages/Example';


const elemento = (
  <div>
      <Routes_sectp/>
  </div>
)

const container = document.getElementById('root')

ReactDOM.render(elemento, container)


