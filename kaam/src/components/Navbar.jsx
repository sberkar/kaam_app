import { NavLink } from "react-router-dom"
import Logo from "./logo.svg";
import "./css/nav.css";
import { useAuth } from "../contexts/auth-context";

function Navbar() {
    const { currentUser } = useAuth()
    return <header className="navbar">
        <div className="logo">
            <img src={Logo} alt="kaam logo" />
        </div>
        <div className="navigation">
            <div className="nav-item">
                <NavLink to="/">Kaam</NavLink>
            </div>
            <div className="nav-item">
                {!currentUser?<NavLink to="/login">Login</NavLink>
                :<NavLink to={"/account"} >Account</NavLink>}
            </div>
        </div>
    </header>
}

export default Navbar;