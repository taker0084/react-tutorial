import React, { useState } from "react";
import { ThemeContext, THEMES } from "./contexts/ThemeContext";
import { withLoading } from "./hoc/withLoading";
import App from "./App";
import { getLanguages } from "./const/languages";

const AppComponent = withLoading(App, getLanguages);

export const AppContainer =()=>{
    const [theme,settheme] = useState(THEMES.dark);
    
    const toggleTheme=()=>{
        const nextTheme = (theme === THEMES.dark) ? THEMES.light: THEMES.dark;
        settheme(nextTheme);
    }
    return(
        <ThemeContext.Provider value={[theme, toggleTheme]}>
            <AppComponent />
        </ThemeContext.Provider>
    )
}