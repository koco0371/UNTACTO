import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import SignIn from 'pages/Signin';
import SignUp from 'pages/Signup';
import Drawer from './Drawer';

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const Content = styled.div`
  height: 100%;
  width: 100%;
`;

const Layout = ({
  children,
  isSmall,
  isDrawerOpen,
  setIsDrawerOpen,
  isSigninOpen,
  setIsSigninOpen,
  isSignupOpen,
  setIsSignupOpen,
}) => {
  return (
    <Container>
      <Header
        setIsSigninOpen={setIsSigninOpen}
        setIsDrawerOpen={setIsDrawerOpen}
        isDrawerOpen={isDrawerOpen}
      />
      <div
        style={{
          'z-index': 10,
          position: 'absolute',
          top: '20%',
          left: '40%',
          background: 'white',
        }}
      >
        {isSigninOpen && (
          <SignIn
            setIsSigninOpen={setIsSigninOpen}
            setIsSignupOpen={setIsSignupOpen}
          />
        )}
      </div>
      <div
        style={{
          'z-index': 10,
          position: 'absolute',
          top: '20%',
          left: '40%',
          background: 'white',
        }}
      >
        {isSignupOpen && <SignUp />}
      </div>
      {isDrawerOpen && (
        <Drawer
          setIsDrawerOpen={setIsDrawerOpen}
          setIsSigninOpen={setIsSigninOpen}
        />
      )}
      <Content>{children}</Content>
      <Footer />
    </Container>
  );
};

export default Layout;
