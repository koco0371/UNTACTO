import client from './client';

// 로그인
export const customerLogin = ({ phoneNumber, gender, age }) =>
  client.post('/api/customer/login', { phoneNumber, gender, age });

// 체크
export const customerCheck = () => client.get('/api/customer/check');

// 로그아웃
export const customerLogout = () => client.get('/api/customer/logout');

// 포인트 사용 (추후)
