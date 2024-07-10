import "./index.css"
import Navigation from "../Navigation";

const Header = (props) => {
    return (
        <header id="header" className="col-xs-12">
            <div className="row">
                <span className="col-xs-12 col-sm-4">
                    Alfred Wallace
                </span>
                <Navigation selected={props.selected} />
            </div>
        </header>
    );
}

export default Header;