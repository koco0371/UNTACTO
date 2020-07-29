import client from './client';

// 설문 생성
// selectedKiosk는 해당 kiosk의 kisokId를 string으로 가지고 있음
export const writeSurvey = ({ title, description, video, selectedKiosk }) =>
  client.post('/api/surveys', { title, description, video, selectedKiosk });
