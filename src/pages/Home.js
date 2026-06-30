import "./Home.css";
import { useState } from "react";
import weconnectDashboard from "../assets/weconnect-dashboard.png";

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="portfolio">
      {/* NAVBAR */}
      <nav className="navbar">
        <h2 className="logo">Yusuf Mubarak</h2>

        <button
          className="navToggle"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </button>

        <ul className={`navLinks ${menuOpen ? "open" : ""}`}>
          <li>
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          </li>

          <li>
            <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
          </li>

          <li>
            <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
          </li>

          <li>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          </li>
        </ul>
      </nav>

      {/* HERO */}
      <section id="about" className="hero">
        <div className="heroContent">
          <p className="intro">👋 Hello, I'm</p>

          <h1>Yusuf Mubarak</h1>

          <h3>Frontend Developer Building Modern Web Applications</h3>

          <p className="status">
            🟢 Open to Remote Frontend Opportunities
            </p>

          <p className="description">
            Frontend Developer specializing in React,
            JavaScript, responsive web applications,
            dashboard systems, and modern user interfaces.
            <br />
            <br />
            I have experience building production-ready applications
            including WeConnect and an Enterprise Document Management
            System (EDMS), delivering clean interfaces and scalable
            user experiences.
          </p>

          <div className="heroButtons">
            <a href="#projects" className="primaryBtn">
              View My Work
            </a>

            <a href="#contact"
            className="secondaryBtn"
            >
            Let's Talk
            </a>
          </div>
        </div>

        <div className="heroImage">
          <img
            src="/profile.jpg"
            alt="Yusuf Mubarak"
          />
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="skills">
        <h2>Tech Stack</h2>

        <div className="skillsGrid">
          <div>React</div>
          <div>JavaScript</div>
          <div>HTML5</div>
          <div>CSS3</div>
          <div>Git</div>
          <div>GitHub</div>
          <div>Responsive Design</div>
          <div>CSS Modules</div>
          <div>UI Development</div>
          <div>Component Architecture</div>
        </div>
      </section>

      {/* EDUCATION */}
<section id="education" className="education">
  <h2>Education & Background</h2>

  <div className="educationCard">
    <h3>Ambrose Alli University, Ekpoma</h3>

    <p>
      Bachelor of Science (B.Sc.) in Business Administration
    </p>

    <p>
      Expected Graduation: 2026
    </p>

    <p>
      While pursuing my degree in Business Administration,
      I developed a strong passion for software development
      and have dedicated my time to learning modern frontend
      technologies, building real-world applications, and
      continuously improving my skills as a React Developer.
    </p>
  </div>
</section>

<section className="experience">
  <h2>Experience</h2>

  <div className="experienceCard">
    <h3>Frontend Developer</h3>

    <p>
      Built modern React applications including
      WeConnect and an Enterprise Document
      Management System (EDMS).
    </p>

    <ul>
      <li>Developed responsive interfaces</li>
      <li>Built reusable React component </li>
      <li>Implemented document workflows</li>
      <li>Built dashboard systems</li>
    </ul>
  </div>
</section>

{/* STATS */}
<section className="stats">
  <h2>Quick Overview</h2>

  <div className="statsGrid">
    <div className="statCard">
      <h3>2+</h3>
      <p>Production Projects</p>
    </div>

    <div className="statCard">
      <h3>10+</h3>
      <p>Frontend Technologies</p>
    </div>

    <div className="statCard">
      <h3>100%</h3>
      <p>Responsive Design Focus</p>
    </div>

    <div className="statCard">
      <h3>2026</h3>
      <p>Expected Graduation</p>
    </div>
  </div>
</section>

      {/* PROJECTS */}
      <section id="projects" className="projects">
        <h2>Featured Projects</h2>

        <div className="projectGrid">

          {/* WeConnect */}
          <div className="projectCard">
            <img
                src={weconnectDashboard}
                alt="WeConnect Dashboard"
                className="projectImage"
            />

            <h3>WeConnect</h3>

            <p>
                Professional networking platform featuring dashboard analytics,
                profile management, connections tracking, messaging interfaces,
                notifications, and responsive layouts.
            </p>

            <span>
                React • JavaScript • CSS Modules • Responsive Design
            </span>

            <div className="projectBtns">
                <a href="#">Live Demo</a>

                <a
                    href="https://github.com/Hopeyemi1"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    GitHub
                </a>
                </div>
            </div>
          {/* EDMS */}
          <div className="projectCard">
            <h3>
              Enterprise Document Management System
            </h3>

            <p>
              Professional document management platform
              developed for an organization.
              Features include document previews,
              approval workflows, download management,
              dashboard interfaces, user management,
              and API integrations.
            </p>

            <span>
              React • CSS Modules • REST APIs
            </span>

            <div className="projectBtns">
              <button className="privateBtn">
                Confidential Client Project
              </button>
            </div>
          </div>

          {/* Portfolio */}
          <div className="projectCard">
            <h3>Developer Portfolio</h3>

            <p>
              Personal portfolio showcasing projects,
              technical skills, experience, and
              contact information for recruiters
              and clients.
            </p>

            <span>
              React • CSS • Responsive Design
            </span>

            <div className="projectBtns">
              <a href="#about">
                Current Project
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact">
        <h2>Let's Connect</h2>

        <p>
          I'm currently open to remote frontend
          development opportunities, freelance
          projects and collaborations.
        </p>

        <div className="contactLinks">
          <a href="mailto:ym32811@gmail.com">
            📧 Email Me
          </a>

          <a
            href="https://wa.me/2348149950618"
            target="_blank"
            rel="noreferrer"
          >
            💬 WhatsApp
          </a>

          <a
            href="https://github.com/Hopeyemi1"
            target="_blank"
            rel="noreferrer"
          >
            💻 GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/yusuf-mubarak-807b873b3/"
            target="_blank"
            rel="noreferrer"
          >
            🔗 LinkedIn
          </a>
        </div>
      </section>

     <footer className="footer">
        <p>
            © 2026 Yusuf Mubarak. Built with React.
        </p>
        </footer>
    </div>
  );
}

export default Home;