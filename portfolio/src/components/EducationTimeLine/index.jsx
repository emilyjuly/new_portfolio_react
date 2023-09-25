import { IoMdSchool } from "react-icons/io";
import TimelineCard from "../TimelineCard";

import "./style.css";


const EducationTimeLine = () => {
    return (
        <div className="education-container">
            <div className="top-title-education">
                <IoMdSchool />
                <p>Let's know a little about my backgrounds...</p>
            </div>
            <TimelineCard
                title={"Computer Technician"}
                date={"2017 - 2019"}
                company={"Federal Institute of Fluminense"}
                description={
                    "Participation in an extracurricular project in the field of robotics that was selected to be presented at the Robotics Exhibition, organized by the Brazilian Robotics Organization (OBR) in João Pessoa - PB."
                }
            />
            <TimelineCard
                title={"Bachelor of Information Systems"}
                date={"05/2022 - 12/2025"}
                company={"Cruzeiro do Sul University"}
                description={
                    "Involvement in extracurricular projects and events related to the technology field and academic area."
                }
            />
        </div>
    );
};

export default EducationTimeLine;
