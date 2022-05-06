import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <section id="navbar">
      <nav>
        <ul>
          <li>
            <Link to="/">Vaccination Schedule System</Link>
          </li>
          <li>
            <Link to="/add-patient">Add Patient</Link>
          </li>
          <li>
            <Link to="/AdminVaccinations">Administer Vaccination of Patient</Link>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Navbar;
