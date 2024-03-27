import axios from 'axios';

class PackageService {
    getAllHotels() {
        const url = "http://localhost:5000/api/v1/auth/get-hotels";
        return axios.get(url);
    }

    
}

export default new PackageService();
