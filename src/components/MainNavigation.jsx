import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

export default function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/Home"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Login"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Login
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
