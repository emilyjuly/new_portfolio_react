import AboutMe from "../../components/AboutMe";
import ExperiencesTimeLine from "../../components/ExperiencesTimeLine";
import EducationTimeLine from "../../components/EducationTimeLine"

import "./style.css";
const Home = () => {
    return (
        <div>
            <AboutMe />
            <div className="timelines">
                <h1 className="title-timeline"> More about me</h1>
                <div className="timeline-components">
                    <ExperiencesTimeLine />
                    <EducationTimeLine />
                </div>
            </div>
        </div>
    );
};

export default Home;
