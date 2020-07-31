import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Main from '../common/Main';

const EditorBlock = styled(Main)`
  padding-top: 5rem;
  padding-bottom: 5rem;
  .select-label {
    margin-top: 5rem;
    font-size: 1.125rem;
    font-family: 'Nanum-Gothic', -apple-system, BlinkMacSystemFont, 'Segoe UI',
      'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;
  }
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
    margin-bottom: 2rem;
    color: ${palette.gray[9]};
    font-size: 1rem;
    font-family: 'Nanum-Gothic', -apple-system, BlinkMacSystemFont, 'Segoe UI',
      'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;
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
const KioskSelect = styled.select`
  margin-top: 1rem;
  width: 200px;
  padding: 0.8em 0.5em;
  font-size: 0.875rem;
  font-family: 'Nanum-Gothic', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
    'Helvetica Neue', sans-serif;
  background: url('https://res.cloudinary.com/kennycld/image/upload/v1595989836/samples/arrowiosdownward_111110_wftel9.png')
    no-repeat 95% 50%;
  background-size: contain;
  border: 1px solid #999;
  border-radius: 0px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  cursor: pointer;
`;

const Editor = ({ onChangeField, title, description, video, kiosks }) => {
  const onChangeTitle = (e) => {
    onChangeField({ key: 'title', value: e.target.value });
  };
  const onChangeDescription = (e) => {
    onChangeField({ key: 'description', value: e.target.value });
  };
  const onChangeVideo = (e) => {
    onChangeField({ key: 'video', value: e.target.files[0] });
  };
  const onChangeSelect = (e) => {
    onChangeField({ key: 'selectedKiosk', value: e.target.value });
  };

  return (
    <EditorBlock>
      <TitleInput
        placeholder="제목을 입력하세요"
        onChange={onChangeTitle}
        value={title}
        name="title"
      />
      <DescriptionInput
        placeholder="영상에 대해 간략히 설명해주세요"
        onChange={onChangeDescription}
        value={description}
        name="description"
      />
      <VideoForm encType="multipart/form-data">
        <div className="video-label">
          <label htmlFor="video">
            <i className="fas fa-upload"></i>
            영상 업로드
          </label>
        </div>
        <input
          type="file"
          name="video"
          accept="video/*, image/*"
          id="video"
          className="video-input"
          onChange={onChangeVideo}
        />
        {video && <div className="video-name">선택된 영상: </div>}
      </VideoForm>
      <div className="select-label">Kiosk를 선택해주세요</div>
      <KioskSelect onChange={onChangeSelect} name="selectedKiosk">
        {kiosks &&
          kiosks.map((kiosk) => (
            <option key={kiosk.kioskId} value={kiosk.kioskId}>
              {kiosk.location}
            </option>
          ))}
      </KioskSelect>
    </EditorBlock>
  );
};

export default Editor;
