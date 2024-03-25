import { END_POINTS } from '../../constant';
import BaseRoute from '../base.routes';
import { adminController } from '../../controller/admin';

class AdminRoutes extends BaseRoute {
    async initializeRoutes() {
        
    }
}
export const adminRoutes = new AdminRoutes().router;
