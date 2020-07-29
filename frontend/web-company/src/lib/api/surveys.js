import qs from 'qs';
import client from './client';

// 설문 생성
export const writeSurvey = ({ title, description, video, selectedKiosk }) =>
  client.post('/api/surveys', { title, description, video, selectedKiosk });

// 설문 리스트
export const listSurveys = ({ companyName }) => {
  const queryString = qs.stringify({
    companyName,
  });
  return client.get(`/api/surveys?${queryString}`);
};
