import SkillCard from "./SkillCard";
import "./style.css";

const Skills = () => {
    return (
        <div className="container-skills">
            <div className="title-skills">
                <h1 className="skill-title">Skills</h1>
            </div>
            <div className="cards">
                <SkillCard
                    imgUrl={"/js.png"}
                    imgAlt={"logo javascript"}
                    title={"JavaScript"}
                    color={"#ffdf00"}
                />
                <SkillCard
                    imgUrl={"/ts.png"}
                    imgAlt={"logo typescript"}
                    title={"Typescript"}
                    color={"#3178C6"}
                />
                <SkillCard
                    imgUrl={"/nest.png"}
                    imgAlt={"logo nestjs"}
                    title={"Nestjs"}
                    color={"#da224a"}
                />
                <SkillCard
                    imgUrl={"/nodejs.png"}
                    imgAlt={"logo nodejs"}
                    title={"Nodejs"}
                    color={"#3B8739"}
                />
                <SkillCard
                    imgUrl={"/vuejs.png"}
                    imgAlt={"logo vuejs"}
                    title={"Vuejs"}
                    color={"#54ec93"}
                />
                <SkillCard
                    imgUrl={"/quasar.png"}
                    imgAlt={"logo quasar"}
                    title={"Quasar"}
                    color={"#1074d1"}
                />
            </div>
            <div className="cards">
                <SkillCard
                    imgUrl={"/reactjs.png"}
                    imgAlt={"logo reactjs"}
                    title={"Reactjs"}
                    color={"#38d1d6"}
                />
                <SkillCard
                    imgUrl={"/c-sharp.png"}
                    imgAlt={"logo c#"}
                    title={"C#"}
                    color={"#B14796"}
                />
                <SkillCard
                    imgUrl={"/postgresql.png"}
                    imgAlt={"logo postgresql"}
                    title={"PostgreSQL"}
                    color={"#336791"}
                />
                <SkillCard
                    imgUrl={"/git.png"}
                    imgAlt={"logo git"}
                    title={"GIT"}
                    color={"#f05a2d"}
                />
                <SkillCard
                    imgUrl={"/html.png"}
                    imgAlt={"logo html"}
                    title={"HTML"}
                    color={"#FF7816"}
                />
                <SkillCard
                    imgUrl={"/css-3.png"}
                    imgAlt={"logo css 3"}
                    title={"CSS"}
                    color={"#2196F3"}
                />
            </div>
        </div>
    );
};

export default Skills;
