import "./index.css"

function Project({ project }) {
    return (
        <li className="project-li col-xs-12 col-sm-6 col-md-4" key={project.name}>
            <a href={project.url}>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <img src={project.image} alt={project.name} />
            </a>
        </li>
    );
}

export default Project;