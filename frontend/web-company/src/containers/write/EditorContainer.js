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
    beginsAt,
    duration,
    selectedKiosk,
    survey,
    surveyError,
    user,
  } = useSelector(({ write, user }) => ({
    title: write.title,
    description: write.description,
    video: write.video,
    beginsAt: write.beginsAt,
    duration: write.duration,
    selectedKiosk: write.selectedKiosk,
    survey: write.survey,
    surveyError: write.surveyError,
    user: user.user,
  }));
  useEffect(() => {
    if (!user) {
      history.push('/login');
    }
  }, [history, user]);
  const onChangeField = useCallback(
    (payload) => dispatch(changeField(payload)),
    [dispatch],
  );
  const onPublish = () => {
    if (
      [title, description, video, beginsAt, duration, selectedKiosk].includes(
        '',
      )
    ) {
      alert('빈칸을 채워주세요');
      return;
    }
    dispatch(
      writeSurvey({
        title,
        description,
        video,
        beginsAt,
        duration,
        selectedKiosk,
      }),
    );
  };

  const onCancel = () => {
    history.goBack();
  };
  const kiosks = [
    {
      kioskId: '1',
      location: '역삼',
    },
    {
      kioskId: '2',
      location: '강남',
    },
    {
      kioskId: '3',
      location: '홍대',
    },
    {
      kioskId: '4',
      location: '신촌',
    },
    {
      kioskId: '5',
      location: '종로',
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
      beginsAt={beginsAt}
      duration={duration}
      kiosks={kiosks}
    />
  );
};

export default withRouter(EditorContainer);
