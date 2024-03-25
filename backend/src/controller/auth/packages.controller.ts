import { db } from '../../model';
import dotenv from 'dotenv';
dotenv.config();
import { ERRORTYPES, MODEL, RES_STATUS } from '../../constant';
import { sendResponse } from '../../utils';

class PackagesController {
    async create_package(req, res, next) {
        try {
            const create_hotel = await db[MODEL.PACKAGES].create(req.body.data);
            return sendResponse(res, {
                responseType: RES_STATUS.CREATE,
                data: create_hotel,
                message: res.__('hotel').create_hotel,
            });
        } catch (error) {
            return next(error);
        }
    }

    async delete_package(req, res, next) {
        try {
            const {
                params: { id },
            } = req;

            const delete_hotel = await db[MODEL.PACKAGES].destroy({
                where: { package_id: id },
            });
            return sendResponse(res, {
                responseType: RES_STATUS.DELETE,
                message: res.__('hotel').delete_hotel,
            });
        } catch (error) {
            return next(error);
        }
    }

    async get_packages(req, res, next) {
        try {
            const get_hotels = await db[MODEL.PACKAGES].findAll();
            return sendResponse(res, {
                responseType: RES_STATUS.GET,
                data: get_hotels,
                message: res.__('hotel').get_hotels,
            });
        } catch (error) {
            return next(error);
        }
    }

    async get_domestic_packages(req, res, next) {
        try {
            const {
                params: { type },
            } = req;
            const get_hotels = await db[MODEL.PACKAGES].findAll({
                where: { packagetype: type },
            });
            return sendResponse(res, {
                responseType: RES_STATUS.GET,
                data: get_hotels,
                message: res.__('hotel').get_hotels,
            });
        } catch (error) {
            return next(error);
        }
    }

    async get_latest_packages(req, res, next) {
        try {
            const get_hotels = await db[MODEL.PACKAGES].findAll({
                where: { is_latest: 1 },
            });
            return sendResponse(res, {
                responseType: RES_STATUS.GET,
                data: get_hotels,
                message: res.__('hotel').get_hotels,
            });
        } catch (error) {
            return next(error);
        }
    }

    async get_weekend_packages(req, res, next) {
        try {
            const get_hotels = await db[MODEL.PACKAGES].findAll({
                where: { is_weekend: 1 },
            });
            return sendResponse(res, {
                responseType: RES_STATUS.GET,
                data: get_hotels,
                message: res.__('hotel').get_hotels,
            });
        } catch (error) {
            return next(error);
        }
    }

    async update_packages(req, res, next) {
        try {
            const {
                params: { id },
            } = req;

            const update_hotel = await db[MODEL.PACKAGES].update(
                req.body.data,
                {
                    where: { package_id: id },
                },
            );

            return sendResponse(res, {
                responseType: RES_STATUS.UPDATE,
                data: update_hotel,
                message: res.__('hotel').update_hotel,
            });
        } catch (error) {
            return next(error);
        }
    }
}

export const packagesController = new PackagesController();
