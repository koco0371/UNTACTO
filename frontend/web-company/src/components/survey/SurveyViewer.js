import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Main from '../common/Main';
import AnalysisViewerContainer from '../../containers/survey/AnalysisViewerContainer';

const SurveyViewerBlock = styled(Main)`
  margin-top: 4rem;
  height: calc(100% - 8rem);
`;
const SurveyHead = styled.div`
  border-bottom: 1px solid ${palette.gray[2]};
  padding-bottom: 3rem;
  margin-bottom: 3rem;
  h1 {
    font-size: 3rem;
    line-height: 1.5;
    margin: 0;
  }
`;
const Subinfo = styled.div`
  margin-top: 1rem;
  color: ${palette.gray[6]};
  span + span:before {
    color: ${palette.gray[5]};
    padding-left: 0.25rem;
    padding-right: 0.25rem;
    content: '\\B7';
  }
`;
const Kiosk = styled.div`
  margin-top: 0.5rem;
  display: inline-block;
  color: ${palette.indigo[7]};
  text-decoration: none;
  margin-right: 0.5rem;
  &:hover {
    color: ${palette.indigo[6]};
  }
`;
const SurveyContent = styled.div`
  h2 {
    font-size: 1.3125rem;
  }
  p {
    font-size: 1rem;
    color: ${palette.gray[8]};
  }
`;
const AnalysisContent = styled.div`
  h2 {
    font-size: 1.3125rem;
  }
  p {
    font-size: 1rem;
    color: ${palette.gray[8]};
  }
`;

// const SurveyViewer = ({ survey, error, loading }) => {
// if (error) {
//   if (error.response && error.response.status === 404) {
//     return <SurveyViewerBlock>존재하지 않는 설문입니다.</SurveyViewerBlock>;
//   }
//   return <SurveyViewerBlock>오류가 발생했습니다.</SurveyViewerBlock>;
// }
// if (loading || !survey) {
//   return null;
// }

const SurveyViewer = () => {
  const survey = {
    title: '예시 설문',
    user: {
      companyName: 'kenny company',
      userId: 1,
    },
    createdAt: '2020-07-30',
    kiosk: {
      kioskId: 1,
      location: '역삼',
    },
    description: '이런저런 설문입니다',
    answers: [],
  };

  const { title, user, createdAt, kiosk, description } = survey;
  return (
    <SurveyViewerBlock>
      <SurveyHead>
        <h1>{title}</h1>
        <Subinfo>
          <span>
            <b>{user.companyName}</b>
          </span>
          <span>{new Date(createdAt).toLocaleDateString()}</span>
        </Subinfo>
        <Kiosk>위치: {kiosk.location}</Kiosk>
      </SurveyHead>
      <SurveyContent>
        <h2>description</h2>
        <p>{description}</p>
      </SurveyContent>
      <AnalysisContent>
        <AnalysisViewerContainer />
      </AnalysisContent>
    </SurveyViewerBlock>
  );
};

export default SurveyViewer;
