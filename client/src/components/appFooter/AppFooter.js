import { Link, NavLink } from 'react-router-dom';
import { Formik, Field } from 'formik';

import { Icon } from '../icon/Icon';

import './appFooter.scss';

import logo from '../../img/logo.svg';

const gotoAnchor = (e) => {
    setTimeout(() => {
        let element = document.getElementById(e.target.getAttribute('datahash'));
        element.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 750)
}

const AppFooter = () => {

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__top">
                    <Link to="/" className="footer__logo">
                        <img src={logo} alt="Æather" />
                    </Link>
                    <div className="footer__sub">
                        <div className="footer__sub-title">Subscribe to news</div>
                        <Formik
                            initialValues={{ email: '' }}
                            validate={values => {
                                const errors = {};
                                if (!values.email || !(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email))) {
                                    errors.email = 'Required field';
                                }
                                return errors;
                            }}
                            onSubmit={(values, { setSubmitting, resetForm }) => {
                                setTimeout(() => {
                                    console.log(values);
                                    setSubmitting(false);
                                    resetForm();
                                }, 400);
                            }}
                        >
                            {({
                                values,
                                errors,
                                touched,
                                handleChange,
                                handleSubmit,
                            }) => (

                                <form className="footer__form" onSubmit={handleSubmit}>
                                    <div className="footer__form-group">
                                        <input type="text" name="email" className="footer__form-input" onChange={handleChange} value={values.email} placeholder="Email" />
                                        <div className="footer__form-error">{errors.email && touched.email && errors.email}</div>
                                        <button type="submit" className="footer__form-btn">
                                            <Icon icon="submit" />
                                        </button>
                                    </div>
                                </form>
                            )}
                        </Formik>
                    </div>
                    <nav className="footer__nav">
                        <ul className="footer__nav-list">
                            <li className="footer__nav-item">
                                <NavLink to="#introduction" className="footer__nav-link" datahash="introduction" onClick={(e) => gotoAnchor(e)}>Introduction</NavLink>
                            </li>
                            <li className="footer__nav-item">
                                <NavLink to="#app-server" className="footer__nav-link" datahash="app-server" onClick={(e) => gotoAnchor(e)}>Application server</NavLink>
                            </li>
                            <li className="footer__nav-item">
                                <NavLink to="#proof" className="footer__nav-link" datahash="proof" onClick={(e) => gotoAnchor(e)}>Proof of computation</NavLink>
                            </li>
                            <li className="footer__nav-item">
                                <NavLink to="#messages" className="footer__nav-link" datahash="messages" onClick={(e) => gotoAnchor(e)}>Messages</NavLink>
                            </li>
                            <li className="footer__nav-item">
                                <NavLink to="#inspecting" className="footer__nav-link" datahash="inspecting" onClick={(e) => gotoAnchor(e)}>Inspecting a client</NavLink>
                            </li>
                            <li className="footer__nav-item">
                                <NavLink to="#tarification" className="footer__nav-link" datahash="tarification" onClick={(e) => gotoAnchor(e)}>Tarification</NavLink>
                            </li>
                        </ul>
                    </nav>
                    <div className="footer__contacts">
                        <div className="footer__contacts-item">
                            <div className="footer__contacts-subtitle">Email</div>
                            <div className="footer__contacts-wrap">
                                <Link to="mailto:Æather@Æather.ru" className="footer__contacts-elem">Æather@Æather.ru</Link>
                            </div>
                        </div>
                        <div className="footer__contacts-item">
                            <div className="footer__contacts-subtitle">Telephone</div>
                            <div className="footer__contacts-wrap">
                                <Link to="tel:123 456 7891 230" className="footer__contacts-elem">123 456 7891 230</Link>
                            </div>
                        </div>
                        <div className="footer__contacts-item">
                            <div className="footer__contacts-subtitle">Social networks</div>
                            <div className="footer__contacts-wrap">
                                <Link to="#" className="footer__contacts-elem">Facebook</Link>
                                <Link to="#" className="footer__contacts-elem">LinkedIn</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer__bottom">
                    <Link className="footer__policy">Privacy Policy</Link>
                    <div className="footer__copyright">© Æather, 2023</div>
                    <Link to="https://deus.team/" className="footer__deus" target="_blank">
                        Designed by
                        <Icon icon="deus" />
                    </Link>
                </div>
            </div>
        </footer>
    )

}

export default AppFooter;