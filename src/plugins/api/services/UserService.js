import { API_BASE_URL, fetchData } from '../apiConfig.js';

class UserService {
    constructor() {
    }

    // Получить всех пользователей
    async getAllUsers() {
        console.log(`${API_BASE_URL}/users`);
        return fetchData(`${API_BASE_URL}/users`);
    }

    //Авторизация пользователя
    async authorizationUser(login, password) {
        return fetchData(`${API_BASE_URL}/users/login?login=${login}&password=${password}`);
    }

    // Получить пользователя по ID
    async getUserById(userId) {
        return fetchData(`${API_BASE_URL}/users/${userId}`);
    }
    
}

// Класс для работы с API пользователей
const userService = new UserService(API_BASE_URL);

// Экспортируем экземпляр
export default userService;