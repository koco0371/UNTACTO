// axios 인스턴스를 생성하여 사용
// API 클라이언트에 대한 공통 설정을 쉽게 하기 위함
import axios from 'axios';

const client = axios.create();

// client.defaults.baseURL = '';

export default client;
