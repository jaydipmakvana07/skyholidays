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

class AuthController {
    async login(req, res, next) {
        try {
            const {
                body: {
                    data: { email, password },
                },
            } = req;
            const result = await db[MODEL.USER].findOne({ where: { email } });
            if (result && result.authenticate(password)) {
                const payload = {
                    id: result.id,
                    Email: result.email,
                };
                const token = await TokenController.createToken(payload, next);
                await db[MODEL.USER].update(
                    { last_login: new Date() },
                    { where: { id: result.id } },
                );
                const response = {
                    success: true,
                    data: {
                        token: token,
                        id: result.id,
                        role: result.role,
                        email: result.email,
                    },
                    message: res.__('common').login,
                };
                return sendResponse(res, response);
            } else {
                return next(
                    new AppError(RES_TYPES.AUTH_FAIL, ERRORTYPES.UNAUTHORIZED),
                );
            }
        } catch (error) {
            return next(error);
        }
    }

    async signup(req, res, next) {
        try {
            const {
                body: {
                    data: { name, email },
                },
            } = req;
            const create_user = await db[MODEL.USER].create(req.body.data)
            return sendResponse(res, {
                responseType: RES_STATUS.CREATE,
                data:create_user,
                message: res.__('common').signup,
            });
        } catch (error) {
            return next(error);
        }
    }
}

export const authController = new AuthController();
