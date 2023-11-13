import "./style.css";

const AboutMe = () => {
    return (
        <div className="container-about">
            <div className="text">
                <p className="welcome">Bem vindo ao meu portfólio</p>
                <h1 className="title-text">{`Olá, eu sou Emily!`}</h1>
                <h3 className="subtitle-text">
                    Desenvolvedora{" "}
                    <span className="developer">full stack...</span>
                </h3>
                <p className="content-text">{`Vamos saber um pouco mais sobre mim?`}</p>
            </div>
            <div className="container-profile">
                <div className="profile">
                    <img src="/profile-2.jpg" alt="July's picture" />
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
