import React from 'react';
import styled from 'styled-components';

const MainBlock = styled.div`
  position: absolute;
  top: 4rem;
  left: 12rem;
  padding-left: 5rem;
  padding-right: 5rem;
  width: 1600px;
  margin: 0 auto;
  height: calc(100% - 4rem);

  @media (max-width: 1600px) {
    width: 1200px;
  }
  @media (max-width: 1400px) {
    width: 1024px;
  }
  @media (max-width: 1024px) {
    width: 768px;
  }
  @media (max-width: 768px) {
    width: 100%;
    left: 0;
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;

const Main = ({ children, ...rest }) => {
  return <MainBlock {...rest}>{children}</MainBlock>;
};

export default Main;
