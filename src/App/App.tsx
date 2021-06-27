import React from 'react';
import logo from './logo.png';
import './App.css';
import { NavBar } from 'src/components/layout/NavBar';
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
      <React.Suspense fallback={<React.Fragment />}>
        <NavBar />
      </React.Suspense>
      <React.Suspense fallback={<PageLoader />}>
        <Switch>
          {/* <Route exact component={ApiDocsPage} path="/docs/api" />
          <Route
            exact
            component={OpenDataReportsPage}
            path="/open-data-reports"
          />
          <Route
            exact
            path="/business-development"
            component={BusinessDevelopmentPage}
          />
          <Route exact path="/partners" component={PartnersPage} />
          <Route component={GetStartedPage} path="/get-started" />
          <Route exact component={StatisticsPage} path="/statistics" />
          <Route exact component={FaqPage} path="/faq" />
          <Route exact component={MinersPage} path="/miners" />
          <Route component={MinerDashboardPage} path="/miner/:coin/:address" />
          <Route exact component={BlocksPage} path="/blocks" />
          <Route exact component={SupportPage} path="/support" />
          <Route exact component={BrandAssetsPage} path="/brand-assets" />
          <Route exact component={ContactUsPage} path="/contact" /> */}
          <Route exact component={HomePage} path="/" />
          {/* <Route path="/not-found" component={NotFoundPage} /> */}
          <Redirect to="/" />
        </Switch>
        <CookieConsent></CookieConsent>
      </React.Suspense>
      <React.Suspense fallback={<React.Fragment />}>
        {/** __TODO footer loader */}
        {/* <FooterSection /> */}
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
