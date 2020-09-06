import React from 'react';
import { Route } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import SurveyListPage from './pages/SurveyListPage';
import SurveyPage from './pages/SurveyPage';
import WritePage from './pages/WritePage';
import MemberPage from './pages/MemberPage';
import HelpPage from './pages/HelpPage';
import CustomerInfoPage from './pages/CustomerInfoPage';
import CustomerLoginPage from './pages/CustomerLoginPage';
import AdminHomePage from './pages/AdminHomePage';
import AdminSurveyListPage from './pages/AdminSurveyListPage';
import AdminUserListPage from './pages/AdminUserListPage';
import AdminCustomerListPage from './pages/AdminCustomerListPage';
import AdminKioskListPage from './pages/AdminKioskListPage';
import { Helmet } from 'react-helmet-async';

function App() {
  return (
    <>
      <Helmet>
        <title>UNTACTO</title>
      </Helmet>
      <Route component={DashboardPage} path={'/'} exact />
      <Route component={SurveyListPage} path={'/survey'} exact />
      <Route component={SurveyPage} path={'/survey/:surveyId'} />
      <Route component={WritePage} path={'/write'} />
      <Route component={SignupPage} path={'/signup'} />
      <Route component={LoginPage} path={'/login'} />
      <Route component={MemberPage} path={'/member'} exact />
      <Route component={HelpPage} path={'/help'} exact />
      <Route component={CustomerLoginPage} path={'/customerlogin'} />
      <Route component={CustomerInfoPage} path={'/customer/:customerId'} />
      <Route component={AdminHomePage} path={'/admin'} exact />
      <Route component={AdminSurveyListPage} path={'/admin/survey'} exact />
      <Route component={AdminUserListPage} path={'/admin/user'} />
      <Route component={AdminCustomerListPage} path={'/admin/customer'} />
      <Route component={AdminKioskListPage} path={'/admin/kiosk'} />
    </>
  );
}

export default App;
