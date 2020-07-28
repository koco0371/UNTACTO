import client from './client';

// API 함수들

// 로그인
export const login = ({ email, password }) =>
  client.post('/api/auth/login', { email, password });

// 회원가입
export const signup = ({ email, companyName, password }) =>
  client.post('/api/auth/signup', { email, companyName, password });

// 로그인 상태 확인
export const check = () => client.get('/api/auth/check');

// 로그아웃
export const logout = () => client.post('/api/auth/logout');
