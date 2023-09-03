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
                    <a className="menu-link" href="#">
                        Projetos
                    </a>
                    <a className="menu-link" href="#">
                        Certificados
                    </a>
                    <a className="menu-link" href="#">
                        Cursos
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Header;
