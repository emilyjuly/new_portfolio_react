import "./style.css";

// eslint-disable-next-line react/prop-types
const SkillCard = ({ imgUrl, imgAlt, title, color }) => {
    return (
        <div className="container-skill-card">
            <div className="logo-title">
                <img src={imgUrl} alt={imgAlt} />
                <h1 style={{ color: color }}>{title}</h1>
            </div>
            <div className="container-line">
                <div style={{ backgroundColor: color }} className="line" />
            </div>
        </div>
    );
};

export default SkillCard;
