import React from 'react';
import styled, { css } from 'styled-components';
import palette from '../../lib/styles/palette';

const StyledButton = styled.button`
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.25rem 1rem;
  color: white;
  outline: none;
  cursor: pointer;

  background: ${palette.gray[8]};
  &:hover {
    background: ${palette.gray[6]};
  }

  ${(props) =>
    props.red &&
    css`
      background: ${palette.red[8]};
      &:hover {
        background: ${palette.red[6]};
      }
    `}

  ${(props) =>
    props.indigo &&
    css`
      background: ${palette.indigo[8]};
      &:hover {
        background: ${palette.indigo[6]};
      }
    `}

  ${(props) =>
    props.fullWidth &&
    css`
      padding-top: 0.75rem;
      padding-bottom: 0.75rem;
      width: 100%;
      font-size: 1.125rem;
    `}
`;

// props들을 StyledButton으로 전달한 것을 return
const Button = (props) => <StyledButton {...props} />;

export default Button;
