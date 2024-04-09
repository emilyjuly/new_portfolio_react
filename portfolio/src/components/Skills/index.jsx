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
          imgUrl={"certificates-icons/js.png"}
          imgAlt={"logo javascript"}
          title={"JavaScript"}
          color={"#ffdf00"}
        />
        <SkillCard
          imgUrl={"certificates-icons/ts.png"}
          imgAlt={"logo typescript"}
          title={"Typescript"}
          color={"#3178C6"}
        />
        <SkillCard
          imgUrl={"certificates-icons/nest.png"}
          imgAlt={"logo nestjs"}
          title={"Nestjs"}
          color={"#da224a"}
        />
        <SkillCard
          imgUrl={"certificates-icons/nodejs.png"}
          imgAlt={"logo nodejs"}
          title={"Nodejs"}
          color={"#3B8739"}
        />
        <SkillCard
          imgUrl={"certificates-icons/vuejs.png"}
          imgAlt={"logo vuejs"}
          title={"Vuejs"}
          color={"#54ec93"}
        />
      </div>
      <div className="cards-skills">
        <SkillCard
          imgUrl={"certificates-icons/reactjs.png"}
          imgAlt={"logo reactjs"}
          title={"Reactjs"}
          color={"#38d1d6"}
        />
        <SkillCard
          imgUrl={"certificates-icons/nuxt.svg"}
          imgAlt={"logo nuxt"}
          title={"Nuxt"}
          color={"#4aca4a"}
        />
        <SkillCard
          imgUrl={"certificates-icons/git.png"}
          imgAlt={"logo git"}
          title={"GIT"}
          color={"#f05a2d"}
        />
        <SkillCard
          imgUrl={"certificates-icons/storybook.png"}
          imgAlt={"logo storybook"}
          title={"Storybook"}
          color={"#c00086"}
        />
        <SkillCard
          imgUrl={"certificates-icons/figma.png"}
          imgAlt={"logo figma"}
          title={"Figma"}
          color={"#B659FF"}
        />
      </div>
    </div>
  );
};

export default Skills;
