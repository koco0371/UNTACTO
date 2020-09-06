import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const AdminHeaderBlock = styled.div`
  position: fixed;
  width: 100%;
  background: white;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
  margin: 0 auto;
  z-index: 10;
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
  .menus {
    display: flex;
    align-items: center;
    font-size: 1.25rem;
    font-weight: bold;
    letter-spacing: 2px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
      'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;
    .menu {
      margin-left: 2rem;
    }
  }
`;

const Spacer = styled.div`
  height: 4rem;
`;

const StyledLink = styled(Link)``;

const AdminHeader = ({ user, onLogout }) => {
  return (
    <>
      <AdminHeaderBlock>
        <Wrapper>
          <Link to="/admin" className="logo">
            UNTACTO ADMIN
          </Link>
          <div className="menus">
            <StyledLink className="menu" to={'/admin/survey'}>
              설문 목록
            </StyledLink>
            <StyledLink className="menu" to={'/admin/user'}>
              회사 목록
            </StyledLink>
            <StyledLink className="menu" to={'/admin/customer'}>
              설문응답자 목록
            </StyledLink>
            <StyledLink className="menu" to={'/admin/kiosk'}>
              키오스크 목록
            </StyledLink>
          </div>
        </Wrapper>
      </AdminHeaderBlock>
      <Spacer />
    </>
  );
};

export default AdminHeader;
