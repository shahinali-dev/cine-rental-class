// eaccha eikhane amra r ekta context theme context create kore niyechi, context create korar uddessho hocche eita amader puro app ar j kono jai gai proyojon hote pare amara onk jaigai dark mode light mode ar opor base kore content o update korte pari, so eijonno ei data j puro project a a vailable hoi ei jonno context create korechi akhn eita k provide korbo amra root level a
import { createContext } from "react";
const MovieContext = createContext("");

// eita dark mode light mode ar step 3 & amra jonno context create korle provide korte hoi ei jonno amra app.jsx a provide korechi
const ThemeContext = createContext("");

export { MovieContext, ThemeContext };
