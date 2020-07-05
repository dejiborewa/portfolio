import { createContext } from "react";

const gray = '#E7E7E7';
const  black = '#000';

const theme = {
    dark: {
        background: black,
        color: gray,
        boxShadow: 'inset 0 -0.4em #ff0000'
    },

    light: {
        background: gray,
        color: black,
        boxShadow: 'inset 0 -0.4em #00a6ff'
    }
}

const ThemeContext = createContext(['light', () => {}]) 

export {theme, ThemeContext};

