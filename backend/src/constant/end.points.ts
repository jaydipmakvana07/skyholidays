export enum END_POINTS {
    BLANK = '/',
    AWS = '/aws',
    ENC_DEC = '/api/v1/enc-dec',
    MAIN = '/api/v1',
    AUTH = '/auth',
    ALL = '*',
    USER = '/user',
    ADMIN = '/admin',
    GET_USERS = '/get-users',
    DELETE_USER = '/delete-user/:id',
    EDIT_USER = '/edit-user/:id',
    CRAETE_USER = '/create-user',
    LOGIN = '/login',
    SIGNUP = '/signup',
    CREATE_HOTEL = '/create-hotel',
    DELETE_HOTEL = '/delete-hotel/:id',
    UPDATE_HOTEL = '/update-hotel/:id',
    GET_HOTEL = '/get-hotels',
    CREATE_PACKAGES = '/create-package',
    UPDATE_PACKAGES = '/update-package/:id',
    GET_PACKAGES = '/get-all-packages',
    DELETE_PACKAGES = '/delete-package/:id',
    GET_DOMESTIC_PACKAGES = '/get-domestic-packages/:type',
    GET_LATEST_PACKAGES = '/get-latest-packages',
    GET_WEEKEND_PACKAGES = '/get-weekend-packages',
    CREATE_SUB_PACKAGES = '/create-sub-packages',
    UPDATE_SUB_PACKAGES = '/update-sub-packages/:id',
    DELETE_SUB_PACKAGES = '/delete-sub-packages/:id',
    GET_TITLE_SUB_PACKAGES = '/get-title-sub-packages/:title',
    GET_SUB_PACKAGES = '/get-sub-packages',
    GET_SUB_ID_PACKAGES = '/get-sub-id-packages/:id',
}
