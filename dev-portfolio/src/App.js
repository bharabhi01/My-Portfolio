import React, { useState, useEffect, createContext } from 'react';

export const ThemeContext = createContext();

const ThemeToggle = () => {
  const { isDark, toggleTheme } = React.useContext(ThemeContext);

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      {isDark ?
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          color="white"
        >
          <circle cx="12" cy="12" r="4"></circle>
          <path d="M12 2v2"></path>
          <path d="M12 20v2"></path>
          <path d="m4.93 4.93 1.41 1.41"></path>
          <path d="m17.66 17.66 1.41 1.41"></path>
          <path d="M2 12h2"></path>
          <path d="M20 12h2"></path>
          <path d="m6.34 17.66-1.41 1.41"></path>
          <path d="m19.07 4.93-1.41 1.41"></path>
        </svg>
        :
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9z"></path>
        </svg>
      }
    </button>
  );
};

const SocialLinks = () => (
  <div className="social-links">
    <a href="https://github.com/bharabhi01" target="_blank" rel="noopener noreferrer">GitHub</a>
    <span className="separator">/</span>
    <a href="https://www.linkedin.com/in/bhardwajabhi/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
    <span className="separator">/</span>
    <a href="mailto:bhardwajabhi2701@gmail.com">Gmail</a>
    <span className="separator">/</span>
    <a href="https://medium.com/@bhardwajabhi2701" target="_blank" rel="noopener noreferrer">Medium</a>
    <span className="separator">/</span>
    <a href="https://drive.google.com/file/d/1doVlNrI2Q1xvsDsbctGxo24cvfTO7csl/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a>
  </div>
);

const Header = () => (
  <header>
    <div className="header-top">
      <h1>Abhishek Bhardwaj</h1>
      <ThemeToggle />
    </div>
    <p className="title">Software Engineer</p>
    <SocialLinks />
    <p className="bio">
      A versatile developer who thrives across full stack and DevOps environments. A generalist with high agency - able to quickly learn new technologies, take ownership of projects, and deliver quality results. Enjoys collaborating with teams to solve complex problems.

      Drop a message here or mail at bhardwajabhi2701@gmail.com
    </p>
  </header>
);

const ProjectCard = ({ title, description, links, tags }) => (
  <div className="project-card">
    <h3>{title}</h3>
    <p>{description}</p>

    {tags && tags.length > 0 && (
      <div className="project-tags">
        {tags.map((tag, index) => (
          <span key={index} className="project-tag">{tag}</span>
        ))}
      </div>
    )}

    {links && (
      <div className="project-links">
        {links.map((link, index) => (
          <React.Fragment key={index}>
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              {link.label}
            </a>
            {index < links.length - 1 && <span className="separator">/</span>}
          </React.Fragment>
        ))}
      </div>
    )}
  </div>
);

const Projects = () => (
  <section id="projects">
    <h2>Projects</h2>
    <div className="projects-list">
      <ProjectCard
        title="Circuit Breaker"
        description="A lightweight, thread-safe circuit breaker implementation in idiomatic Go. Prevents cascading failures in distributed systems by automatically detecting failures and blocking operations likely to fail."
        tags={["Go", "Distributed Systems", "Design Pattern"]}
        links={[
          { label: "GitHub", url: "https://github.com/bharabhi01/circuit-breaker" },
        ]}
      />
      <ProjectCard
        title="S3 Blob Storage"
        description="A serverless file storage application built with React and AWS Amplify. Upload, preview, and manage files securely in the cloud using Amazon S3. Features include drag-and-drop uploads, file previews, and secure access via presigned URLs."
        tags={["React", "Node.js", "Express.js", "AWS S3", "Docker", "Nginx"]}
        links={[
          { label: "Visit", url: "https://dev.d109ykjkci7xl6.amplifyapp.com/" },
          { label: "GitHub", url: "https://github.com/bharabhi01/s3-blob-storage" },
        ]}
      />
      <ProjectCard
        title="Bloom Filter"
        description="A space-efficient JavaScript implementation of Bloom filters with comprehensive test cases. This probabilistic data structure offers constant-time lookups and insertions with configurable false positive rates. Includes performance benchmarks, optimal parameter calculations, and practical examples for web applications, databases, and network systems."
        tags={["Javascript", "Data Structures", "Performance Optimization"]}
        links={[
          { label: "GitHub", url: "https://github.com/bharabhi01/bloom-filter" },
        ]}
      />
      <ProjectCard
        title="Short URL"
        description="A high-performance URL shortener service built with Go, PostgreSQL, and Redis. Features include fast URL shortening, efficient redirects, rate limiting, and a clean RESTful API. Designed for scalability and reliability in production environments."
        tags={["Go", "Gin", "PostgreSQL", "Redis", "Docker"]}
        links={[
          { label: "GitHub", url: "https://github.com/bharabhi01/shorturl-go" },
        ]}
      />
      <p className="more-projects">And many more...</p>
    </div>
  </section>
);

const Work = () => (
  <section id="work">
    <h2>Work Experience</h2>
    <div className="timeline">
      <div className="timeline-item">
        <div className="timeline-marker"></div>
        <div className="timeline-content">
          <div className="timeline-date">October 2023 - Present</div>
          <h3>Ather Energy</h3>
          <p className="timeline-position">Software Engineer</p>

          <ul className="timeline-points">
            <li>Streamlined OTA updates and fleet management for 350,000+ Ather bikes by engineering a scalable batch deployment system (React, Go, Postgres, MongoDB).</li>
            <li>Increased bulk tag update capacity by over 3500x (from 100 to 350,000+ devices) by designing and implementing a CSV-based feature, streamlining fleet management.</li>
            <li>Improved OTA deployment workflow by automating CSV file splitting, batch creation and multi-level payload batching, reducing response time by 87%</li>
            <li>Developed a one-click deployment mechanism with customizable scheduling, dramatically reducing manual labour and increasing operational efficiency for fleet-wide OTA updates.</li>
            <li>Prevented financial loss by resolving a P0 bug in the PWA (Ather Mobile App) that incorrectly displayed free lifetime subscriptions.</li>
            <li>Built end-to-end MD5 checksum verification for artifact downloads, ensuring data integrity and reliability on device deployments.</li>
            <li>Developed and implemented a live location sharing feature in the mobile PWA using Google Maps, adding a key user functionality.</li>
            <li>Integrated PostHog events into Ather Mobile App PWA for better user analytics.</li>
            <li>Strengthened application security by identifying and resolving multiple SQL injection vulnerabilities</li>
          </ul>

          <div className="timeline-tags">
            <span className="timeline-tag">React</span>
            <span className="timeline-tag">Go</span>
            <span className="timeline-tag">PostgreSQL</span>
            <span className="timeline-tag">MongoDB</span>
            <span className="timeline-tag">Docker</span>
            <span className="timeline-tag">Kubernetes</span>
            <span className="timeline-tag">Progressive Web App</span>
            <span className="timeline-tag">Distributed Systems</span>
          </div>
        </div>
      </div>

      <div className="timeline-item">
        <div className="timeline-marker"></div>
        <div className="timeline-content">
          <div className="timeline-date">January 2023 - October 2023</div>
          <h3>Ather Energy</h3>
          <p className="timeline-position">Software Engineer Intern</p>

          <ul className="timeline-points">
            <li>Engineered and implemented end-to-end pagination feature reducing the API load time by almost 90%.</li>
            <li>Implemented user search functionality in the user management interface, enabling quick retrieval of user details including names, roles, and email addresses.</li>
            <li>Strengthened security measures by implementing parameterized SQL queries in Golang, effectively preventing SQL injection vulnerabilities.</li>
            <li>Mitigated Log4j vulnerability by leading the upgrade of Elasticsearch and Logstash pods to the latest stable release, enhancing system security.</li>
            <li>Redeveloped the new subscriptions, delete and deactivate pages for AtherStack 6 using Next.js and Ionic React, enhancing user experience in the Ather Mobile App PWA.</li>
          </ul>

          <div className="timeline-tags">
            <span className="timeline-tag">React</span>
            <span className="timeline-tag">Go</span>
            <span className="timeline-tag">PostgreSQL</span>
            <span className="timeline-tag">MongoDB</span>
            <span className="timeline-tag">Docker</span>
            <span className="timeline-tag">Kubernetes</span>
            <span className="timeline-tag">Progressive Web App</span>
            <span className="timeline-tag">Distributed Systems</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Writings = () => (
  <section id="writings">
    <h2>Writings</h2>
    <div className="writings-list">
      <a href="https://medium.com/@bhardwajabhi2701/understanding-the-shared-database-pattern-in-microservices-a-practical-guide-27f4d6796e26" className="writing-item">
        <span className="emoji">✨</span>
        <span>Understanding the Shared Database Pattern in Microservices: A Practical Guide</span>
      </a>
      <a href="https://medium.com/@bhardwajabhi2701/everything-you-need-to-know-about-rest-772e33597b19" className="writing-item">
        <span className="emoji">🚀</span>
        <span>Everything you need to know about REST</span>
      </a>
    </div>
  </section>
);

const Skills = () => {
  const skills = [
    "Go", "JavaScript", "TypeScript", "React", "Next.js", "Redux", "Ionic React", "Tailwind CSS", "Node.js", "Express",
    "MongoDB", "PostgreSQL", "Redis", "InfluxDB", "Docker", "Docker Compose", "Kubernetes", "Nginx",
    "AWS S3", "Microservices", "Git", "Distributed Systems", "Linux"
  ];

  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <span key={index} className="skill-item">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

const App = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme) {
      setIsDark(savedTheme === 'dark');
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDark(prefersDark);
    }
  }, []);

  useEffect(() => {
    if (isDark) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }

    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(prevTheme => !prevTheme);
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <div className="app">
        <Header />
        <main>
          <Work />
          <Skills />
          <Projects />
          <Writings />
        </main>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;