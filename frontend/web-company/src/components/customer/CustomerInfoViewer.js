import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Main from '../common/Main';
import Button from '../common/Button';

const CustomerInfoViewerBlock = styled(Main)`
  left: 0;
  top: 0;
  margin-top: 8rem;
  height: calc(100% - 12rem);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;
const CustomerInfoContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-size: 2.5rem;
  }
  h2 {
    display: inline-block;
    font-size: 2rem;
  }
  .icon-point,
  .icon-mobile {
    margin-right: 1rem;
  }
  .icon-point {
    color: ${palette.yellow[4]};
  }
`;
const StyledButton = styled(Button)`
  margin-top: 2rem;
  width: 300px;
  height: 2.875rem;
  font-size: 1.25rem;
`;

const CustomerInfoViewer = ({ customer }) => {
  const { phoneNumber, point } = customer;
  const newPhoneNumber = `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(
    4,
    5,
  )}***-***${phoneNumber.slice(10)}`;
  return (
    <CustomerInfoViewerBlock>
      {customer && (
        <CustomerInfoContent>
          <h1>{newPhoneNumber}</h1>
          <h2>
            <i className="fas fa-coins  icon-point"></i>
            {point} 포인트
          </h2>
          <StyledButton>포인트 사용</StyledButton>
        </CustomerInfoContent>
      )}
    </CustomerInfoViewerBlock>
  );
};

export default CustomerInfoViewer;
