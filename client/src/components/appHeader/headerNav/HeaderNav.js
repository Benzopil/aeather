import { NavLink } from 'react-router-dom';

const HeaderNav = (props) => {

    const menuState = props.menu;

    const gotoAnchor = (e) => {
        setTimeout(() => {
            let element = document.getElementById(e.target.getAttribute('datahash'));
            element.scrollIntoView({ behavior: "smooth", block: "start" });
            if (menuState) menuState(false);
        }, 100)
    }

    return (
        <nav className="header__nav">
            <ul className="header__nav-list">
                <li className="header__nav-item">
                    <NavLink to="/#introduction" className="header__nav-link" datahash="introduction" onClick={(e) => gotoAnchor(e)}>Introduction</NavLink>
                </li>
                <li className="header__nav-item">
                    <NavLink to="/#app-server" className="header__nav-link" datahash="app-server" onClick={(e) => gotoAnchor(e)}>Application server</NavLink>
                </li>
                <li className="header__nav-item">
                    <NavLink to="/#proof" className="header__nav-link" datahash="proof" onClick={(e) => gotoAnchor(e)}>Proof of computation</NavLink>
                </li>
                <li className="header__nav-item">
                    <NavLink to="/#messages" className="header__nav-link" datahash="messages" onClick={(e) => gotoAnchor(e)}>Messages</NavLink>
                </li>
                <li className="header__nav-item">
                    <NavLink to="/#inspecting" className="header__nav-link" datahash="inspecting" onClick={(e) => gotoAnchor(e)}>Inspecting a client</NavLink>
                </li>
                <li className="header__nav-item">
                    <NavLink to="/#tarification" className="header__nav-link" datahash="tarification" onClick={(e) => gotoAnchor(e)}>Tarification</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default HeaderNav;