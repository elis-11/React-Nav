import "../scss/ about.scss";
import Skills from "./skills";

const SkillsArray = [
  {
    icon: "",
    title: "Web Developer",
    descriptionText: "",
    programmingLanguages: ["", "", ""],
    tools: ["", "", ""],
  },
  {
    icon: "",
    title: "",
    descriptionText: "",
    programmingLanguages: ["", "", ""],
    tools: ["", "", ""],
  },
  {
    icon: "",
    title: "",
    descriptionText: "",
    programmingLanguages: ["", "", ""],
    tools: ["", "", ""],
  },
];

function About() {
  return (
    <div className="about-component">
      <h2>About</h2>
      <h3>hi, I'm Eliza a web developer.</h3>
      <h3>Nice to meet you</h3>
      <div>
        <p></p>
        <p></p>
        <p></p>
      </div>
      <div>
        {skillsArray.map}
        <Skills title="Front End" />
        <Skills title="Desugn" />
        <Skills title="Marketing" />
      </div>
    </div>
  );
}

export default About;
