import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin-top: 300px;
  margin-bottom: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h1 {
    font-size: 2.5rem;
    font-weight: 600;
    text-align: center;
    margin-bottom: 100px;
  }
  div.contact-infos {
    width: 100%;
    display: flex;
    justify-content: center;
    div.contact-info {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      &:not(:first-child) {
        margin-left: 5rem;
      }
      h3 {
        margin-top: 30px;
        font-weight: 600;
        font-size: 1.5rem;
      }
      p {
        margin-top: 30px;
        font-weight: 600;
      }
    }
  }
`;

const ContactUs = () => {
  return (
    <Container>
      <h1>Contact Us</h1>
      <div className="contact-infos">
        <div className="contact-info">
          <img src="https://res.cloudinary.com/kennycld/image/upload/v1594909197/characters/contact_us_img_1_ypdby0.png" />
          <h3>CALL</h3>
          <p>02-6622-3300</p>
        </div>
        <div className="contact-info">
          <img src="https://res.cloudinary.com/kennycld/image/upload/v1594909197/characters/contact_us_img_2_aassep.png" />
          <h3>E-MAIL</h3>
          <p>help@samsungsupport.com</p>
        </div>
        <div className="contact-info">
          <img src="https://res.cloudinary.com/kennycld/image/upload/v1594909197/characters/contact_us_img_3_lcsngh.png" />
          <h3>FAX</h3>
          <p>02-6622-3300</p>
        </div>
        <div className="contact-info">
          <img src="https://res.cloudinary.com/kennycld/image/upload/v1594909197/characters/contact_us_img_4_puhvvk.png" />
          <h3>ADDRESS</h3>
          <p>
            212 Tehran-Ro, Gangnam-Gu, Seoul
            <br />
            (Yeoksam-Dong 718-5 Address)
          </p>
        </div>
      </div>
    </Container>
  );
};

export default ContactUs;
