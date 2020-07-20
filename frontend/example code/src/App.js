import React, { useState } from 'react';
import { MainVote, MyVote, CreateVote, Terms, ContactUs, AboutMe } from 'pages';
import { Route } from 'react-router-dom';
import './App.css';
import Layout from 'layout';

const App = () => {
  const [isSmall, setIsSmall] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isSigninOpen, setIsSigninOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  return (
    <Layout
      isSmall={isSmall}
      isDrawerOpen={isDrawerOpen}
      setIsDrawerOpen={setIsDrawerOpen}
      isSigninOpen={isSigninOpen}
      setIsSigninOpen={setIsSigninOpen}
      isSignupOpen={isSignupOpen}
      setIsSignupOpen={setIsSignupOpen}
    >
      <Route exact path="/" component={MainVote} />
      <Route path="/myvote" component={MyVote} />
      <Route path="/createvote" component={CreateVote} />
      <Route path="/terms" component={Terms} />
      <Route path="/contactus" component={ContactUs} />
      <Route path="/aboutme" component={AboutMe} />
    </Layout>
  );
};

export default App;
