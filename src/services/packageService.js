import axios from 'axios';

class PackageService {
    getAllPackages() {
        const url = "http://localhost:5000/api/v1/auth/get-all-packages";
        return axios.get(url);
    }

    getLatestPackages() {
        const url = "http://localhost:5000/api/v1/auth/get-latest-packages";
        return axios.get(url);
    }

    getDomesticPackages() {
        const url = "http://localhost:5000/api/v1/auth/get-domestic-packages";
        return axios.get(url);
    }

    getInternationalPackages() {
        const url = "http://localhost:5000/api/v1/auth/get-domestic-packages";
        return axios.get(url);
    }

    getWeekendPackages() {
        const url = "http://localhost:5000/api/v1/auth/get-weekend-packages";
        return axios.get(url);
    }
}

export default new PackageService();