import client from './client';

export const readVideoPath = (surveyId) =>
  client.get(`/api/stream/${surveyId}`);
