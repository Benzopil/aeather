import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import ScrollToTop from "./helpers/ScrollToTop";
import AppHeader from './components/appHeader/AppHeader';
import AppFooter from './components/appFooter/AppFooter';
import MainPage from './components/pages/mainPage/MainPage';
import Privacy from './components/pages/privacy/Privacy';

function App() {

  return (
    <Router>
      <ScrollToTop />
      <AppHeader />
      <Routes>
        <Route exact path='/' element={<MainPage />} />
        <Route exact path='/privacy' element={<Privacy />} />
      </Routes>
      <AppFooter />
    </Router>
  );
}

export default App;
