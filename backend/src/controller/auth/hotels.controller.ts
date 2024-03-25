import { db } from '../../model';
import dotenv from 'dotenv';
dotenv.config();
import {
    ERRORTYPES,
    MODEL,
    RES_STATUS,
    RES_TYPES,
    ROLES,
} from '../../constant';
import { AppError, sendResponse } from '../../utils';
import { TokenController } from '../../config/passport.jwt';

class HotelsController {
    async create_hotel(req, res, next) {
        try {
            const {
                body: {
                    data: { email, password },
                },
            } = req;
            const create_hotel = await db[MODEL.HOTEL].create(req.body.data);
            return sendResponse(res, {
                responseType: RES_STATUS.CREATE,
                data: create_hotel,
                message: res.__('hotel').create_hotel,
            });
        } catch (error) {
            return next(error);
        }
    }

    async delete_hotel(req, res, next) {
        try {
            const {
                params: { id },
            } = req;

            const delete_hotel = await db[MODEL.HOTEL].destroy({
                where: { hotel_id: id },
            });
            return sendResponse(res, {
                responseType: RES_STATUS.DELETE,
                message: res.__('hotel').delete_hotel,
            });
        } catch (error) {
            return next(error);
        }
    }

    async get_hotels(req, res, next) {
        try {
            const get_hotels = await db[MODEL.HOTEL].findAll();
            return sendResponse(res, {
                responseType: RES_STATUS.GET,
                data: get_hotels,
                message: res.__('hotel').get_hotels,
            });
        } catch (error) {
            return next(error);
        }
    }

    async update_hotel(req, res, next) {
        try {
            const {
                params: { id },
            } = req;

            const update_hotel = await db[MODEL.HOTEL].update(req.body.data, {
                where: { hotel_id: id },
            });

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

export const hotelsController = new HotelsController();
