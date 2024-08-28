import axios from 'axios';
import { ACCESS_TOKEN } from '../components/Authorization/constants';


const API_URL = "http://127.0.0.1:8000";
export const fetchWorkspaces = () => axios.get(`${API_URL}/api/workspaces/`);

export const addWorkspace = (workspaceData, token) => {
    return axios.post('http://127.0.0.1:8000/api/workspaces/add_workspace/', workspaceData, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
};
export const fetchProjects = (workspaceId) => axios.get(`${API_URL}/api/workspaces/projects/`);

export const addProjectAPI = (projectData, url) => {
  const token = localStorage.getItem('ACCESS_TOKEN);
  return axios.post(url, projectData, {
      headers: {
          Authorization: `Bearer ${token}`,
      },
  });
};


const apiUrl = "/choreo-apis/awbo/backend/rest-api-be2/v1.0";

const api = axios.create({
  baseURL: API_URL ? API_URL : apiUrl,
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(ACCESS_TOKEN);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;


