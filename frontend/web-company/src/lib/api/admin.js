import client from './client';

// surveys
export const adminListSurveys = () => client.get('/api/admin/surveys');

export const adminDeleteSurvey = (surveyId) =>
  client.delete(`/api/admin/surveys/${surveyId}`);

// users(companies)
export const adminListUsers = () => client.get('/api/admin/users');

export const adminDeleteUser = (userId) =>
  client.delete(`/api/admin/users/${userId}`);

// customers
export const adminListCustomers = () => client.get('/api/admin/customers');

export const adminDeleteCustomer = (customerId) =>
  client.delete(`/api/admin/customers/${customerId}`);

// kiosks
export const adminListKiosks = () => client.get('/api/admin/kiosks');

/* 

to-do

export const adminReadSurvey = (surveyId) =>
  client.get(`/api/admin/surveys/${surveyId}`);


export const adminAddKiosk = ({ location }) =>
  client.post('/api/admin/kiosks', { location });

*/
