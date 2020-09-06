import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Button from '../common/Button';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import DropZone from './DropZone';

const EditorBlock = styled.form`
  position: absolute;
  top: 8rem;
  left: 12rem;
  padding-left: 5rem;
  padding-right: 5rem;
  width: 1600px;
  margin: 0 auto;
  height: calc(100% - 8rem);

  .select-label {
    margin-top: 2rem;
    font-size: 1.125rem;
    font-family: 'Nanum-Gothic', -apple-system, BlinkMacSystemFont, 'Segoe UI',
      'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;
  }
  .date-label {
    font-size: 1.125rem;
    font-family: 'Nanum-Gothic', -apple-system, BlinkMacSystemFont, 'Segoe UI',
      'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;
  }

  .video-title {
    position: relative;
    top: 25px;
    font-size: 1.25rem;
  }

  @media (max-width: 1600px) {
    width: 1200px;
  }
  @media (max-width: 1400px) {
    width: 1024px;
  }
  @media (max-width: 1024px) {
    width: 768px;
  }
  @media (max-width: 768px) {
    width: 100%;
    left: 0;
    padding-left: 2rem;
    padding-right: 2rem;
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
const VideoInput = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
`;
const DescriptionInput = styled.textarea`
  border: 1px solid ${palette.gray[6]};
  padding: 0.75rem;
  /* margin-bottom: 2rem; */
  width: 100%;
  height: 300px;
  resize: none;
  font-size: 1.125rem;
  font-family: 'Nanum-Gothic', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
    'Helvetica Neue', sans-serif;
`;
const DurationInput = styled.input`
  font-size: 1rem;
  outline: none;
  padding-bottom: 0.5rem;
  border: none;
  border-bottom: 1px solid ${palette.gray[4]};
  width: 100%;
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
const WriteActionButtonsBlock = styled.div`
  height: 2.125rem;
  display: flex;
  justify-content: flex-end;
  button + button {
    margin-left: 0.5rem;
  }
  margin-bottom: 2rem;
`;
const StyledButton = styled(Button)`
  height: 2.125rem;
  & + & {
    margin-left: 0.5rem;
  }
`;
const StyledCalendar = styled(Calendar)`
  margin-top: 1rem;
  margin-bottom: 2rem;
`;

const Editor = ({
  onChangeField,
  onPublish,
  onCancel,
  title,
  description,
  video,
  beginsAt,
  duration,
  kiosks,
}) => {
  const onChangeTitle = (e) => {
    onChangeField({ key: 'title', value: e.target.value });
  };
  const onChangeDescription = (e) => {
    onChangeField({ key: 'description', value: e.target.value });
  };
  const onChangeVideo = (e) => {
    onChangeField({ key: 'video', value: e.target.files[0] });
  };
  const onChangeBegisAt = (date) => {
    onChangeField({ key: 'beginsAt', value: date });
  };
  const onChangeDuration = (e) => {
    onChangeField({ key: 'duration', value: e.target.value });
  };
  const onChangeSelect = (e) => {
    onChangeField({ key: 'selectedKiosk', value: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    onPublish();
  };

  return (
    <EditorBlock
      encType="multipart/form-data"
      method="post"
      onSubmit={onSubmit}
    >
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

      <label htmlFor="video">
        <div className="video-title">선택된 영상: {video?.name}</div>
        <DropZone onChangeField={onChangeField} />
      </label>
      <VideoInput
        type="file"
        name="video"
        accept="video/*, image/*"
        id="video"
        className="video-input"
        onChange={onChangeVideo}
      ></VideoInput>
      <div className="date-block">
        <div className="date-label">설문 시작일을 선택해주세요</div>
        <StyledCalendar
          name="beginsAt"
          onChange={onChangeBegisAt}
          value={beginsAt}
        />
        <DurationInput
          placeholder="설문을 진행할 기간을 입력하세요 (일 단위)"
          onChange={onChangeDuration}
          value={duration}
          name="duration"
        ></DurationInput>
      </div>
      <div className="select-label">Kiosk를 선택해주세요</div>
      <KioskSelect onChange={onChangeSelect} name="selectedKiosk">
        {kiosks &&
          kiosks.map((kiosk) => (
            <option key={kiosk.kioskId} value={kiosk.kioskId}>
              {kiosk.location}
            </option>
          ))}
      </KioskSelect>
      <WriteActionButtonsBlock>
        <StyledButton indigo type="submit">
          설문 등록
        </StyledButton>
        <StyledButton red onClick={onCancel}>
          취소
        </StyledButton>
      </WriteActionButtonsBlock>
    </EditorBlock>
  );
};

export default Editor;
