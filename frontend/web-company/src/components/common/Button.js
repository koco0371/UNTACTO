import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import palette from '../../lib/styles/palette';

const buttonStyle = css`
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.25rem 1rem;
  color: white;
  outline: none;
  cursor: pointer;
  font-family: 'Nanum-Gothic', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
    'Helvetica Neue', sans-serif;

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

const StyledButton = styled.button`
  ${buttonStyle}
`;

const StyledLink = styled(Link)`
  ${buttonStyle}
`;

// props들을 StyledButton으로 전달한 것을 return
const Button = (props) => {
  return props.to ? (
    <StyledLink {...props} indigo={props.indigo ? 1 : 0} />
  ) : (
    <StyledButton {...props} />
  );
};

export default Button;
