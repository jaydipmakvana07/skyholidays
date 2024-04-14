import axios from "axios";
import { getApiUrl } from "../helpers/helper";

class PackageService {
  constructor() {
    this.baseUrl = getApiUrl();
  }

  getAllHotels() {
    const url = `${this.baseUrl}/api/v1/auth/get-hotels`;
    return axios.get(url);
  }
  createHotel(hotelData) {
    const url = `${this.baseUrl}/api/v1/auth/create-hotel`;
    return axios.post(url, hotelData);
  }
}

export default new PackageService();
