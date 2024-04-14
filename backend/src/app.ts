import express, { Express } from 'express';
import './config/database';
import dotenv from 'dotenv';
dotenv.config();
import { logger } from './logger/logger';
import { ErrorHandler, paginationMiddleware } from './middleware';
import './config/passport.jwt';
import routes from './routes/index';
import passport from 'passport';
import cors from 'cors';
import session from 'express-session';
import { END_POINTS } from './constant';
import i18n from './locales/index';
import https from 'https';
import fs from 'fs';

const port = process.env.PORT_SERVER || 8000;

class AppServer {
    constructor() {
        const app: Express = express();
        app.use(express.urlencoded({ extended: true }));
        app.use(express.json());
        app.use(
            cors({
                origin: ['https://www.skyholidays.org', 'http://www.skyholidays.org','http://15.207.214.200','http://127.0.0.1:5173'],
                optionsSuccessStatus: 200,
                credentials: true,
            }),
        );
        app.use(
            session({
                secret: process.env.SESSION_SECERET,
                resave: false,
                saveUninitialized: true,
            }),
        );
        app.use(i18n.init);
        app.use(passport.initialize());
        app.use(passport.session());
        app.use(paginationMiddleware);
        app.use(END_POINTS.MAIN, routes);
        app.use(ErrorHandler);

        // Read the certificate and key files
        const privateKey = fs.readFileSync('www.skyholidays.org-key.pem', 'utf8');
        const certificate = fs.readFileSync('www.skyholidays.org-crt.pem', 'utf8');
        const credentials = { key: privateKey, cert: certificate };

        // Create HTTPS server
        const httpsServer = https.createServer(credentials, app);

        // Start listening on the HTTPS port
        httpsServer.listen(port, () => {
            logger.info(`🚀 Server is listening on Port:- ${port}`);
        });
    }
}

new AppServer();
