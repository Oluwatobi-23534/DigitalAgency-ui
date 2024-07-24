import Logo from "../../assets/website/Logo.png";

const MenuLinks = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "About", link: "/#about" },
  { id: 3, name: "Services", link: "/#services" },
  { id: 4, name: "Portfolio", link: "/#portfolio" },
  { id: 5, name: "Blog", link: "/#blog" },
  { id: 6, name: "Contact", link: "/#contact" },
  { id: 8, name: "FAQ", link: "/#faq" },
];

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="container py-4 md:py-3">
          <div className="flex justify-between items-center">
            {/* logo */}
            <div>
              <a href="#" className="flex items-center gap-3">
                <img
                  src={Logo}
                  alt="Company Logo"
                  className="w-8 h-8 object-contain "
                />{" "}
                <span className="text-2xl sm:text-3xl font-semibold">
                  Digital Agency
                </span>
              </a>
            </div>
            {/* desktop Navlinks */}
            <div className="hidden md:block">
              <ul className="flex items-center gap-8">
                {MenuLinks.map(({ id, name, link }) => {
                  return (
                    <li key={id} className="cursor-pointer py-4">
                      <a
                        href="#"
                        className="text-lg  font-medium hover:text-primary py-2 hover:border-b-2 hover:border-primary transition-all duration-300"
                      >
                        {name}
                      </a>
                    </li>
                  );
                })}
                              <button className="btn-primary text-letter">Get in touch</button>
                              <DarkMode/>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
