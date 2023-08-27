import "./Navbar.css";

import logo from '../../../assets/images/png/logo.png';

export default function Navbar() {
  return (
    <div className="navbar-container bg-white">
      <div className="navbar max-w-[1200px] mx-auto ">
        <div className="navbar-start mt-4">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <div className="mx-auto p-4">
                <img src={logo} alt="" className="w-2/3 " />
              </div>
              <li>
                <a className="font-semibold text-[1rem]">Home</a>
              </li>
              <li>
                <a className="font-semibold text-[1rem]">Page</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a className="font-semibold text-[1rem]">Shop</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a className="font-semibold text-[1rem]">Blog</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a className="font-semibold text-[1rem]">Contact Us</a>
              </li>
            </ul>
            <img src={logo} alt="" className="hidden md:block" />
          </div>
        </div>
        <div className="navbar-center hidden lg:flex mt-4">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a className="font-bold text-[1rem] text-[#9EB002]">Home</a>
            </li>
            <li tabIndex={0}>
              <details>
                <summary className="font-semibold text-[1rem]">Page</summary>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li tabIndex={0}>
              <details>
                <summary className="font-semibold text-[1rem]">Shop</summary>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li tabIndex={0}>
              <details>
                <summary className="font-semibold text-[1rem]">Blog</summary>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a className="font-semibold text-[1rem]">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end mt-4">
          <h3 className="grid grid-cols-4">
            <i className="mx-2 text-xl shadow-md p-2 fa-solid fa-cart-shopping"></i>
            <i className="mx-2 text-xl shadow-md p-2 fa-regular fa-heart"></i>
            <i className="mx-2 text-xl shadow-md p-2 fa-solid fa-magnifying-glass"></i>
            <i className="mx-2 text-xl shadow-md p-2 fa-regular fa-user"></i>
          </h3>
        </div>
      </div>
    </div>
  );
}
