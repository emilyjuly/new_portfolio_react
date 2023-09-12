import { BsLinkedin, BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";

import "./style.css";

const Header = () => {
    return (
        <div className="">
            <div className="header">
                <div className="logo">
                    <img src="/favicon.png" alt="" />
                    <p>Full Stack Developer</p>
                </div>
                <div className="header-menu">
                    <Link to={"/projects"} className="link">
                        <p >Projetos</p>
                    </Link>
                    <Link to={"/certificates"} className="link">
                        <p >Certificados</p>
                    </Link>
                    <Link to={"/courses"} className="link">
                        <p >Cursos</p>
                    </Link>
                </div>
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
    );
};

export default Header;
