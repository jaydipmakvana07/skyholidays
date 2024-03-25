import express, { Router } from 'express';
import { END_POINTS, ERRORTYPES, RES_TYPES, ROLES } from '../constant/index';
import { AppError } from '../utils';
import { authRoutes } from './auth/auth.routes';
import passport from 'passport';
import { checkPermission } from '../middleware';
import { adminRoutes } from './admin/admin.routes';

class InvalidedRouter {
    handleRequest(req, res, next) {
        return next(
            new AppError(
                `${req.url} - ${RES_TYPES.BAD_URL}`,
                ERRORTYPES.NOT_FOUND,
            ),
        );
    }
}

class MainRouter {
    router: Router;
    invalidedRouter: InvalidedRouter;
    constructor() {
        this.router = express.Router();
        this.invalidedRouter = new InvalidedRouter();
    }

    setupRoutes() {
        this.router.use(END_POINTS.AUTH, authRoutes);
        this.router.use(
            END_POINTS.ADMIN,
            passport.authenticate('jwt', { session: false }),
            checkPermission([ROLES.SUPER_ADMIN]),
            adminRoutes,
        );
    }
}

const mainRouter = new MainRouter();
mainRouter.setupRoutes();

export default mainRouter.router;
