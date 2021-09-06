import React from 'react';
import logo from './logo.png';
import './App.scss';
import { NavBar } from 'src/components/layout/NavBar';
import { FooterSection } from 'src/sections/Footer.section';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useLocation,
} from 'react-router-dom';

import { PageLoader } from 'src/components/layout/Page';
import CookieConsent from 'src/components/CookieConsent';

const HomePage = React.lazy(() => import('../pages/Home/Home.page'));
const ServicesPage = React.lazy(() => import('../pages/Services/Services.page'));
const BlogPage = React.lazy(() => import('../pages/Blog/Blog.page'));
const AboutPage = React.lazy(() => import('../pages/About/About.page'));
const ContactPage = React.lazy(() => import('../pages/ContactUs/Contact.page'));
const Service1 = React.lazy(() => import('../pages/Services/ServicePages/Service1.page'));
const PrivacyPolicy = React.lazy(() => import('../pages/About/PrivacyPolicy.page'));

const AppContent = () => {
  const location = useLocation<{ noscroll?: boolean } | null>();

  // hash
  React.useLayoutEffect(() => {
    const hash = location.hash;
    setTimeout(() => {
      const scrollToEl = document.getElementById(hash.replace('#', ''));
      if (scrollToEl) {
        window.scrollTo({
          top: scrollToEl.getBoundingClientRect().top - 80 + window.scrollY,
          left: 0,
          behavior: 'smooth',
        });
      }
    }, 50);
  }, [location.hash]);

  // location

  React.useLayoutEffect(() => {
    if (location.state?.noscroll) {
      return;
    }
    window.scrollTo({
      top: 0,
      left: 0,
    });
  }, [location.pathname, location.state]);

  return (
    <>
      {/* <React.Suspense fallback={<React.Fragment />}>
        
      </React.Suspense> */}
      <React.Suspense fallback={<PageLoader />}>
      <NavBar />
        <Switch>
          <Route exact component={ServicesPage} path="/projects" />
          <Route exact component={BlogPage} path="/blog" />
          <Route exact component={AboutPage} path="/about" />
          <Route exact component={HomePage} path="/" />
          <Route exact component={ContactPage} path="/contact-us" />
          {/* service pages */}
          <Route exact component={Service1} path="/projects/mental-health-monitoring-on-social-media" />
          {/* footer pages */}
          <Route exact component={PrivacyPolicy} path="/about/privacy-policy" />
          {/* <Route path="/not-found" component={NotFoundPage} /> */}
          <Redirect to="/" />
        </Switch>
        {/* <CookieConsent></CookieConsent> */}
      </React.Suspense>
      <React.Suspense fallback={<React.Fragment />}>
        <FooterSection />
      </React.Suspense>
    </>
  );
};

const App = () => {
  return (
    <>
      <Router>
        <AppContent />
      </Router>
    </>
  );
};

export default App;
