import AboutMe from "../../components/AboutMe";
import ExperiencesTimeLine from "../../components/ExperiencesTimeLine";
import EducationTimeLine from "../../components/EducationTimeLine";

import "./style.css";
const Home = () => {
    const numShapes = 16;

    const renderShapes = () => {
        const shapes = [];
        for (let i = 1; i <= numShapes; i++) {
            shapes.push(<div className={`shape shape-${i}`} key={i} />);
        }
        return shapes;
    };
    return (
        <div className="home-container">
            <AboutMe />
            <div className="timelines">
                <h1 className="title-timeline"> Mais sobre mim</h1>
                <div className="timeline-components">
                    <ExperiencesTimeLine />
                    <EducationTimeLine />
                </div>
            </div>
            {renderShapes()}
        </div>
    );
};

export default Home;
