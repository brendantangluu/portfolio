import {createContext, useState} from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
    const [isDarkMode, setIsDarkMode] = useState(true);

    const toggleTheme = () => {
      setIsDarkMode(prevMode => !prevMode);
    };

    return(
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
            {children}
        </ThemeContext.Provider>    
    );
};

export default ThemeContext;
