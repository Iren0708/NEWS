import { API_BASE_URL, fetchData } from '@/plugins/api/apiConfig.js';

export async function getNewsList() {
  return fetchData(`${API_BASE_URL}/news`);
}