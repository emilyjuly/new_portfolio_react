import { BsLinkedin, BsGithub } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";

import "./style.css";

const Header = () => {
    return (
        <div className="">
            <div className="header">
                <Link to={"/"} className="link">
                    <div className="logo">
                        <img src="/favicon.png" alt="" />
                        <p>July's Portfolio</p>
                    </div>
                </Link>
                <div className="header-menu">
                    <NavLink to={"/"} className={nav => (nav.isActive ? "active-link" : "link")} >
                        <p >About me</p>
                    </NavLink>
                    <NavLink to={"/certificates"} className={nav => (nav.isActive ? "active-link" : "link")} >
                        <p >Skills & Certifications</p>
                    </NavLink>
                    <NavLink to={"/projects"} className={nav => (nav.isActive ? "active-link" : "link")} >
                        <p >Projects</p>
                    </NavLink>
                    <NavLink to={"/contact-me"} className={nav => (nav.isActive ? "active-link" : "link")} >
                        <p >Contact Me</p>
                    </NavLink>
                    <div className="icons">
                        <a href="https://www.linkedin.com/in/emily-july/" target="_blank">
                            <BsLinkedin />
                        </a>
                        <a href="https://github.com/emilyjuly" target="_blank">
                            <BsGithub />
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Header;
