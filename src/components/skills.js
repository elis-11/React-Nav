import "../scss/ skills.scss";

function Skills(props) {
  return (
    <div className="skills-component">
      <p>{props.skillsCardEl.title}</p>
      <p>{props.skillsCardEl.description}</p>
      <p>{props.skillsCardEl.listTitle}</p>
      <div>
        {props.skillsCardEl.list.map((listEl) => {
          return <p>{listEl}</p>;
        })}
      </div>
      <div>
        <p>{props.skillsCardEl.toolsTitle}</p>
        {props.skillsCardEl.tools.map((listEl) => {
          return <p>{toolsEl}</p>;
        })}
      </div>
    </div>
  );
}

export default Skills;
