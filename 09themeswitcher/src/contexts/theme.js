import { createContext,useContext } from "react";

// here you can define a variable and method inside a object which is in context
export const ThemeContext = createContext({
    themeMode:"light",
    darkTheme : () =>{},
    lightTheme: () => {},
})



export const ThemeProvider = ThemeContext.Provider

// its a custom hook
export default function useTheme(){
    return useContext(ThemeContext)
}