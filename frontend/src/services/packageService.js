import axios from "axios";
import { getApiUrl } from "../helpers/helper";

class PackageService {
  constructor() {
    this.baseUrl = getApiUrl();
  }

  createPackage(hotelData) {
    const url = `${this.baseUrl}/api/v1/auth/create-package`;
    return axios.post(url, hotelData);
  }

  getAllPackages() {
    const url = `${this.baseUrl}/api/v1/auth/get-all-packages`;
    return axios.get(url);
  }

  getLatestPackages() {
    const url = `${this.baseUrl}/api/v1/auth/get-latest-packages`;
    return axios.get(url);
  }

  getDomesticPackages() {
    const url = `${this.baseUrl}/api/v1/auth/get-domestic-packages/domestic`;
    return axios.get(url);
  }

  getInternationalPackages() {
    const url = `${this.baseUrl}/api/v1/auth/get-domestic-packages/international`;
    return axios.get(url);
  }

  getWeekendPackages() {
    const url = `${this.baseUrl}/api/v1/auth/get-weekend-packages`;
    return axios.get(url);
  }
}

export default new PackageService();
