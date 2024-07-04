import "./index.css"


function Header(props) {
    function ChangeTab(newTab) {
        props.onTabClick(newTab);
        console.log(`changing to new tab: ${newTab}`);
    }

    return (
        <header id="header" className="col-xs-12">
            <div className="row">
                <span className="col-xs-12 col-sm-3">
                    Alfred Wallace
                </span>
                <button onClick={() => ChangeTab("about-me")} className="col-xs-12 col-sm-2 ">
                    About Me
                </button>
                <button onClick={() => ChangeTab("portfolio")} className="col-xs-12 col-sm-2">
                    Portfolio
                </button>
                <button onClick={() => ChangeTab("contact")} className="col-xs-12 col-sm-2">
                    Contact
                </button>
                <button onClick={() => ChangeTab("resume")} className="col-xs-12 col-sm-2">
                    Resume
                </button>
            </div>
        </header>
    );
}

export default Header;