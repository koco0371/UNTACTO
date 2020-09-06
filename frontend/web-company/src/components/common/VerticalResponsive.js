import React from 'react';
import styled from 'styled-components';

const VerticalResponsiveBlock = styled.div`
  padding-top: 3rem;
  padding-bottom: 1rem;
  height: 968px;

  @media (max-width: 768px) {
    height: 5rem;
  }
`;

const VerticalResponsive = ({ children, ...rest }) => {
  return (
    <VerticalResponsiveBlock {...rest}>{children}</VerticalResponsiveBlock>
  );
};

export default VerticalResponsive;
