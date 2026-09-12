import { useState } from "react";
import "./Contact.css";


export const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

   const handleSubmit = (e) => {
  e.preventDefault();

  console.log(name);
  console.log(email);
  console.log(message);

  alert("Submitted!");
console.log("FORM SUBMITTED");

  setName("");
  setEmail("");
  setMessage("");
};
  return (
    <section className="contact" id="contact">
      <div className="contact-content">

        <p className="section-label">GET IN TOUCH</p>

        <h2 className="contact-title">Let's Work Together</h2>

        <p className="contact-description">
          Have a project or opportunity in mind? Feel free to get in touch.
        </p>
      <div className="contact-info">
  <div className="contact-item">
    <h3>Email</h3>
    <a href="mailto:hoor94945@gmail.com">
      hoor94945@gmail.com
    </a>
  </div>

  <div className="contact-item">
    <h3>GitHub</h3>
    <a
      href="https://github.com/hoor09"
      target="_blank"
      rel="noreferrer"
    >
      github.com/hoor09
    </a>
  </div>

  <div className="contact-item">
    <h3>LinkedIn</h3>
    <a
      href="https://www.linkedin.com/in/zainab-sarfraz"
      target="_blank"
      rel="noreferrer"
    >
      linkedin.com/in/zainab-sarfraz
    </a>
  </div>
</div>

      </div>
      <form
  className="contact-form"
  onSubmit={handleSubmit}
>

  <h3>Send Me a Message</h3>

  <input
  type="text"
  placeholder="Your Name"
  value={name}
  onChange={(e) => setName(e.target.value)}
/>

  <input
  type="email"
  placeholder="Your Email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>
  <textarea
  placeholder="Your Message"
  rows="5"
  value={message}
  onChange={(e) => setMessage(e.target.value)}
></textarea>

  <button type="submit">
    Send Message
  </button>

</form>
    </section>
  );
};

export default Contact;