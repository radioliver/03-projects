import apiClient from '../utils/apiCliets.js';

const urlFragment = 'users';

export async function getUsers() {
    const response = await apiClient.get(urlFragment);
    return response.data

}