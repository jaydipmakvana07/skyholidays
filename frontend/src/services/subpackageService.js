import axios from "axios";
import { getApiUrl } from "../helpers/helper";

class SubpackageService {
  constructor() {
    this.baseUrl = getApiUrl();
  }

  createSubPackage(hotelData) {
    const url = `${this.baseUrl}/api/v1/auth/create-sub-packages`;
    return axios.post(url, hotelData);
  }
  getSubpackages(title) {
    const url = `${this.baseUrl}/api/v1/auth/get-title-sub-packages/${title}`;
    return axios.get(url);
  }
  getSubpackageDetails(sub_package_id) {
    const url = `${this.baseUrl}/api/v1/auth/get-sub-id-packages/${sub_package_id}`;
    return axios.get(url);
  }
}

export default new SubpackageService();
