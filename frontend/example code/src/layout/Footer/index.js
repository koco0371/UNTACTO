import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  background: #3498db;
  color: white;
  padding: 1rem;
  margin-top: 1rem;
  width: 100%;
  height: 100px;

  display: flex;
  justify-content: space-around;

  @media screen and (max-width: 768px) {
    height: 200px;
  }
`;

const Info = styled.div`
  li {
    line-height: 1.2;
    a {
      text-decoration: none;
      color: white;
    }
  }
`;

const Footer = () => {
  return (
    <Container>
      <Info>
        <ul>
          <li>Developer</li>
          <li>Kenny Cha</li>
        </ul>
      </Info>
      <Info>
        <ul>
          <li>
            <Link to="/terms">Privacy Policy</Link>
          </li>
          <li>
            <Link to="/aboutme">Developer Introduction</Link>
          </li>
          <li>
            <Link to="/contactus">Contact Us</Link>
          </li>
        </ul>
      </Info>
      <Info>
        <ul>
          <li>Samsung Multi Campus | CEO : Young Sang Kim</li>
          <li>212 Tehran-Ro, Gangnam-Gu, Seoul (Yeoksam-Dong 718-5 Address)</li>
          <li>Tel 02-2222-5566 | Fax 02-2233-6655</li>
        </ul>
        <p>Copyright by Multicampus Co., Ltd. All rights reserved.</p>
      </Info>
    </Container>
  );
};

export default Footer;
