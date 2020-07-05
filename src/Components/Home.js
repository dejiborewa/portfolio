import React, { useContext } from 'react';
import { theme, ThemeContext } from './Theme';

function Home() {
    const themeMode = useContext(ThemeContext)[0];
    const currentTheme = theme[themeMode];
    return (
        <div className='home' style={{background: `${currentTheme.background}`, color:`${currentTheme.color}`}}>
            <Articles />
        </div>
    )
}

function Articles() {
    return <h1>I will be writing articles on things technology and JavaScript</h1>
}

export default Home; 