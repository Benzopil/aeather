import { Link, NavLink } from 'react-router-dom';
import { Formik } from 'formik';


import { Icon } from '../icon/Icon';

import './appFooter.scss';

import logo from '../../img/logo.svg';

const gotoAnchor = (e) => {
    setTimeout(() => {
        let element = document.getElementById(e.target.getAttribute('datahash'));
        element.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100)
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
                            initialValues={{ email: '', checked: false }}
                            validate={values => {
                                const errors = {};
                                if (!(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email))) {
                                    errors.email = 'Email entered incorrectly';
                                }
                                if (!values.email) {
                                    errors.email = 'This field is required';
                                }
                                if (!values.checked) {
                                    errors.checked = 'Required field';
                                }
                                return errors;
                            }}
                            onSubmit={(values, { setSubmitting, resetForm }) => {
                                setTimeout(() => {
                                    console.log(values);
                                    setSubmitting(false);
                                    resetForm();
                                }, 3000);
                            }}
                        >
                            {({
                                values,
                                errors,
                                touched,
                                handleChange,
                                handleSubmit,
                                isSubmitting
                            }) => (
                                <>
                                    {!isSubmitting ?
                                        <form className="footer__form" onSubmit={handleSubmit}>
                                            <div className="footer__form-group">
                                                <input type="text" name="email" className={`footer__form-input ${errors.email && touched.email && errors.email ? 'error' : ''}`} onChange={handleChange} value={values.email} placeholder="Email" />
                                                {errors.email && touched.email ? <div className="footer__form-error">{errors.email}</div> : null}
                                                <button type="submit" className="footer__form-btn">
                                                    <Icon icon="submit" />
                                                </button>
                                            </div>
                                            <label className={`footer__form-label ${errors.checked && touched.checked && errors.checked ? 'error' : ''}`}>
                                                <input type="checkbox" name="checked" onChange={handleChange} value={values.checked} />
                                                <div className="footer__form-c">
                                                    <Icon icon="check" />
                                                </div>
                                                <div className="footer__form-text">
                                                    I agree to the processing of personal data and accept the terms of the <Link to="/privacy">Privacy Policy</Link>
                                                </div>
                                            </label>
                                        </form>
                                        : null}
                                    {isSubmitting ?
                                        <div className="footer__success">You are subscribed to Æather news <Icon icon="success" /></div>
                                        : null
                                    }
                                </>
                            )}
                        </Formik>
                    </div>
                    <nav className="footer__nav">
                        <ul className="footer__nav-list">
                            <li className="footer__nav-item">
                                <NavLink to="/#introduction" className="footer__nav-link" datahash="introduction" onClick={(e) => gotoAnchor(e)}>Introduction</NavLink>
                            </li>
                            <li className="footer__nav-item">
                                <NavLink to="/#app-server" className="footer__nav-link" datahash="app-server" onClick={(e) => gotoAnchor(e)}>Application server</NavLink>
                            </li>
                            <li className="footer__nav-item">
                                <NavLink to="/#proof" className="footer__nav-link" datahash="proof" onClick={(e) => gotoAnchor(e)}>Proof of computation</NavLink>
                            </li>
                            <li className="footer__nav-item">
                                <NavLink to="/#messages" className="footer__nav-link" datahash="messages" onClick={(e) => gotoAnchor(e)}>Messages</NavLink>
                            </li>
                            <li className="footer__nav-item">
                                <NavLink to="/#inspecting" className="footer__nav-link" datahash="inspecting" onClick={(e) => gotoAnchor(e)}>Inspecting a client</NavLink>
                            </li>
                            <li className="footer__nav-item">
                                <NavLink to="/#tarification" className="footer__nav-link" datahash="tarification" onClick={(e) => gotoAnchor(e)}>Tarification</NavLink>
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
                    <Link to="/privacy" className="footer__policy">Privacy Policy</Link>
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