import { Link, NavLink } from "react-router";
import logo from "@/assets/logo.png";

const Navbar = () => {
  return (
    <header className="container mx-auto flex lg:flex-row flex-col gap-8 lg:gap-0 justify-between items-center py-8">
      <Link to={"/"}>
        <div className="flex items-center gap-3">
          <img className="w-[50px] h-[50px]" src={logo} alt="" />
          <h3 className="text-[2rem] font-bold text-green-400">TurningPages</h3>
        </div>
      </Link>
      <nav>
        <ul className="flex gap-4">
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive
                  ? "text-[1rem] font-semibold text-green-400 underline"
                  : "text-[1rem] font-semibold"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/all-books"}
              className={({ isActive }) =>
                isActive
                  ? "text-[1rem] font-semibold text-green-400 underline"
                  : "text-[1rem] font-semibold"
              }
            >
              All Books
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/add-book"}
              className={({ isActive }) =>
                isActive
                  ? "text-[1rem] font-semibold text-green-400 underline"
                  : "text-[1rem] font-semibold"
              }
            >
              Add Book
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/borrow-summary"}
              className={({ isActive }) =>
                isActive
                  ? "text-[1rem] font-semibold text-green-400 underline"
                  : "text-[1rem] font-semibold"
              }
            >
              Borrow Summary
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
