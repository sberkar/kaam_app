import { NavLink } from "react-router-dom"
import Logo from "./logo.svg";
import "./css/nav.css";

function Navbar() {
    return <header className="navbar">
        <div className="logo">
            <img src={Logo} alt="kaam logo" />
        </div>
        <div className="navigation">
            <div className="nav-item">
                <NavLink to="/">Kaam</NavLink>
            </div>
            <div className="nav-item">
                <NavLink to="/account">Account</NavLink>
            </div>
        </div>
    </header>
}

export default Navbar;