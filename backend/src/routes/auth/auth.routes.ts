import { loginValidation, signupValidation } from '../../validation/index';
import {
    authController,
    hotelsController,
    packagesController,
    subPackagesController,
} from '../../controller/auth';
import BaseRoute from '../base.routes';
import { END_POINTS, ROLES } from '../../constant/index';

class AuthRoutes extends BaseRoute {
    async initializeRoutes() {
        this.router.post(
            END_POINTS.LOGIN,
            loginValidation,
            authController.login,
        );

        this.router.post(
            END_POINTS.SIGNUP,
            signupValidation,
            authController.login,
        );
        this.router.post(
            END_POINTS.CREATE_HOTEL,
            hotelsController.create_hotel,
        );
        this.router.get(END_POINTS.GET_HOTEL, hotelsController.get_hotels);
        this.router.put(END_POINTS.UPDATE_HOTEL, hotelsController.update_hotel);
        this.router.delete(
            END_POINTS.DELETE_HOTEL,
            hotelsController.delete_hotel,
        );
        this.router.post(
            END_POINTS.CREATE_PACKAGES,
            packagesController.create_package,
        );
        this.router.put(
            END_POINTS.UPDATE_PACKAGES,
            packagesController.update_packages,
        );
        this.router.get(
            END_POINTS.GET_PACKAGES,
            packagesController.get_packages,
        );
        this.router.get(
            END_POINTS.GET_DOMESTIC_PACKAGES,
            packagesController.get_domestic_packages,
        );
        this.router.get(
            END_POINTS.GET_LATEST_PACKAGES,
            packagesController.get_latest_packages,
        );
        this.router.get(
            END_POINTS.GET_WEEKEND_PACKAGES,
            packagesController.get_weekend_packages,
        );
        this.router.delete(
            END_POINTS.DELETE_PACKAGES,
            packagesController.delete_package,
        );
        this.router.post(
            END_POINTS.CREATE_SUB_PACKAGES,
            subPackagesController.create_sub_package,
        );
        this.router.put(
            END_POINTS.UPDATE_SUB_PACKAGES,
            subPackagesController.update_packages,
        );
        this.router.delete(
            END_POINTS.DELETE_SUB_PACKAGES,
            subPackagesController.delete_sub_package,
        );
        this.router.get(
            END_POINTS.GET_SUB_PACKAGES,
            subPackagesController.get_sub_packages,
        );
        this.router.get(
            END_POINTS.GET_SUB_ID_PACKAGES,
            subPackagesController.get_by_id_packages,
        );
        this.router.get(
            END_POINTS.GET_TITLE_SUB_PACKAGES,
            subPackagesController.get_title_sub_packages,
        );
    }
}
export const authRoutes = new AuthRoutes().router;
