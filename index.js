import React from "react";

const App = () => {
  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <h1 style={styles.name}>Pankaj Madaan</h1>
        <p style={styles.title}>Full Stack Developer | React • Node • Python</p>
        <p style={styles.contact}>
          Mississauga, ON •{" "}
          <a href="mailto:pmadaan766@gmail.com">pmadaan766@gmail.com</a> •{" "}
          <a
            href="https://www.linkedin.com/in/pankaj-madaan-12558015"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </p>
      </header>

      {/* Summary */}
      <section>
        <h2>Professional Summary</h2>
        <p>
          Dynamic Full Stack Developer with 5+ years of experience designing,
          developing, and deploying scalable, user-centric web applications.
          Proficient in ReactJS, NodeJS, Python (FastAPI), and cloud technologies.
          Strong collaborator with a focus on delivering secure, high-performance
          solutions aligned with business goals.
        </p>
      </section>

      {/* Skills */}
      <section>
        <h2>Technical Skills</h2>
        <ul style={styles.list}>
          <li><strong>Frontend:</strong> ReactJS, Redux, MobX, Material UI</li>
          <li><strong>Backend:</strong> NodeJS, Express, FastAPI</li>
          <li><strong>Languages:</strong> JavaScript, TypeScript, Python</li>
          <li><strong>Databases:</strong> MySQL, PostgreSQL, MongoDB</li>
          <li><strong>Cloud:</strong> AWS, Azure</li>
          <li><strong>Tools:</strong> Git, Jira, Bitbucket, Jest, Postman</li>
        </ul>
      </section>

      {/* Experience */}
      <section>
        <h2>Professional Experience</h2>

        <div style={styles.job}>
          <h3>Specialist Programmer</h3>
          <p style={styles.company}>
            Kraft Heinz (via Infosys) | Sep 2022 – Present
          </p>
          <ul style={styles.list}>
            <li>Developed responsive web apps using ReactJS, NodeJS, and FastAPI.</li>
            <li>Designed REST APIs improving data communication speed by 30%.</li>
            <li>Led a team of 4 developers, reducing manual reporting by 50%.</li>
            <li>Implemented Redux for state management, enhancing UX.</li>
            <li>Built CI/CD pipelines, reducing deployment time and errors.</li>
            <li>Optimized SQL queries for faster data retrieval.</li>
            <li>Mentored junior developers and improved team productivity.</li>
          </ul>
        </div>

        <div style={styles.job}>
          <h3>Software Engineer</h3>
          <p style={styles.company}>
            Q.A. Infotech (Qualitest) | Jan 2020 – Sep 2022
          </p>
          <ul style={styles.list}>
            <li>Developed backend services using NodeJS, Express, Sequelize, Prisma.</li>
            <li>Built responsive UIs using ReactJS, Redux, MobX.</li>
            <li>Designed and maintained secure databases (Postgres, MongoDB, MySQL).</li>
            <li>Collaborated with QA teams to debug and optimize performance.</li>
          </ul>
        </div>
      </section>

      {/* Projects */}
      <section>
        <h2>Projects</h2>
        <ul style={styles.list}>
          <li>
            <strong>Data Manager App:</strong> Full-stack app with React/Redux,
            pagination, graphs, Excel handling.
          </li>
          <li>
            <strong>Collaboration App:</strong> React frontend with search,
            subscriptions, badges, notifications.
          </li>
          <li>
            <strong>Healthcare Portal:</strong> Backend APIs with Twilio SMS and
            Stripe payments.
          </li>
          <li>
            <strong>E-Learning Platform:</strong> Microservices architecture using
            NodeJS, Sequelize, AWS CDK.
          </li>
        </ul>
      </section>

      {/* Education */}
      <section>
        <h2>Education</h2>
        <p>
          <strong>Master in Computer Applications</strong> – Chandigarh Group of
          Colleges, Mohali (2020)
        </p>
        <p>
          <strong>Bachelor in Computer Applications</strong> – Arya College,
          Ludhiana (2017)
        </p>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        © {new Date().getFullYear()} Pankaj Madaan
      </footer>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "900px",
    margin: "0 auto",
    padding: "30px",
    fontFamily: "Arial, sans-serif",
    lineHeight: 1.6,
    color: "#333",
  },
  header: {
    borderBottom: "2px solid #eee",
    marginBottom: "30px",
    paddingBottom: "20px",
  },
  name: {
    margin: 0,
    fontSize: "36px",
  },
  title: {
    fontSize: "18px",
    color: "#555",
  },
  contact: {
    fontSize: "14px",
  },
  list: {
    paddingLeft: "20px",
  },
  job: {
    marginBottom: "25px",
  },
  company: {
    fontStyle: "italic",
    color: "#666",
  },
  footer: {
    marginTop: "40px",
    textAlign: "center",
    fontSize: "14px",
    color: "#777",
  },
};

export default App;
