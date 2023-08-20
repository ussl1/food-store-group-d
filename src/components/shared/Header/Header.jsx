import "./Header.css";
import Navbar from "./Navbar";
export default function Header() {
  return (
    <>
      <div className="header-container bg-[#1E1B38] grid sm:grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex max-w-[1200px] mx-auto ">
          <div className="mr-4 flex justify-center items-center">
            <div>
              <i className="fa-regular fa-envelope text-[#367E17]"></i>
            </div>
            <div>
              <span className="ml-2 font-medium text-white">
                info12@example.com
              </span>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div>
              <i className="fa-solid fa-location-dot text-[#367E17]"></i>
            </div>

            <div>
              <span className="ml-2 font-medium text-white text-sm">
                California,TX 70240
              </span>
            </div>
          </div>
        </div>
        <div className="hidden md:block max-w-[1200px] mx-auto">
          <div className="flex my-3 max-w-[1200px] mx-auto">
            <div className="flex">
              <i className="text-white font-semibold mx-2 text-lg fa-brands fa-facebook-f"></i>
              <i className="text-white font-semibold mx-2 text-lg fa-brands fa-twitter"></i>
              <i className="text-white font-semibold mx-2 text-lg fa-brands fa-linkedin-in"></i>
              <i className="text-white font-semibold mx-2 text-lg fa-brands fa-youtube"></i>
            </div>
            <div className="dropdown dropdown-hover">
              <button className="text-white font-md ml-6 text-lg">
                <label tabIndex={0} className="">
                  English
                </label>
                <span>
                  <i className="fa-solid fa-arrow-down text-[#367E17] ml-2"></i>
                </span>
              </button>

              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100  w-44"
              >
                <li>
                  <a className=" font-medium text-base">Arabic</a>
                </li>
                <li>
                  <a className=" font-medium text-base">French</a>
                </li>
                <li>
                  <a className=" font-medium text-base">Hindi</a>
                </li>
                <li>
                  <a className=" font-medium text-base">English</a>
                </li>
                <li>
                  <a className=" font-medium text-base">Chinese</a>
                </li>
                <li>
                  <a className=" font-medium text-base">Bengali</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Navbar />
    </>
  );
}
