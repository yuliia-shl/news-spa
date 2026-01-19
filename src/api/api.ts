import axios from 'axios';

export const articlesAPI = axios.create({
  baseURL: 'https://api.spaceflightnewsapi.net/v4',
  timeout: 10000,
});
