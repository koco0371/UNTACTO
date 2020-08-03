import React, { useEffect, useCallback } from 'react';
import Editor from '../../components/write/Editor';
import { useSelector, useDispatch } from 'react-redux';
import { changeField, initialize } from '../../modules/write';
import { withRouter } from 'react-router-dom';
import { writeSurvey } from '../../modules/write';

const EditorContainer = ({ history }) => {
  const dispatch = useDispatch();
  const {
    title,
    description,
    video,
    duration,
    selectedKiosk,
    survey,
    surveyError,
  } = useSelector(({ write }) => ({
    title: write.title,
    description: write.description,
    video: write.video,
    duration: write.duration,
    selectedKiosk: write.selectedKiosk,
    survey: write.survey,
    surveyError: write.surveyError,
  }));
  const onChangeField = useCallback(
    (payload) => dispatch(changeField(payload)),
    [dispatch],
  );
  const onPublish = () => {
    if ([title, description, video, duration, selectedKiosk].includes('')) {
      alert('빈칸을 채워주세요');
      return;
    }
    // const formData = new FormData();
    // formData.append('title', title);
    // formData.append('description', description);
    // formData.append('video', video);
    // formData.append('selectedKiosk', selectedKiosk);
    // for (let key of formData.entries()) {
    //   console.log(key[0] + ', ' + key[1]);
    // }
    // client.post('/api/surveys', formData);
    dispatch(
      writeSurvey({ title, description, video, duration, selectedKiosk }),
    );
  };

  const onCancel = () => {
    history.goBack();
  };
  const kiosks = [
    {
      kioskId: '1',
      location: '홍대',
    },
    {
      kioskId: '2',
      location: '신촌',
    },
    {
      kioskId: '3',
      location: '구의',
    },
    {
      kioskId: '4',
      location: '역삼',
    },
    {
      kioskId: '5',
      location: '강남',
    },
  ];

  useEffect(() => {
    if (survey) {
      // const { surveyId, user } = survey;
      history.push('/survey');
    }
    if (surveyError) {
      console.log(surveyError);
    }
    return () => {
      dispatch(initialize());
    };
  }, [dispatch, history, survey, surveyError]);

  return (
    <Editor
      onChangeField={onChangeField}
      onPublish={onPublish}
      onCancel={onCancel}
      title={title}
      description={description}
      video={video}
      duration={duration}
      kiosks={kiosks}
    />
  );
};

export default withRouter(EditorContainer);
