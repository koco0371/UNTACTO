import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const CustomerAuthTemplateBlock = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background: ${palette.indigo[1]};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const WhiteBox = styled.div`
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.025);
  padding: 2rem;
  height: 480px;
  width: 90%;
  background: white;
  border-radius: 2px;
`;

const CustomerAuthTemplate = ({ children }) => {
  return (
    <CustomerAuthTemplateBlock>
      <WhiteBox>{children}</WhiteBox>
    </CustomerAuthTemplateBlock>
  );
};

export default CustomerAuthTemplate;
