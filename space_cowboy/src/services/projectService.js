import axios from 'axios'

const apiClient = axios.create({
  baseURL: process.env.URL,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getProjects() {
    return apiClient.get('/projects')
  },
  getProject(id) {
    return apiClient.get('/projects/' + id)
  }
}