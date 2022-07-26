import React from 'react';
import { themeModes } from '../hooks/theme';

const LightIcon = () => (<span>&#9788;</span>);
const DarkIcon = () => (<span>&#9789;</span>);

export default function ThemeButton({ mode, toggleTheme }) {
    return (
        <button className="ThemeButton" onClick={toggleTheme}>
            {mode === themeModes.LIGHT ?
               <LightIcon />
               :
               <DarkIcon /> 
            }
        </button>
    )
}
