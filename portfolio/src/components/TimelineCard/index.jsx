import { BiCodeAlt, BiTime } from "react-icons/bi";
import "./style.css";
import { FaRegBuilding } from "react-icons/fa";

const TimelineCard = ({ title, date, company, description, skills }) => {
    return (
        <div className="timeline-card">
            <div className="card-title">
                <h1>{title}</h1>
                <div className="date">
                    <BiTime />
                    <p>{date}</p>
                </div>
            </div>
            <p className="company">
                <FaRegBuilding />
                {company}
            </p>
            <p className="description">
                {description}
            </p>
            <p className="skills">
                {skills ? <span className="skills-title">
                    <BiCodeAlt />
                    Skills
                </span> : ''}
                {skills}
            </p>
        </div>

    );
};

export default TimelineCard;
