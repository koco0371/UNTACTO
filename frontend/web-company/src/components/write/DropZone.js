import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const Container = styled.div`
  margin-top: 150px;
  transform: translateY(-100%);
  p {
    color: red;
    text-align: center;
  }
`;
const DropZoneBlock = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  width: 100%;
  height: 100px;
  border: 4px dashed ${palette.indigo[7]};
`;
const Message = styled.div`
  text-align: center;
  color: ${palette.indigo[7]};
  font-family: Arial;
  font-size: 20px;
  i {
    display: block;
    width: 50px;
    height: 100%;
    text-align: center;
    margin: 0 auto;
    padding-bottom: 5px;
  }
`;

const DropZone = ({ onChangeField }) => {
  const dragOver = (e) => {
    e.preventDefault();
  };

  const dragEnter = (e) => {
    e.preventDefault();
  };

  const dragLeave = (e) => {
    e.preventDefault();
  };

  const fileDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    onChangeField({ key: 'video', value: files[0] });
  };
  return (
    <Container
      onDragOver={dragOver}
      onDragEnter={dragEnter}
      onDragLeave={dragLeave}
      onDrop={fileDrop}
    >
      <DropZoneBlock>
        <Message>
          <i className="fas fa-upload fa-2x"></i>
          Drag and Drop or Click to upload
        </Message>
      </DropZoneBlock>
    </Container>
  );
};

export default DropZone;
