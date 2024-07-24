/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { FaUserAlt } from "react-icons/fa";
import { MenuLinks } from "./Navbar";

const ResponsiveMenu = ({ showMenu }) => {
  return (
    <div
      className={`${
        showMenu ? "left-0" : "left-[-100%]"
      } fixed shadow-md bottom-0 top-0 w-[75%] transition-all pt-16 px-8 bg-letter duration-300 dark:bg-complex z-50 flex flex-col justify-between pb-4`}
    >
      <div className="card ">
        {/* User section */}
        <div className="flex items-center justify-start gap-3">
          <FaUserAlt size={50} />
          <div>
            <h1>Hello user</h1>
            <h1 className="text-sm text-slate">Premium User</h1>
          </div>
        </div>

        {/* Menu section */}
        <nav className="mt-12">
          <ul className="space-y-4 text-xl">
            {MenuLinks.map(({ id, name, link }) => {
              return (
                <li key={id}>
                  <a href={link} className="mb-5 inline-block">
                    {name}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

      </div>
        {/* footer section */}
        <div>
          <h1> Magic 💎 by {" "}
            <a href="https://github.com/Oluwatobi-23534/DigitalAgency-ui">
              Tobi Daniel
            </a>
          </h1>
        </div>
    </div>
  );
};

export default ResponsiveMenu;
