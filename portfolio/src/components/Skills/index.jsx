import SkillCard from "./SkillCard";
import "./style.css";

const Skills = () => {
  return (
    <div className="container-skills">
      <div className="title-skills">
        <h1 className="skill-title">Skills</h1>
      </div>
      <div className="cards-skills">
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
      </div>
      <div className="cards-skills">
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
          imgUrl={"/git.png"}
          imgAlt={"logo git"}
          title={"GIT"}
          color={"#f05a2d"}
        />
        <SkillCard
          imgUrl={"/docker.png"}
          imgAlt={"logo docker"}
          title={"Docker"}
          color={"#006BC0"}
        />
        <SkillCard
          imgUrl={"/figma.png"}
          imgAlt={"logo figma"}
          title={"Figma"}
          color={"#B659FF"}
        />
      </div>
    </div>
  );
};

export default Skills;
