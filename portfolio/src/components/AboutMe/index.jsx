import "./style.css";

const AboutMe = () => {
    return (
        <div className="container-about">
            <div className="text">
                <p className="welcome">Bem vindo ao meu portfólio</p>
                <h1 className="title-text">{`Olá, eu sou Emily!`}</h1>
                <h3 className="subtitle-text">
                    Desenvolvedora{" "}
                    <span className="developer">frontend...</span>
                </h3>
                <p className="content-text">{`Vamos saber um pouco mais sobre mim?`}</p>
                <p className="apresentation-text">
                    {`Eu sou desenvolvedora frontend, utilizando o framework Vuejs, realizando a produção de páginas web, seguindo protótipos do Figma e priorizando a experiência do usuário.`}
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
