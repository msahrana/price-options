import {useState} from "react";
import Link from "../Link/Link";
import {IoMenu, IoClose} from "react-icons/io5";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const routes = [
    {id: 1, path: "/", name: "Home"},
    {id: 2, path: "/about", name: "About"},
    {id: 3, path: "/services", name: "Services"},
    {id: 4, path: "/contact", name: "Contact"},
    {id: 5, path: "*", name: "NotFound"},
  ];

  return (
    <nav className="text-black bg-yellow-200 p-6">
      <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
        {open === true ? <IoClose /> : <IoMenu />}
      </div>
      <ul
        className={`md:flex absolute md:static bg-yellow-200 pl-5 ${
          open ? "top-32" : "-top-60"
        }`}
      >
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
