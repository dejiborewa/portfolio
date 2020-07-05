import React, { useContext } from 'react';
import { theme, ThemeContext } from './Theme';

function About() {
  const themeMode = useContext(ThemeContext)[0];
  const currentTheme = theme[themeMode];
    return (
      <div className='about' style={{background: `${currentTheme.background}`, color:`${currentTheme.color}`}}>
        <h1>I'm Ayodeji, I am a frontend developer.</h1>
      </div>
    )
}

export default About;