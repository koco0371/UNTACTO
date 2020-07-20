import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  background-color: #ecf0f1;
  width: 300px;
  height: 100%;
  position: fixed;
  z-index: 4;
  top: 0;
  left: 0;
  margin-top: 80px;
  font-size: 1.2rem;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  margin: 1.2rem;
`;

const Menu = styled.ul`
  font-weight: 600;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  li {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
  a {
    text-decoration: none;
  }
  @media (max-width: 768px) {
    li {
      padding-left: 1rem;
      padding-right: 1rem;
    }
  }
  @media (max-width: 576px) {
    li {
      padding-left: 0.5rem;
      padding-right: 0.5rem;
    }
  }
`;

const UserBtn = styled.div`
  font-weight: 600;
  display: flex;
  justify-content: center;
  margin: 1.2rem;
  &:hover {
    cursor: pointer;
  }
`;

const Drawer = ({ setIsSigninOpen, setIsDrawerOpen }) => {
  return (
    <Container>
      <Title>LOGO</Title>
      <Menu>
        <li>
          <Link
            to="/"
            onClick={() => {
              setIsDrawerOpen(false);
            }}
          >
            Vote
          </Link>
        </li>
        <li>
          <Link
            to="/myvote"
            onClick={() => {
              setIsDrawerOpen(false);
            }}
          >
            My Vote
          </Link>
        </li>
        <li>
          <Link
            to="/createvote"
            onClick={() => {
              setIsDrawerOpen(false);
            }}
          >
            Create a Vote
          </Link>
        </li>
        <li>
          <Link
            to="/terms"
            onClick={() => {
              setIsDrawerOpen(false);
            }}
          >
            Privacy Policy
          </Link>
        </li>
        <li>
          <Link
            to="/aboutme"
            onClick={() => {
              setIsDrawerOpen(false);
            }}
          >
            Developer Introduction
          </Link>
        </li>
        <li>
          <Link
            to="/contactus"
            onClick={() => {
              setIsDrawerOpen(false);
            }}
          >
            Contact Us
          </Link>
        </li>
      </Menu>
      <UserBtn
        onClick={() => {
          setIsDrawerOpen(false);
          setIsSigninOpen(true);
        }}
      >
        Login
      </UserBtn>
    </Container>
  );
};

export default Drawer;
