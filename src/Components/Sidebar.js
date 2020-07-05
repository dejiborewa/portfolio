import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { theme, ThemeContext } from './Theme';

function Sidebar() {
  const themeMode = useContext(ThemeContext)[0];
  const currentTheme = theme[themeMode];

  const hover = (e) => {
    e.target.style.boxShadow = `${currentTheme.boxShadow}`;
  }

  const unHover = (e) => {
    e.target.style.boxShadow = 'none'
  }

  return (
    <div>
      <div className='container-fluid sidebar-load' style={{background: `${currentTheme.background}`, color:`${currentTheme.color}`}}>
        <div className='sidebar-menu'>
          <Link to='/home' style={{textDecoration: 'none'}}>
            <div className='return'>&times;</div>
          </Link>
          <Link to='/home' style={{textDecoration: 'none'}}>
            <div className='home-sidebar' onMouseEnter={hover} onMouseLeave={unHover}>HOME</div>
          </Link>
          <Link to='/about' style={{textDecoration: 'none'}}>
            <div className='about-sidebar' onMouseEnter={hover} onMouseLeave={unHover}>ABOUT ME</div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Sidebar;