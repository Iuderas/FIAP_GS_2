import "../../scss/header.scss";
import { useState } from "react";
import data from "../../mock/db.json";

export const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <nav className="menu">
        <div className="logo">
          <h1>CareBot</h1>
        </div>

        <div className="menu-lista">
          <ul>
            <li>
              <a href="#userLog">{data.profiles[0].user}</a>
            </li>
            <li>
              <a href="#userEmail">{data.profiles[0].email}</a>
            </li>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#section3">Serviços</a>
            </li>
            <li>
              <a href="/">Logout</a>
            </li>
          </ul>
        </div>

        <div className="mobile-menu-icon">
          <button id="btn" onClick={() => setOpen(!open)}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </button>
        </div>
      </nav>

      <div className={open ? "open" : "mobile-menu"}>
        <ul>
          <li>
            <a href="#userLog">{data.profiles[0].user}</a>
          </li>
          <li>
            <a href="#userEmail">{data.profiles[0].email}</a>
          </li>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#section3">Serviços</a>
          </li>
          <li>
            <a href="/">Logout</a>
          </li>
        </ul>
      </div>
    </header>
  );
};
