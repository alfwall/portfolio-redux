import "./index.css"


function Header(props) {
    function ChangeTab(newTab) {
        props.onTabClick(newTab);
        console.log(`changing to new tab: ${newTab}`);
    }

    function StyleTab(currentTab) {
        if (currentTab === props.currentTab) {
            return "col-xs-12 col-sm-2 selected-tab"
        } else {
            return "col-xs-12 col-sm-2"
        }
    }

    return (
        <header id="header" className="col-xs-12">
            <div className="row">
                <span className="col-xs-12 col-sm-3">
                    Alfred Wallace
                </span>
                <button onClick={() => ChangeTab("about-me")} className={StyleTab("about-me")}>
                    About Me
                </button>
                <button onClick={() => ChangeTab("portfolio")} className={StyleTab("about-me")}>
                    Portfolio
                </button>
                <button onClick={() => ChangeTab("contact")} className={StyleTab("about-me")}>
                    Contact
                </button>
                <button onClick={() => ChangeTab("resume")} className={StyleTab("about-me")}>
                    Resume
                </button>
            </div>
        </header>
    );
}

export default Header;