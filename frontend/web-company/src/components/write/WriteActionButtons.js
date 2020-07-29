import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';
import Main from '../common/Main';

const WriteActionButtonsBlock = styled(Main)`
  margin-top: 780px;
  margin-bottom: 3rem;
  height: 2.125rem;
  display: flex;
  justify-content: flex-end;
  button + button {
    margin-left: 0.5rem;
  }
`;

const StyledButton = styled(Button)`
  height: 2.125rem;
  & + & {
    margin-left: 0.5rem;
  }
`;

const WriteActionButtons = ({ onCancel, onPublish }) => {
  return (
    <WriteActionButtonsBlock>
      <StyledButton indigo onClick={onPublish}>
        설문 등록
      </StyledButton>
      <StyledButton red onClick={onCancel}>
        취소
      </StyledButton>
    </WriteActionButtonsBlock>
  );
};

export default WriteActionButtons;
