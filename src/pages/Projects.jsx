import { useEffect, useState } from "react";
import { NavLink } from "react-router";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch("./public/projects.json");
      const data = await response.json();
      setProjects(data);
    }
    getData();
  }, []);
  return (
    <section id="projects" className="page">
      <div className="headline-container">
        <h2>Projects</h2>
      </div>
      {projects.map((project) => (
        <div key={project.id} className="project">
          <img src={project.img} alt={project.title} />
          <h3>{project.title}</h3>
          <p>{project.id}</p>
          <NavLink to={`/project/${project.id}`}>Læs mere</NavLink>
        </div>
      ))}
    </section>
  );
}
