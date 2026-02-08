import { useContext, useState } from "react";
import Moon from "../../assets/icons/moon.svg";
import Sun from "../../assets/icons/sun.svg";
import Logo from "../../assets/logo.svg";
import Ring from "../../assets/ring.svg";
import ShoppingCartIcon from "../../assets/shopping-cart.svg";
import { MovieContext, ThemeContext } from "../../context";
import Cart from "../cart/Cart";

export default function Navbar() {
  // akhn fact hocche navbar a ache amader sun & moon icon so toggle logic & change logic ta amra eikhanei korbo
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { state } = useContext(MovieContext);
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  // theme toggle logic
  // r context api ta amra create korechi jeno amra j kono jaiga theke ei dark mode ar current position k get korte pari & sei onujayi decision make kore design korte pari, ami ki bujhate parlam? akhn amra tobe useReducer implement korbo, amake apni janiyechile j apni useReducer ar jei 4 ta step oigulo practice korechen nije
  const toggleTheme = () => {
    // toggle logic
    const newMode = !darkMode;
    // change logic
    setDarkMode(newMode);

    // DOM এ data-theme attribute সেট করো
    // eitar maddhome amra index.html a thaka html tag ar data theme attribute ar value change kortechi
    document.documentElement.setAttribute(
      "data-theme",
      newMode ? "dark" : "light",
    );
  };

  return (
    <>
      {isCartOpen && <Cart onClose={() => setIsCartOpen(false)} />}

      <nav className="container flex items-center justify-between space-x-10 py-6">
        <a href="index.html">
          <img src={Logo} width="139" height="26" alt="" />
        </a>

        <ul className="flex items-center space-x-5">
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/7 rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={Ring} width="24" height="24" alt="" />
            </a>
          </li>
          <li>
            <a
              onClick={toggleTheme}
              className="bg-primary/20 dark:bg-primary/7 rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              {
                <img
                  src={darkMode ? Sun : Moon}
                  width="24"
                  height="24"
                  alt=""
                />
              }
            </a>
          </li>
          <li>
            <a
              onClick={() => setIsCartOpen(!isCartOpen)}
              className="bg-primary/20 dark:bg-primary/7 rounded-lg backdrop-blur-[2px] p-1 inline-block"
            >
              <img src={ShoppingCartIcon} width="24" height="24" alt="" />
              {
                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">
                  {state.cartData.length}
                </span>
              }
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
