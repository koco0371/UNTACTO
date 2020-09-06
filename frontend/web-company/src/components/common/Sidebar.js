import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import VerticalResponsive from './VerticalResponsive';
import palette from '../../lib/styles/palette';

const SidebarBlock = styled.div`
  position: fixed;
  left: 0%;
  top: 4rem;
  width: 12rem;
  height: calc(100% - 4rem);
  background: ${palette.indigo[5]};
  box-shadow: 2px 4px 2px 0px rgba(0, 0, 0, 0.08);
  display: flex;
  @media (max-width: 768px) {
    display: none;
  }
`;

const Wrapper = styled(VerticalResponsive)`
  margin-left: 2rem;
  color: ${palette.indigo[0]};
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  font-size: 1.125rem;
  font-family: 'Gugi', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
    'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  div {
    transition: color 0.3s linear;
    &:hover {
      color: ${palette.gray[9]};
    }
    &:nth-child(4) {
      font-size: 0.875rem;
    }
    &:nth-child(5) {
      font-size: 0.875rem;
    }
  }
  div + div {
    margin-top: 0.75rem;
  }
`;

const Sidebar = () => {
  return (
    <>
      <SidebarBlock>
        <Wrapper>
          <div>
            <Link to="/">Dashboard</Link>
          </div>
          <div>
            <Link to="/survey">Surveys</Link>
          </div>
          <div>
            <Link to="/write">Create Survey</Link>
          </div>
          <div>
            <Link to="/member">Member</Link>
          </div>
          <div>
            <Link to="/help">Help</Link>
          </div>
        </Wrapper>
      </SidebarBlock>
    </>
  );
};

export default Sidebar;
