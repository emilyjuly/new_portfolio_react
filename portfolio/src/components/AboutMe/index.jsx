import "./style.css";

const AboutMe = () => {
    return (
        <div className="container-about">
            <div className="text">
                <p className="welcome">Bem vindo ao meu portfólio</p>
                <h1 className="title-text">{`Olá, eu sou Emily July!`}</h1>
                <h3 className="subtitle-text">
                    Desenvolvedora{" "}
                    <span className="developer">full stack...</span>
                </h3>
                <p className="content-text">{`Vamos saber um pouco mais sobre mim?`}</p>
                <p className="apresentation-text">
                    {`Eu sou desenvolvedora full stack com experiência profissional utilizando Javascript e seus frameworks. Eu também sou técnica em informática e estou cursando minha graduação em sistemas de informação. Possuo experiência com diversas ferramentas usadas no ciclo de desenvolvimento de software e as soft skills necessárias para um bom desenvolvedor!`}
                </p>
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
