import Moon from "../../assets/icons/moon.svg";
import Logo from "../../assets/logo.svg";
import Ring from "../../assets/ring.svg";
import ShoppingCartIcon from "../../assets/shopping-cart.svg";

export default function Navbar() {
  return (
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
          <a className="bg-primary/20 dark:bg-primary/7 rounded-lg backdrop-blur-[2px] p-1 inline-block">
            <img src={ShoppingCartIcon} width="24" height="24" alt="" />
            {
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">
                0{" "}
              </span>
            }
          </a>
        </li>
      </ul>
    </nav>
  );
}
