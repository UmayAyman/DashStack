import "@fortawesome/fontawesome-free/css/all.min.css";
import React from "react";
import { SlUser } from "react-icons/sl";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <div className="logo">
                    <span className="logo-blue">Dash</span>Stack
                </div>

                <button className="menu-btn">
                    <i className="fas fa-bars"></i>
                </button>

                <div className="search-box">
                {/* <i className="fas fa-search search-icon"></i> */}
                <input type="text" placeholder="🔍︎ Search" style={{borderRadius: '50px', padding: '7px 10px 7px 30px', border: '1px solid #ccc', marginTop: "20px"}}/>
                </div>
            </div>

            <div className="navbar-right">
                <div className="notification">
                    <i className="fas fa-bell"></i>
                    <span className="badge">6</span>
                </div>

                <div className="language">
                    <img
                        src="https://flagcdn.com/w40/gb.png"
                        alt="English"
                        className="flag"
                    />
                    <span className="lang-text">English</span>
                    <i className="fas fa-chevron-down small-icon"></i>
                </div>

                <div className="profile">
                    <img
                        src="https://i.pravatar.cc/40?img=65"
                        alt="Profile"
                        className="avatar"
                    />
                    <div className="profile-info">
                        <div className="name">Moni Roy</div>
                        <div className="role">Admin</div>
                    </div>
                    <i className="fas fa-chevron-down small-icon"></i>
                </div>
                <div className="user-icon">
                    <Link to="/User" className="user-icon">
                        <SlUser />
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
