import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding-left: 4rem;
  padding-right: 4rem;
  width: 100%;
  height: 100%;
  margin-top: 100px;
  margin-bottom: 200px;
  @media screen and (max-width: 768px) {
    margin-bottom: 900px;
  }
  div.btns {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    div {
      cursor: pointer;
      color: white;
      margin-left: 15px;
      padding: 0.8rem;
      border-radius: 25px;
      background: #bdc3c7;
      &:last-child {
        background: #3498db;
      }
    }
  }
  h1 {
    font-size: 2rem;
    font-weight: 600;
  }
  div.form {
    height: 100%;
    margin-top: 2rem;
    display: grid;
    grid-template-columns: 30% 70%;
    @media screen and (max-width: 768px) {
      grid-template-columns: 1fr;
    }
    gap: 2rem;

    div.file-form {
      height: 100%;
      width: 100%;
      background: #ecf0f1;
      label {
        cursor: pointer;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px dotted black;
        @media screen and (max-width: 768px) {
          height: 300px;
        }
        div {
          border-radius: 25px;
          background: #3498db;
          color: white;
          padding: 1rem;
          padding-top: 1.3rem;
          padding-bottom: 1.3rem;
        }
      }
      input {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        border: 0;
      }
    }
    div.vote-form {
      height: 400px;
      width: 100%;
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      input {
        all: unset;
        border-bottom: 1px solid #95a5a6;
        font-size: 1.5rem;
      }
      select {
        font-size: 1.5rem;
      }
    }
  }
`;

const CreateVote = () => {
  return (
    <Container>
      <div className="btns">
        <div className="cancelBtn">CANCEL</div>
        <div className="uploadBtn">UPLOAD</div>
      </div>
      <h1>Create Vote</h1>
      <div className="form">
        <div className="file-form">
          <label for="file">
            <div>UPLOAD IMAGE</div>
          </label>
          <input type="file" name="file" accept="image/*" id="file" />
        </div>
        <div className="vote-form">
          <input type="text" placeholder="Vote Title" />
          <input type="text" placeholder="Description of this vote." />
          <select>
            <option>Bugs1</option>
            <option>Dinos1</option>
            <option>Animals1</option>
            <option>Flowers1</option>
            <option>Bugs2</option>
            <option>Dinos2</option>
            <option>Animals2</option>
            <option>Flowers2</option>
          </select>
          <h2>Question</h2>
          <input type="text" placeholder="option 1" />
          <input type="text" placeholder="option 2" />
          <input type="text" placeholder="option 3" />
          <input type="text" placeholder="option 4" />
        </div>
      </div>
    </Container>
  );
};

export default CreateVote;
