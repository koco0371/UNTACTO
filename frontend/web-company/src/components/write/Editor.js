import React, { useEffect } from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Main from '../common/Main';

const EditorBlock = styled(Main)`
  padding-top: 5rem;
  padding-bottom: 5rem;
`;
const TitleInput = styled.input`
  font-size: 2.5rem;
  outline: none;
  padding-bottom: 0.5rem;
  border: none;
  border-bottom: 1px solid ${palette.gray[4]};
  margin-bottom: 2rem;
  width: 100%;
`;
const VideoForm = styled.form`
  border: none;
  height: 50px;
  width: 100%;
  border: 1px solid ${palette.indigo[4]};
  &:hover {
    border: 1px solid ${palette.indigo[7]};
  }
  .video-label {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    label {
      cursor: pointer;
      height: 80%;
      width: 80%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: ${palette.indigo[4]};
      font-family: 'Nanum-Gothic', -apple-system, BlinkMacSystemFont, 'Segoe UI',
        'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
        'Helvetica Neue', sans-serif;
      &:hover {
        color: ${palette.indigo[7]};
        font-weight: bold;
      }
    }
  }
  .video-name {
    margin-top: 1rem;
    color: ${palette.gray[9]};
  }
  .video-input {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }
`;
const DescriptionInput = styled.textarea`
  border: 1px solid ${palette.gray[6]};
  padding: 0.75rem;
  margin-bottom: 2rem;
  width: 100%;
  height: 300px;
  resize: none;
  font-size: 1.125rem;
  font-family: 'Nanum-Gothic', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
    'Helvetica Neue', sans-serif;
`;

const Editor = ({ onChangeField, title, description, video }) => {
  const onChangeTitle = (e) => {
    onChangeField({ key: 'title', value: e.target.value });
  };
  const onChangeDescription = (e) => {
    onChangeField({ key: 'description', value: e.target.value });
  };
  const onChangeVideo = (e) => {
    onChangeField({ key: 'video', value: e.target.value });
  };

  return (
    <EditorBlock>
      <TitleInput
        placeholder="제목을 입력하세요"
        onChange={onChangeTitle}
        value={title}
      />
      <DescriptionInput
        placeholder="영상에 대해 간략히 설명해주세요"
        onChange={onChangeDescription}
        value={description}
      />
      <VideoForm>
        <div className="video-label">
          <label htmlFor="file">
            <i className="fas fa-upload"></i>
            영상 업로드
          </label>
        </div>
        <input
          type="file"
          name="file"
          accept="video/*"
          id="file"
          className="video-input"
          onChange={onChangeVideo}
          value={video}
        />
        {video && <div className="video-name">선택된 영상: {video}</div>}
      </VideoForm>
    </EditorBlock>
  );
};

export default Editor;
