import "./index.css"

let myProjects = [
    {
        name: "Reading Roundtable",
        url: "",
        description: "",
        image: ""
    },
    {
        name: "Cattzeria",
        url: "",
        description: "",
        image: ""
    }
];

function Body(props) {
    function renderBody(tabName) {
        console.log(`rendering ${tabName}...`);
        switch (tabName) {
            case "about-me":
                return (
                    <>
                        <div className="col-sm-6 col-xs-12">
                            <img src="../../../selfie.jpg" alt="A photo of Alfred." />
                        </div>
                        <div className="col-sm-6 col-xs-12">
                            <h2>About Me</h2>
                            <p>
                                Alfred is an established software engineer with 8 years of experience 
                                building applications for web and desktop platforms.
                            </p>
                        </div>
                    </>
                );
            case "portfolio":
                return (
                    <div className="col-xs-12">
                        <h2>My Portfolio</h2>
                        <ul>
                            {myProjects.map(project => (
                                <li key={project.name}>
                                    <a href={project.url}>{project.name}</a>
                                    <p>{project.description}</p>
                                    <img src={project.image} alt={project.name} />
                                </li>
                            ))}
                        </ul>
                    </div>
                );
            case "contact":
                return (
                    <form className="col-xs-12">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" className="form-control" id="name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" className="form-control" id="email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea className="form-control" id="message" rows="3"></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                );
            case "resume":
                return (
                    <>
                        {/* Put downloadable file here */}
                        <a href="">
                            <img src="" alt="A download symbol" />
                        </a>
                    </>
                );
            default:
                return (<div>Uh oh!!!</div>);
        }
    }

    return (
        <main className="col-xs-12">
            <div className="row">
                {renderBody(props.currentTab)}
            </div>
        </main>
    );
}

export default Body;