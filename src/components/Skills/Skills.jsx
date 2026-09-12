import "./Skills.css";

export const Skills = () => {
  const skills=["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Git", "GitHub"];
  return (
    <section className="skills" id="skills">

      <div className="skills-content">
        

        <h2 className="skills-title">My Skills</h2>
        <p className="skills-description">
  Technologies and tools I use to build modern web experiences.
</p>

        <div className="skills-list">

          {skills.map((skill)=>(
            <div className="skill-item" key={skill}>
              {skill}
            </div>
          ))
          }

        </div>
      </div>
    </section>
  )
}
export default Skills;