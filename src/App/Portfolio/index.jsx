import Header from "../Header"
import Footer from "../Footer"
import Project from "../Project"
import "./index.css"

let myProjects = [
    {
        name: "Reading Roundtable",
        url: "https://reading-roundtable-a1d1097f86e5.herokuapp.com/login",
        description: "Search and save books!",
        image: "../../reading-roundtable-screenie.png"
    },
    {
        name: "Cattzeria",
        url: "https://alfwall.github.io/catzzeria/",
        description: "A clicker game for cats that like pizza! Lasagna cats need not apply.",
        image: "../../cattzeria-screenie.png"
    }
];


function Portfolio() {
    return (
        <>
            <Header selected="portfolio" />
            <div id="portfolio" className="col-xs-12">
                <h2>My Portfolio</h2>
                <ul className="row">
                    {myProjects.map((proj) => (
                        <Project project={proj} key={proj.name} />
                    ))}
                </ul>
            </div>
            <Footer />
        </>
    );
}

export default Portfolio;