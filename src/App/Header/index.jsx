import "./index.css"
import { Link } from "react-router-dom"



const Navigation = (props) => {
    function StyleTab(currentTab) {
        //console.log(`styling tab: ${currentTab} against ${props.currentTab}`);
        if (currentTab === props.currentTab) {
            return "col-xs-12 col-sm-2 selected-tab"
        } else {
            return "col-xs-12 col-sm-2"
        }
    }
    return (
        <ul className="col-xs-12 col-sm-8">
            <div className="row">
                <li>
                    <Link to="/" className={StyleTab("about-me")}>About Me</Link>
                </li>
                <li>
                    <Link to="/projects" className={StyleTab("projects")}>Projects</Link>
                </li>
                <li>
                    <Link to="/contact" className={StyleTab("contact")}>Contact</Link>
                </li>
                <li>
                    <Link to="/resume" className={StyleTab("resume")}>Resume</Link>
                </li>
            </div>
        </ul>
    );
}

const Header = (props) => {
    return (
        <header id="header" className="col-xs-12">
            <div className="row">
                <span className="col-xs-12 col-sm-4">
                    Alfred Wallace
                </span>
                <Navigation currentTab={props.currentTab} />
            </div>
        </header>
    );
}

export default Header;