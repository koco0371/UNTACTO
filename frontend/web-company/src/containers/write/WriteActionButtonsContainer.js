import React, { useEffect } from 'react';
import WriteActionButtons from '../../components/write/WriteActionButtons';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { writeSurvey } from '../../modules/write';

const WriteActionButtonsContainer = ({ history }) => {
  const dispatch = useDispatch();
  const {
    title,
    description,
    video,
    selectedKiosk,
    survey,
    surveyError,
  } = useSelector(({ write }) => ({
    title: write.title,
    description: write.description,
    video: write.video,
    selectedKiosk: write.selectedKiosk,
    survey: write.survey,
    surveyError: write.surveyError,
  }));

  const onPublish = () => {
    if ([title, description, video, selectedKiosk].includes('')) {
      alert('빈칸을 채워주세요');
      return;
    }
    dispatch(
      writeSurvey({
        title,
        description,
        video,
        selectedKiosk,
      }),
    );
  };

  const onCancel = () => {
    history.goBack();
  };

  useEffect(() => {
    if (survey) {
      // const {surveyId, user} = post
      history.push('/survey');
    }
    if (surveyError) {
      console.log(surveyError);
    }
  }, [history, survey, surveyError]);
  return <WriteActionButtons onPublish={onPublish} onCancel={onCancel} />;
};

export default withRouter(WriteActionButtonsContainer);
