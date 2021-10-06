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
      <div className="skills-card-wrapper">
        {skillsArray.map((skillsCardEl)=>{
          return <Skills killsCardEl={skillsCardEl} />
        })}
      </div>
    </div>
  )
}

export default About;
