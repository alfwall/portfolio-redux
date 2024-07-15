import Header from "../Header"
import Footer from "../Footer"
import "./index.css"

const skills = [
    "Javascript",
    "React.js",
    "MongoDB",
    "Express.js",
    "Python",
    "C#"
]

function Resume() {
    return (
        <>
            <Header selected="resume" />
            <div id="resume-div" className="col-xs-12">
                <div className="row">
                    <h2 className="col-xs-12">Resume</h2>
                    <div className="col-xs-12 col-sm-6">
                        <h3>Download</h3>
                        <a href="../../AlfredWallace_SoftwareEngineer.pdf">
                            <img src="../../download.png" alt="A download symbol" />
                        </a>
                    </div>
                    <div className="col-xs-12 col-sm-6">
                        <h3>My Skills</h3>
                        <ul>
                            {skills.map((skill) => (
                                <li key={skill}>{skill}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Resume;