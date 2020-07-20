import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const BContainer = styled.div`
  width: 100%;
  height: 80px;
  .normal-header {
    display: block;
  }
  .small-header {
    display: none;
    img {
      margin-left: 1rem;
      cursor: pointer;
    }
  }
  @media screen and (max-width: 768px) {
    .normal-header {
      display: none;
    }
    .small-header {
      display: block;
    }
  }
`;

const Container = styled.div`
  width: 100%;
  height: 80px;
  display: grid;
  grid-template-columns: 1fr 5fr 1fr;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  font-size: 1.2rem;
  font-weight: 600;
  background: #3498db;
  color: white;
  * {
    color: white;
  }
  img {
    width: 30px;
  }
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  margin: 1.2rem;
`;

const Menu = styled.ul`
  display: flex;
  justify-content: center;
  li {
    padding-left: 3rem;
    padding-right: 3rem;
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
  display: flex;
  justify-content: center;
  margin: 1.2rem;
  &:hover {
    cursor: pointer;
  }
`;

const Header = ({ setIsSigninOpen, setIsDrawerOpen, isDrawerOpen }) => {
  const isSmall = window.innerWidth < 768;
  return (
    <BContainer>
      <div className="normal-header">
        <Container>
          <Title>LOGO</Title>
          <Menu>
            <li>
              <Link to="/">Vote</Link>
            </li>
            <li>
              <Link to="/myvote">My Vote</Link>
            </li>
            <li>
              <Link to="/createvote">Create a Vote</Link>
            </li>
          </Menu>
          <UserBtn
            onClick={() => {
              setIsSigninOpen(true);
            }}
          >
            Login
          </UserBtn>
        </Container>
      </div>
      <div className="small-header">
        <Container>
          <img
            src="https://res.cloudinary.com/kennycld/image/upload/v1594911079/characters/Hamburger_icon.svg_zuuolj.png"
            alt="hamburget btn"
            onClick={() => {
              setIsDrawerOpen(!isDrawerOpen);
            }}
          />
          <Title>LOGO</Title>
          <UserBtn
            onClick={() => {
              setIsSigninOpen(true);
            }}
          >
            Login
          </UserBtn>
        </Container>
      </div>
      )
    </BContainer>
  );
};

export default Header;
