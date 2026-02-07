import { useContext, useState } from "react";
import Moon from "../../assets/icons/moon.svg";
import Logo from "../../assets/logo.svg";
import Ring from "../../assets/ring.svg";
import ShoppingCartIcon from "../../assets/shopping-cart.svg";
import { MovieContext } from "../../context";
import Cart from "../cart/Cart";

export default function Navbar() {
  // akhn amra prothome amader cart component ta create kore nebo
  // akhn kintu amra properly data k cart a dekhate partechi tai na? ok then next step hocche state k reducer a convert kora & dark mood light mood add kora eita amra agamikal korbo ingsha Allah apni etot uku practice korte thaken r ami ei code ta github a push kore dicchi
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cartData } = useContext(MovieContext);

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
              className="bg-primary/20 dark:bg-primary/7 rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={Moon} width="24" height="24" alt="" />
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
                  {cartData.length}
                </span>
              }
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
