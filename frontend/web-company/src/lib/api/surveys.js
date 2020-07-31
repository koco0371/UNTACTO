import qs from 'qs';
import client from './client';

// 설문 생성
export const writeSurvey = (formData) => client.post('/api/surveys', formData);

// 설문 디테일
export const readSurvey = (id) => client.get(`/api/surveys/${id}`);

// 설문 리스트
export const listSurveys = ({ companyName }) => {
  const queryString = qs.stringify({
    companyName,
  });
  return client.get(`/api/surveys?${queryString}`);
};
