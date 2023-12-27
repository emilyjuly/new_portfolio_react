import { IoMdSchool } from "react-icons/io";
import TimelineCard from "../TimelineCard";

import "./style.css";

const EducationTimeLine = () => {
    return (
        <div className="education-container">
            <div className="top-title-education">
                <IoMdSchool />
                <p>Vamos saber um pouco mais sobre minhas formações...</p>
            </div>
            <TimelineCard
                title={"Técnico em informática"}
                date={"2017 - 2019"}
                company={"Institudo Federal Fluminense"}
                description={
                    "Participação em um projeto extracurricular de robótica que foi selecionado para ser apresentado na Organização brasileira de robótica em João Pessoa - PB."
                }
            />
            <TimelineCard
                title={"Bacharelado em sistemas de informação"}
                date={"05/2022 - 12/2025"}
                company={"Universidade Cruzeiro do Sul"}
                description={
                    "Envolvimento em projetos extracurriculares, na área de tecnologia e na área acadêmica."
                }
            />
        </div>
    );
};

export default EducationTimeLine;
