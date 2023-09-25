import { BsFillBriefcaseFill } from "react-icons/bs";
import TimelineCard from "../TimelineCard";

import "./style.css";

const ExperiencesTimeLine = () => {
    return (
        <div className="experiences-container">
            <div className="top-title">
                <BsFillBriefcaseFill />
                <p>Let's know a little about my professional experiences...</p>
            </div>
            <div className="cards">
                <TimelineCard
                    title={"Full stack developer"}
                    date={"Current job - Since Sep 2022"}
                    company={"Minsait"}
                    description={
                        "Development of automated applications and solutions, using Nest.js with TypeScript, Vue.js with Quasar, PostgreSQL database, and C# for RPA development. Experience with prototyping in Figma, code versioning with Git and GitLab, Scrum framework with sprints lasting about 2 weeks."
                    }
                    skills={
                        "Nestjs, Typescript, Vue.js, Quasar, Postgresql, C#, RPA, Figma, Git, Gitlab, Scrum"
                    }
                />
                <TimelineCard
                    title={"Technical Support Level 2 "}
                    date={"03/2022 - 09/2022"}
                    company={"Minsait"}
                    description={
                        "Provided technical support under the contract with Petrobras client, advanced-level assistance, resolution of support tickets, and escalation of demands, goal-driven and metrics-oriented support, assistance with Microsoft Windows, Office 365 and 2016, Printers and print queues, servers, and internal platforms within the Petrobras company environment."
                    }
                    skills={
                        "Teamwork, advanced-level assistance, escalation of demands, Microsoft Windows, Office 365 and 2016, Printers, Servers."
                    }
                />
                <TimelineCard
                    title={"Technical Support Level 1"}
                    date={"10/2020 - 02/2022"}
                    company={"Minsait"}
                    description={
                        "Provided receptive-level technical support, focused on opening support tickets and escalating demands, service provided to Petrobras client, goal-driven and contract-related metrics-oriented assistance. Experience as the focal point of the customer service operation and as a back-end support for team supervision."
                    }
                    skills={
                        "Teamwork, customer support, receptive-level technical support, escalation of demands, Microsoft Windows, Office 365 and 2016."
                    }
                /></div>
        </div>
    );
};

export default ExperiencesTimeLine;
