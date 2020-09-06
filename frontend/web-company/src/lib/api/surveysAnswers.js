import client from './client';

// 개별설문 응답
export const readSurveyAnswer = (id) => client.get(`/api/answers/${id}`);

// 회사별 전체설문 응답
export const readSurveysAnswers = ({ companyId }) => {
  return client.get(`/api/answers?companyId=${companyId}`);
};
