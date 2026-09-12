import "./Hero.css"

export const Hero = () => {
  return (
    <section className="hero" id="home">
        <div className="hero-content">
            <p className="hero-intro">Hi, I am Zainab</p>
            <h1 className="hero-tittle">Frontend Developer</h1>
            <p className="hero-description">I build modern, responsive, and user-friendly web experiences with React and modern frontend technologies.</p>
            <div className="hero-buttons">
                <a className="primary-btn" href="#projects">View projects</a>
                <a className="secondary-btn" href="#contact">Contact Me</a>
            </div>
        </div>

    </section>
  )
}
export default Hero;