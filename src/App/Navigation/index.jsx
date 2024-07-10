import { NavLink } from "react-router-dom"
import "./index.css"


const Navigation = (props) => {
    return (
        <div className="col-xs-12 col-sm-8">
            <nav className="row">
                <NavLink to="/"
                    className={"col-xs-12 col-sm-3" + (props.selected == "about-me" ? " active" : "")}>
                    About Me
                </NavLink>
                <NavLink to="/portfolio"
                    className={"col-xs-12 col-sm-3" + (props.selected == "portfolio" ? " active" : "")}>
                    Portfolio
                </NavLink>
                <NavLink to="/contact"
                    className={"col-xs-12 col-sm-3" + (props.selected == "contact" ? " active" : "")}>
                    Contact
                </NavLink>
                <NavLink to="/resume"
                    className={"col-xs-12 col-sm-3" + (props.selected == "resume" ? " active" : "")}>
                    Resume
                </NavLink>
            </nav>
        </div>
    );
}


export default Navigation;