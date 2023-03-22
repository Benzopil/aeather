import { Link, NavLink } from 'react-router-dom';

import {Icon} from '../icon/Icon'

import './appHeader.scss';

import logo from '../../img/logo.svg';

const gotoAnchor = (e) => {
    setTimeout(() => {
        let element = document.getElementById(e.target.getAttribute('datahash'));
        element.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100)
}

const AppHeader = () => {

    return (
        <header className="header">
            <div className="container">
                <div className="header__wrap">
                    <Link className="header__logo"><img src={logo} alt="Æather" /></Link>
                    <nav className="header__nav">
                        <ul className="header__nav-list">
                            <li className="header__nav-item">
                                <NavLink to="#introduction" className="header__nav-link" datahash="introduction" onClick={(e) => gotoAnchor(e)}>Introduction</NavLink>
                            </li>
                            <li className="header__nav-item">
                                <NavLink to="#app-server" className="header__nav-link" datahash="app-server" onClick={(e) => gotoAnchor(e)}>Application server</NavLink>
                            </li>
                            <li className="header__nav-item">
                                <NavLink to="#proof" className="header__nav-link" datahash="proof" onClick={(e) => gotoAnchor(e)}>Proof of computation</NavLink>
                            </li>
                            <li className="header__nav-item">
                                <NavLink to="#messages" className="header__nav-link" datahash="messages" onClick={(e) => gotoAnchor(e)}>Messages</NavLink>
                            </li>
                            <li className="header__nav-item">
                                <NavLink to="#inspecting" className="header__nav-link" datahash="inspecting" onClick={(e) => gotoAnchor(e)}>Inspecting a client</NavLink>
                            </li>
                            <li className="header__nav-item">
                                <NavLink to="#tarification" className="header__nav-link" datahash="tarification" onClick={(e) => gotoAnchor(e)}>Tarification</NavLink>
                            </li>
                        </ul>
                    </nav>
                    <Link to="#" className="header__acc">
                        <Icon icon="login"/>
                        Log in
                    </Link>
                </div>
            </div>
        </header>
    )

}

export default AppHeader;