import React from 'react';
import styled from 'styled-components';

const MainBlock = styled.div`
  position: absolute;
  top: 4rem;
  left: 12rem;
  padding-left: 2rem;
  padding-right: 2rem;
  width: 1024px;
  margin: 0 auto;
  height: 500vh;

  @media (max-width: 1024px) {
    width: 768px;
  }
  @media (max-width: 768px) {
    width: 100%;
    left: 0;
  }
`;

const Main = ({ children, ...rest }) => {
  return <MainBlock {...rest}>{children}</MainBlock>;
};

export default Main;
