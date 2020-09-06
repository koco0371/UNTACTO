import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 100px;
  margin-bottom: 200px;
  display: flex;
  flex-direction: column;
  h2 {
    font-size: 2rem;
    font-weight: 600;
    text-align: center;
  }
  div.profile {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    div.profile-photo {
      margin: 30px;
      border-radius: 100%;
      border: 1px solid black;
      width: 150px;
      height: 150px;
      background-image: url('https://res.cloudinary.com/kennycld/image/upload/v1594889478/characters/person_image_jz3jdn.jpg');
      background-position: center center;
      background-size: cover;
    }
    h3 {
      font-size: 1.3rem;
      margin-bottom: 30px;
    }
  }
  div.infos {
    margin-top: 100px;
    display: flex;
    justify-content: space-around;
    div.info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      h2 {
        color: #3498db;
        margin-top: 20px;
        margin-bottom: 20px;
      }
      p {
        font-weight: 600;
      }
    }
  }
`;

const AboutMe = () => {
  return (
    <Container>
      <div className="profile">
        <h2>ABOUT ME</h2>
        <div className="profile-photo"></div>
        <h3>Kenny Cha</h3>
      </div>
      <h2>WHAT I DO</h2>
      <div className="infos">
        <div className="info">
          <img
            src="https://res.cloudinary.com/kennycld/image/upload/v1594889056/characters/mobile_img_xhfkmw.png"
            alt="license_img"
          />
          <h2>MOBILE APPS</h2>
          <p>React Native</p>
        </div>
        <div className="info">
          <img
            src="https://res.cloudinary.com/kennycld/image/upload/v1594889056/characters/web_img_oqu2e4.png"
            alt="license_img"
          />
          <h2>WEB APPS</h2>
          <p>REACT JS VUE JS DJANGO</p>
        </div>
        <div className="info">
          <img
            src="https://res.cloudinary.com/kennycld/image/upload/v1594889056/characters/plan_img_mvtpub.png"
            alt="license_img"
          />
          <h2>SERVICE PLANNING</h2>
          <p>UI/UX SERVICE FLOW</p>
        </div>
      </div>
    </Container>
  );
};

export default AboutMe;
