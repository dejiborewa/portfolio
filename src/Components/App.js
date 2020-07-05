import React, { useContext, useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.scss';
import Home from './Home';
import About from './About';
import Sidebar from './Sidebar';
import { theme, ThemeContext } from './Theme';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';


function App() {
  const themeMode = useState(() => localStorage.getItem('mode') || 'light');
  return (
    <ThemeContext.Provider value={themeMode}>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Nav />
            <Home />
          </Route>

          <Route path='/home'>
            <Nav />
            <Home />
          </Route>

          <Route path='/about'>
            <Nav /> 
            <About />
          </Route>

          <Route path='/sidebar'>
            <Sidebar />
          </Route>

          <Route path='/sidebar'>
            <Sidebar />
          </Route>
        </Switch>
      </Router>
    </ThemeContext.Provider>
  );
} 

function Nav() {
  const themeMode = useContext(ThemeContext)[0];
  const currentTheme = theme[themeMode];
  const [width, setWidth] = useState(document.body.clientWidth);

  const resize = () => {
    setWidth(document.body.clientWidth);
  }
  window.onresize = resize;

  return (
    <div className='container-fluid nav-main' style={{background: `${currentTheme.background}`, color:`${currentTheme.color}`}}>
      <div className='row'>
        {(width >= 576) ? <FullWidth /> : <Hamburger />} 
        <div className='col-4 name'>Dejiborewa</div>
        <ToggleTheme />
      </div>
    </div>
  )
}

function Hamburger() {
  return (
    <Link to='/sidebar' className='col-4 menu' style={{color: 'inherit'}}>
      <div>
        <button className='menu-button'>&#9776;</button>
      </div>
    </Link>
  )
}

function FullWidth() {
  const themeMode = useContext(ThemeContext)[0];
  const currentTheme = theme[themeMode];

  const hover = (e) => {
    e.target.style.boxShadow = `${currentTheme.boxShadow}`;
  }

  const unHover = (e) => {
    e.target.style.boxShadow = 'none'
  }

  return (
    <div className='col-4 fullWidth'>
      <Link to='/home' style={{color: 'inherit', textDecoration: 'none'}}>
        <div className='home-fullWidth' onMouseEnter={hover} onMouseLeave={unHover}>Home</div>
      </Link>
      <Link to='/about' style={{color: 'inherit', textDecoration: 'none'}}>
          <div className='about-fullWidth' onMouseEnter={hover} onMouseLeave={unHover}>About Me</div>
      </Link>
    </div>
  )
}

function ToggleTheme() {
  const [themeMode, setThemeMode] = useContext(ThemeContext);

  useEffect(() => localStorage.setItem('mode', themeMode), [themeMode])
  return (
    
    <div className='col-4 toggle' onClick={() => setThemeMode(themeMode === 'light' ? 'dark' : 'light')}>
      {(themeMode === 'light') ? <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 32 32">
          <title>moon</title>  
          <path d="M21.837 17.831c-0.597 2.392-2.76 4.163-5.337 4.163-3.038 0-5.5-2.462-5.5-5.5 0-2.577 1.772-4.739 4.163-5.337 0.351-0.088 0.716-0.142 1.091-0.158-0.165 0.468-0.254 0.971-0.254 1.495 0 2.485 2.015 4.5 4.5 4.5 0.524 0 1.027-0.090 1.495-0.254-0.016 0.375-0.070 0.739-0.158 1.091z"/>
        </svg> : <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 32 32">
          <title>sun</title>
          <path fill='#fff' d="M16.529 22v0c-3.038 0-5.5-2.462-5.5-5.5s2.462-5.5 5.5-5.5c3.038 0 5.5 2.462 5.5 5.5s-2.462 5.5-5.5 5.5zM16.529 21c2.485 0 4.5-2.015 4.5-4.5s-2.015-4.5-4.5-4.5c-2.485 0-4.5 2.015-4.5 4.5s2.015 4.5 4.5 4.5v0zM16.529 7c-0.276 0-0.5 0.216-0.5 0.495v2.009c0 0.274 0.232 0.495 0.5 0.495 0.276 0 0.5-0.216 0.5-0.495v-2.009c0-0.274-0.232-0.495-0.5-0.495v0zM23.267 9.791c-0.195-0.195-0.506-0.201-0.704-0.003l-1.421 1.421c-0.193 0.193-0.186 0.514 0.003 0.704 0.195 0.195 0.506 0.201 0.704 0.003l1.421-1.421c0.193-0.193 0.186-0.514-0.003-0.704v0zM26.058 16.529c0-0.276-0.216-0.5-0.495-0.5h-2.009c-0.274 0-0.495 0.232-0.495 0.5 0 0.276 0.216 0.5 0.495 0.5h2.009c0.274 0 0.495-0.232 0.495-0.5v0zM23.267 23.267c0.195-0.195 0.201-0.506 0.003-0.704l-1.421-1.421c-0.193-0.193-0.514-0.186-0.704 0.003-0.195 0.195-0.201 0.506-0.003 0.704l1.421 1.421c0.193 0.193 0.514 0.186 0.704-0.003v0zM16.529 26.058c0.276 0 0.5-0.216 0.5-0.495v-2.009c0-0.274-0.232-0.495-0.5-0.495-0.276 0-0.5 0.216-0.5 0.495v2.009c0 0.274 0.232 0.495 0.5 0.495v0zM9.791 23.267c0.195 0.195 0.506 0.201 0.704 0.003l1.421-1.421c0.193-0.193 0.186-0.514-0.003-0.704-0.195-0.195-0.506-0.201-0.704-0.003l-1.421 1.421c-0.193 0.193-0.186 0.514 0.003 0.704v0zM7 16.529c0 0.276 0.216 0.5 0.495 0.5h2.009c0.274 0 0.495-0.232 0.495-0.5 0-0.276-0.216-0.5-0.495-0.5h-2.009c-0.274 0-0.495 0.232-0.495 0.5v0zM9.791 9.791c-0.195 0.195-0.201 0.506-0.003 0.704l1.421 1.421c0.193 0.193 0.514 0.186 0.704-0.003 0.195-0.195 0.201-0.506 0.003-0.704l-1.421-1.421c-0.193-0.193-0.514-0.186-0.704 0.003v0z"/>
        </svg> 
      }
    </div>
  )
}


export default App;
