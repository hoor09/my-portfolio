import "./About.css";

export const About = () => {
  return (
    <section className="about" id="about">
        <div className="about-content">
            <p className="section-label">GET TO KNOW ME</p>
<h2 className="about-tittle">About Me</h2>

<p className="about-description">I'm a passionate frontend developer focused on creating clean, responsive, and user-friendly web experiences. I enjoy turning ideas into interactive interfaces and continuously improving my skills with modern web technologies.</p>

<p className="about-description">Currently, I'm expanding my knowledge of React, JavaScript, and the MERN stack while building practical projects that strengthen my problem-solving and development skills.</p>

<div className="about-info">
    <div className="info-item">
        <span className="info-accent"></span>
        <h3>Frontend Development</h3>
        <p className="info-description">Building responsive and interactive interfaces with modern frontend technologies.</p>
        </div>

         <div className="info-item">
            <span className="info-accent"></span>
        <h3>React & JavaScript</h3>
        <p className="info-description">Developing interactive and dynamic web applications with React and JavaScript.</p>
    </div>
</div>
        </div>
    </section>
  )
}
export default About;
