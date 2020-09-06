import client from './client';

// 설문 생성
export const writeSurvey = ({
  title,
  description,
  video,
  beginsAt,
  duration,
  selectedKiosk,
}) => {
  // console.log(title, description, video, selectedKiosk);
  const formData = new FormData();
  formData.append('title', title);
  formData.append('description', description);
  formData.append('video', video);
  formData.append('beginsAt', beginsAt);
  formData.append('duration', duration);
  formData.append('selectedKiosk', selectedKiosk);
  return client.post('/api/surveys', formData);
};

// 설문 디테일
export const readSurvey = (id) => client.get(`/api/surveys/${id}`);

// 설문 리스트
export const listSurveys = ({ companyId }) => {
  return client.get(`/api/surveys?companyId=${companyId}`);
};
