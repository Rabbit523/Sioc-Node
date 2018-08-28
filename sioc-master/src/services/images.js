import Http from './http';

export default class ImagesService {
    static async delete(token) {
        return Http.deleteImg('https://api.cloudinary.com/v1_1/sioc/delete_by_token', token);
    }
}
