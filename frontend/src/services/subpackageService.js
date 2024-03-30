import axios from 'axios';

class SubpackageService {
    createSubPackage(hotelData) {
        const url = "http://localhost:5000/api/v1/auth/create-sub-packages";
        return axios.post(url, hotelData);
    }
    getSubpackages(title) {
        const url = `http://localhost:5000/api/v1/auth/get-title-sub-packages/${title}`;
        return axios.get(url);
    }
    getSubpackageDetails(sub_package_id) {
        const url = `http://localhost:5000/api/v1/auth/get-sub-id-packages/${sub_package_id}`;
        return axios.get(url);
    }
}

export default new SubpackageService();
