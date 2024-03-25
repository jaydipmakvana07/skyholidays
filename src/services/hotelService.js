import axios from 'axios';

class PackageService {
    getAllHotels() {
        const url = "http://localhost:3000/hotels";
        return axios.get(url);
    }

    
}

export default new PackageService();
