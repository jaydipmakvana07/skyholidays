import axios from 'axios';

class PackageService {
    getAllHotels() {
        const url = "http://localhost:5000/api/v1/auth/get-hotels";
        return axios.get(url);
    }
    createHotel(hotelData) {
        const url = "http://localhost:5000/api/v1/auth/create-hotel";
        return axios.post(url, hotelData);
    }

    
}

export default new PackageService();
