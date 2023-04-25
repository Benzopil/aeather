import { Link, NavLink } from 'react-router-dom';
import { Formik, Field } from 'formik';
import axios from 'axios';


import { Icon } from '../icon/Icon';

import './appFooter.scss';

import logo from '../../img/logo.svg';

const gotoAnchor = (e) => {
    setTimeout(() => {
        let element = document.getElementById(e.target.getAttribute('datahash'));
        element.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100)
}

const sendEmail = async (values) => {
    try {
        const response = await axios.post('http://localhost:5000/mail', values);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
};

const AppFooter = () => {

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__top">
                    <Link to="/" className="footer__logo">
                        <img src={logo} alt="Æther" />
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
                                sendEmail(values);
                                setTimeout(() => {
                                    setSubmitting(false);
                                    console.log(values);
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
                                                <Field type="checkbox" name="checked" />
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
                                        <div className="footer__success">You are subscribed to Æther news <Icon icon="success" /></div>
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
                                <Link to="mailto:info@aethernet.io" className="footer__contacts-elem">info@aethernet.io</Link>
                            </div>
                        </div>
                        <div className="footer__contacts-item">
                            <div className="footer__contacts-subtitle">Telephone</div>
                            <div className="footer__contacts-wrap">
                                <Link to="tel:+14084758377" className="footer__contacts-elem">+1 408-475-8377</Link>
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
                    <div className="footer__copyright">© Æther, 2023</div>
                    <Link to="mailto:hello@deus.team" className="footer__deus" target="_blank">
                        Designed by
                        <Icon icon="deus" />
                        <span>hello@deus.team</span>
                    </Link>
                </div>
            </div>
        </footer>
    )

}

export default AppFooter;