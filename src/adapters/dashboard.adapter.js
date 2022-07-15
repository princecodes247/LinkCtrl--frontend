import { get, post } from './xhr';

export function getProject() {
  return get('someUrl');
}

export function getProjectsByUser() {
  return get('someUrl');
}

export function createNewProject(requestData) {
  return post('someUrl', requestData);
}
