import "./style.css";

const AboutMe = () => {
    return (
        <div className="container-about">
            <div className="text">
                <p className="welcome">Welcome to my personal portfolio</p>
                <h1 className="title-text">{`Hi, I'm Emily July!`}</h1>
                <h3 className="subtitle-text">
                    Full stack <span className="developer">developer...</span>
                </h3>
                <p className="content-text">{`Let's get to know a little about me?`}</p>
            </div>
            <div className="container-profile">
                <div className="profile">
                    <img src="/profile-2.jpg" alt="July's picture" />
                </div>
            </div>
            <div className="shape-1" />
            <div className="shape-2" />
            <div className="shape-3" />
            <div className="shape-4" />

            <div className="shape-5" />
            <div className="shape-6" />
            <div className="shape-7" />
            <div className="shape-8" />
        </div>
    );
};

export default AboutMe;
