

function Project({ project }) {
    return (
        <li className="col-xs-12 col-sm-6 col-md-4" key={project.name}>
            <a href={project.url}>
                <span>{project.name}</span>
                <p>{project.description}</p>
                <img src={project.image} alt={project.name} />
            </a>
        </li>
    );
}

export default Project;