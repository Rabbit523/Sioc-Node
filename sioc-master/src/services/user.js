import Http from './http';


export default class UserService {
    static async getProfile() {
        const userProfile = await Http.get('api/users/profile');
        return (userProfile);
    }

    static async save(user) {
        if (user._id) {
            return Http.put(`api/users/${user._id}`, {user});
        }
        const result = await Http.post('api/users', {user});
        return result;
    }
}
