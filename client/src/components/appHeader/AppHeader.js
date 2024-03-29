import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Icon } from '../icon/Icon'
import HeaderNav from './headerNav/HeaderNav';

import './appHeader.scss';

import logo from '../../img/logo.svg';
import menuImg from '../../img/menu-img.png';

const AppHeader = () => {

    const [menu, setMenu] = useState(false);

    return (
        <>
            <header className="header">
                <div className="container">
                    <div className="header__wrap">
                        <Link to="/" className="header__logo"><img src={logo} alt="Æther" /></Link>
                        <HeaderNav />
                        <Link to="#" className="header__acc">
                            <Icon icon="login" />
                            Log in
                        </Link>
                        <div className={`header__burger hidden-desktop ${menu ? 'active' : ''}`} onClick={() => setMenu(!menu)}>
                            <span></span>
                        </div>
                    </div>
                </div>
            </header>
            <div className={`header__menu ${menu ? 'active' : ''}`}>
                <div className="header__menu-wrap">
                    <HeaderNav menu={setMenu} />
                    <div className="header__menu-contacts">
                        <div className="header__menu-elem">
                            <div className="header__menu-name">Email</div>
                            <Link to="mailto:æther@æther.ru" className="header__menu-link">æther@æther.ru</Link>
                        </div>
                        <div className="header__menu-elem">
                            <div className="header__menu-name">Telephone</div>
                            <Link to="tel:1234567891230" className="header__menu-link">123 456 7891 230</Link>
                        </div>
                        <div className="header__menu-elem">
                            <div className="header__menu-name">Social networks</div>
                            <Link to="#" className="header__menu-link">Facebook</Link>
                            <Link to="#" className="header__menu-link">LinkedIn</Link>
                        </div>
                    </div>
                    <img src={menuImg} alt="æther" className="header__menu-img" />
                </div>
            </div>
        </>

    )

}

export default AppHeader;