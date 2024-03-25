import { db } from '../../model';
import dotenv from 'dotenv';
dotenv.config();
import { ERRORTYPES, MODEL, RES_STATUS } from '../../constant';
import { sendResponse } from '../../utils';

class SubPackagesController {
    async create_sub_package(req, res, next) {
        try {
            const create_hotel = await db[MODEL.SUB_PACAKGES].create(
                req.body.data,
            );
            return sendResponse(res, {
                responseType: RES_STATUS.CREATE,
                data: create_hotel,
                message: res.__('hotel').create_hotel,
            });
        } catch (error) {
            return next(error);
        }
    }

    async delete_sub_package(req, res, next) {
        try {
            const {
                params: { id },
            } = req;

            const delete_hotel = await db[MODEL.SUB_PACAKGES].destroy({
                where: { sub_package_id: id },
            });
            return sendResponse(res, {
                responseType: RES_STATUS.DELETE,
                message: res.__('hotel').delete_hotel,
            });
        } catch (error) {
            return next(error);
        }
    }

    async get_sub_packages(req, res, next) {
        try {
            const get_hotels = await db[MODEL.SUB_PACAKGES].findAll();
            return sendResponse(res, {
                responseType: RES_STATUS.GET,
                data: get_hotels,
                message: res.__('hotel').get_hotels,
            });
        } catch (error) {
            return next(error);
        }
    }

    async get_by_id_packages(req, res, next) {
        try {
            const {
                params: { id },
            } = req;
            const get_hotels = await db[MODEL.SUB_PACAKGES].findAll({
                where: { sub_package_id: id },
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

    async get_title_sub_packages(req, res, next) {
        try {
            const {
                params: { title },
            } = req;
            const get_hotels = await db[MODEL.SUB_PACAKGES].findAll({
                where: { title: title },
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

            const update_hotel = await db[MODEL.SUB_PACAKGES].update(
                req.body.data,
                {
                    where: { sub_package_id: id },
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

export const subPackagesController = new SubPackagesController();
