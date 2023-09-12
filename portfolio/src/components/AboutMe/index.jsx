import "./style.css";

const AboutMe = () => {
    return (

        <div className="container-about">
            <div className="shape-1"></div>
            <div className="shape-2"></div>
            <div className="text">
                <p className="welcome">Welcome to my personal portfolio</p>
                <h1 className="title-text">{`Hi, I'm Emily July!`}</h1>
                <h3 className="subtitle-text">
                    Full stack <span className="developer">developer...</span>
                </h3>
                <p className="content-text">
                    {`Let's get to know a little about me?`}
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
