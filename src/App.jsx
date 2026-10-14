import { useState } from "react";

const Icon = ({ name, size = 18 }) => {
  const paths = {
    arrow: (
      <>
        <path d="M7 17 17 7M7 7h10v10" />
      </>
    ),
    github: (
      <>
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
    sparkle: (
      <>
        <path d="m12 3 1.9 5.8L20 11l-6.1 2.2L12 19l-1.9-5.8L4 11l6.1-2.2L12 3Z" />
        <path d="m19 14 1.2 2.8L23 18l-2.8 1.2L19 22l-1.2-2.8L15 18l2.8-1.2L19 14Z" />
      </>
    ),
  };
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
};

const skills = [
  { name: "JavaScript", area: "Language" },
  { name: "TypeScript", area: "Language" },
  { name: "React", area: "Frontend" },
  { name: "HTML", area: "Frontend" },
  { name: "CSS", area: "Frontend" },
  { name: "Responsive web design", area: "Frontend" },
  { name: "Tailwind CSS", area: "Familiar" },
  { name: "Node.js", area: "Backend" },
  { name: "REST API endpoints", area: "Backend" },
  { name: "Frontend and backend development", area: "Full stack" },
  { name: "Git", area: "Workflow" },
  { name: "GitHub", area: "Workflow" },
  { name: "Cloudinary photo uploads", area: "Integration" },
  { name: "Team collaboration", area: "Workflow" },
];
const certifications = [
  {
    name: "Responsive Web Design",
    issuer: "freeCodeCamp",
    status: "Completed",
  },
  {
    name: "Full-stack Software Development",
    issuer: "TS Academy",
    status: "Completed",
  },
  /* {
    name: "JavaScript",
    issuer: "freeCodeCamp",
    status: "In progress",
  }, */
];
const contactLinks = [
  { label: "Email", href: "mailto:sequencewebdev@gmail.com" },
  { label: "WhatsApp", href: "https://wa.me/2348078878996" },
  { label: "GitHub", href: "https://github.com/Isreal-Jumbo" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/isreal-jumbo-5474433a2",
  },
  { label: "X", href: "https://x.com/oluwa_sequence" },
  { label: "Instagram", href: "https://instagram.com/isreal.jumbo" },
  { label: "TikTok", href: "https://www.tiktok.com/@sequence641" },
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/19wsA9KgAN/?mibextid=wwXIfr",
  },
];
const contributions = [
  "Integrated Cloudinary for photo uploads",
  "Worked on the post-by-ID endpoint and page",
  "Implemented like and unlike interactions",
  "Built comments and comment counts",
  "Created the profile page and post counts",
  "Implemented the backend delete-post endpoint",
];
const projects = [
  {
    name: "InventoryManagementSystem",
    repo: "InventoryManagementSystem",
    type: "GitHub repository",
  },
  {
    name: "student-crud-api",
    repo: "student-crud-api",
    type: "GitHub repository",
  },
  { name: "Todolist", repo: "Todolist", type: "GitHub repository" },
  {
    name: "Sequence HTML practice",
    repo: "sequence-HTML_practice-1",
    type: "GitHub repository",
  },
  {
    name: "Softgrowtech internship",
    repo: "softgrowtech-internship",
    type: "GitHub repository",
  },
  { name: "hello-world", repo: "hello-world", type: "GitHub repository" },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  return (
    <>
      <header className="topbar">
        <a className="brand" href="#home" aria-label="Sequence home">
          <span className="brand-mark">
            S<span>.</span>
          </span>
          <span className="brand-name">SEQUENCE</span>
        </a>
        <button
          className="menu-toggle"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
        </button>
        <nav
          className={menuOpen ? "nav open" : "nav"}
          aria-label="Main navigation"
        >
          <a href="#about" onClick={closeMenu}>
            About
          </a>
          <a href="#work" onClick={closeMenu}>
            Work
          </a>
          <a href="#skills" onClick={closeMenu}>
            Expertise
          </a>
          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </nav>
        <a
          className="nav-cta"
          href="https://github.com/Isreal-Jumbo"
          target="_blank"
          rel="noreferrer"
        >
          GitHub <Icon name="arrow" size={15} />
        </a>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="status-dot" /> FULL-STACK SOFTWARE DEVELOPER{" "}
              <span className="eyebrow-line" />
            </div>
            <h1>
              Ideas into
              <br />
              <span className="gradient-text">interfaces.</span>
              <br />
              Logic into <span className="serif-word">impact.</span>
            </h1>
            <p className="hero-lede">
              I'm Isreal Jumbo,  I build considered web experiences from the
              first component to the last endpoint.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">
                Explore my work <Icon name="arrow" size={16} />
              </a>
              <a className="text-link" href="#contact">
                Let's connect <span>↗</span>
              </a>
            </div>
            <div className="hero-meta">
              <span>FRONTEND + BACKEND</span>
              <i />
              <span>BUILDING FOR THE WEB</span>
            </div>
          </div>
          <div
            className="hero-art"
            aria-label="Abstract blue architectural illustration"
          >
            <div className="art-orbit orbit-one" />
            <div className="art-orbit orbit-two" />
            <div className="art-orbit orbit-three" />
            <div className="art-grid" />
            <div className="art-cube">
              <div className="cube-face cube-top" />
              <div className="cube-face cube-left" />
              <div className="cube-face cube-right" />
              <div className="cube-core" />
            </div>
            <span className="art-label art-label-top">
              FIG. 01 <span>—</span> BUILD WITH INTENT
            </span>
            <span className="art-label art-label-bottom">SEQUENCE / 2026</span>
            <div className="art-coordinate">
              06° 27' N<br />
              03° 23' E
            </div>
          </div>
          <a className="scroll-cue" href="#about">
            <span className="scroll-line" /> SCROLL TO EXPLORE
          </a>
          {/* <div className="hero-index">
            01 <span>/</span> 04
          </div> */}
        </section>

        <section className="intro-band">
          <div className="section-wrap intro-inner">
            <span className="section-kicker">A DEVELOPER IN SEQUENCE</span>
            <p>
              Good software is a sequence of thoughtful decisions.{" "}
              <span>I bring clarity to each one.</span>
            </p>
            <div className="intro-symbol">
              <Icon name="sparkle" size={23} />
            </div>
          </div>
        </section>

        <section className="about section-wrap section-pad" id="about">
          <div className="section-heading">
            <span className="section-kicker">ABOUT</span>
            <h2>
              Curious by nature.
              <br />
              <span className="muted-heading">Intentional by design.</span>
            </h2>
          </div>
          <div className="about-grid">
            <div className="about-statement">
              <span className="big-quote">“</span>
              <p>
                I work across the stack to turn useful ideas into clear,
                reliable web experiences.
              </p>
            </div>
            <div className="about-detail">
              <p>
                I completed the full-stack software development program at TS
                Academy, building a foundation across frontend and backend
                development with JavaScript, TypeScript, React and Node.js.
              </p>
              <p>
                My capstone was Mingle, a team-built social media mini app
                deployed publicly. I contributed across the product, from upload
                flows and API endpoints to profile and post experiences.
              </p>
              <div className="credential">
                <span className="credential-icon">
                  <Icon name="check" size={17} />
                </span>
                <span>
                  <strong>TS Academy</strong>
                  <small>
                    Full-stack Software Development · Certificate expected by
                    end of October 2026
                  </small>
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="work-section" id="work">
          <div className="section-wrap section-pad">
            <div className="section-heading work-heading">
              <span className="section-kicker">SELECTED WORK</span>
              <h2>
                Building for the
                <br />
                <span className="muted-heading">way people work.</span>
              </h2>
              <p>Team-built capstone work and selected code repositories.</p>
            </div>
            <article className="featured-project">
              <div className="project-visual">
                <div className="visual-topline">
                  <span>MINGLE / SOCIAL</span>
                  <span>TEAM CAPSTONE</span>
                </div>
                <div className="mingle-ui">
                  <div className="mock-sidebar">
                    <div className="mock-avatar">M</div>
                    <span className="mock-line short" />
                    <span className="mock-line" />
                    <span className="mock-line mid" />
                    <div className="mock-side-bottom" />
                  </div>
                  <div className="mock-feed">
                    <div className="mock-greeting">
                      Your circle, in motion<span>✳</span>
                    </div>
                    <div className="mock-post">
                      <div className="mock-post-head">
                        <span className="mock-user-avatar">AJ</span>
                        <span>
                          <b>Alex Johnson</b>
                          <small>2 hours ago</small>
                        </span>
                        <i>•••</i>
                      </div>
                      <div className="mock-post-image">
                        <div className="sun" />
                        <div className="hill hill-back" />
                        <div className="hill hill-front" />
                        <span>somewhere, slowly.</span>
                      </div>
                      <div className="mock-post-foot">
                        <span>♡ &nbsp; 24</span>
                        <span>◌ &nbsp; 8 comments</span>
                        <span>↗</span>
                      </div>
                    </div>
                    <div className="mock-compose">
                      <span>Share a thought...</span>
                      <span>＋</span>
                    </div>
                  </div>
                </div>
                <div className="visual-caption">
                  <span>Illustrative interface preview</span>
                  <span>VIEW LIVE ↗</span>
                </div>
              </div>
              <div className="project-content">
                <div className="project-overline">
                  <span className="project-number">01</span>
                  <span className="pill">FEATURED PROJECT</span>
                </div>
                <h3>
                  Mingle<span className="project-period">/</span>
                </h3>
                <p className="project-description">
                  A publicly deployed social media mini app built with a team. I
                  worked across frontend and backend, contributing to the
                  product's core social interactions and account experiences.
                </p>
                <div className="stack-tags">
                  <span>React</span>
                  <span>Node.js</span>
                  <span>JavaScript</span>
                  <span>Cloudinary</span>
                </div>
                <div className="contribution-title">MY CONTRIBUTIONS</div>
                <ul className="contributions">
                  {contributions.map((item) => (
                    <li key={item}>
                      <Icon name="check" size={15} />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="project-stats">
                  <div>
                    <strong>15+</strong>
                    <span>COMMITS PUSHED</span>
                  </div>
                  <div>
                    <strong>~5 / 17</strong>
                    <span>TEAM BRANCHES CONTRIBUTED TO</span>
                  </div>
                </div>
                <div className="project-links">
                  <a
                    href="https://social-media-miniapp.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View live app <Icon name="arrow" size={15} />
                  </a>
                  <a
                    href="https://github.com/Cisco-A/social-media-miniapp"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Team repository <Icon name="arrow" size={15} />
                  </a>
                </div>
              </div>
            </article>
            <div className="repo-heading">
              <div>
                <span className="section-kicker">MORE FROM GITHUB</span>
                <h3>Other repositories</h3>
              </div>
              <a
                className="text-link"
                href="https://github.com/Isreal-Jumbo"
                target="_blank"
                rel="noreferrer"
              >
                Browse all <Icon name="arrow" size={15} />
              </a>
            </div>
            <div className="repo-grid">
              {projects.map((project, i) => (
                <a
                  className="repo-card"
                  href={`https://github.com/Isreal-Jumbo/${project.repo}`}
                  target="_blank"
                  rel="noreferrer"
                  key={project.repo}
                >
                  <div className="repo-card-top">
                    <span className="repo-symbol">⌘</span>
                    <span className="repo-count">0{i + 1}</span>
                  </div>
                  <h4>{project.name}</h4>
                  <p>{project.type}</p>
                  <span className="repo-arrow">
                    <Icon name="arrow" size={16} />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section
          className="skills-section section-wrap section-pad"
          id="skills"
        >
          <div className="skills-copy">
            <span className="section-kicker">EXPERTISE</span>
            <h2>
              One stack.
              <br />
              <span className="muted-heading">Full perspective.</span>
            </h2>
            <p>
              From shaping an interface to wiring the systems behind it, I work
              across the parts that make a product feel complete.
            </p>
          </div>
          <div className="skills-list">
            {skills.map((skill) => (
              <div className="skill-row" key={skill.name}>
                <span className="skill-index">{skill.area}</span>
                <span>{skill.name}</span>
                <span className="skill-plus">+</span>
              </div>
            ))}
          </div>
        </section>

        <section
          className="credentials-section section-wrap section-pad"
          id="credentials"
        >
          <div className="section-heading">
            <span className="section-kicker">CERTIFICATIONS</span>
            <h2>Learning in motion.</h2>
          </div>
          <div className="certificate-grid">
            {certifications.map((certificate) => (
              <article className="certificate-card" key={certificate.name}>
                <span className="certificate-issuer">{certificate.issuer}</span>
                <h3>{certificate.name}</h3>
                <p>{certificate.status}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-wrap contact-inner">
            <span className="section-kicker">CONTACT</span>
            <div className="contact-content">
              <h2>
                Let’s make
                <br />
                <span className="gradient-text">something matter.</span>
              </h2>
              <p>
                Have a project in mind or want to talk through an opportunity?
                Choose the best way to reach me.
              </p>
              <div className="contact-links">
                {contactLinks.map((link) => (
                  <a
                    href={link.href}
                    key={link.label}
                    target={
                      link.href.startsWith("mailto:") ? undefined : "_blank"
                    }
                    rel={
                      link.href.startsWith("mailto:") ? undefined : "noreferrer"
                    }
                  >
                    {link.label} <Icon name="arrow" size={14} />
                  </a>
                ))}
              </div>
            </div>
            <div className="contact-mark">
              S<span>.</span>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer section-wrap">
        <a className="brand" href="#home">
          <span className="brand-mark">
            S<span>.</span>
          </span>
          <span className="brand-name">SEQUENCE</span>
        </a>
        <span>DESIGNED & BUILT BY ISREAL JUMBO</span>
        <a href="#home" className="back-top">
          BACK TO TOP ↑
        </a>
        <small>© 2026 SEQUENCE</small>
      </footer>
    </>
  );
}

export default App;
