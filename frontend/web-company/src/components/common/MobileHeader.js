import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from './Button';
import palette from '../../lib/styles/palette';

const MobileHeaderBlock = styled.div`
  display: none;
  position: fixed;
  top: 0;
  width: 100%;
  background: ${palette.indigo[5]};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
  margin: 0 auto;
  color: ${palette.indigo[0]};
  z-index: 10;
  @media (max-width: 768px) {
    display: block;
  }
`;

const Wrapper = styled.div`
  padding-left: 2rem;
  padding-right: 2rem;
  width: 100%;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .logo {
    font-size: 1.5rem;
    font-weight: bold;
    letter-spacing: 2px;
    font-family: 'Gugi', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
      'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;
  }
  .right {
    display: flex;
    align-items: center;
  }
  .menu-btn {
    width: 4rem;
    height: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
`;

const Spacer = styled.div`
  height: 4rem;
`;

const Menus = styled.div`
  background: ${palette.indigo[4]};
  padding-left: 2rem;
  padding-right: 2rem;
  width: 100%;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: 'Gugi', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
    'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
`;

const MobileHeader = ({ user, onLogout }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <>
      <MobileHeaderBlock>
        <Wrapper>
          <span
            className="menu-btn"
            onClick={() => {
              setIsNavOpen(!isNavOpen);
            }}
          >
            <i className="fas fa-bars fa-2x"></i>
          </span>
          <Link to="/" className="logo">
            UNTACTO
          </Link>
          {user ? (
            <div className="right">
              <Button onClick={onLogout}>로그아웃</Button>
            </div>
          ) : (
            <div className="right">
              <Button to="/login">로그인</Button>
            </div>
          )}
        </Wrapper>
        {isNavOpen && (
          <Menus>
            <div className="menu-item">
              <Link to="/">Dashboard</Link>
            </div>
            <div className="menu-item">
              <Link to="/survey">Surveys</Link>
            </div>
            <div className="menu-item">
              <Link to="/write">Create Survey</Link>
            </div>
          </Menus>
        )}
      </MobileHeaderBlock>

      <Spacer />
    </>
  );
};

export default MobileHeader;
