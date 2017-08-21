"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const fs_1 = require("fs");
const path = require("path");
class APIDocs {
    constructor() {
        this.router = express_1.Router();
    }
    getRouter() {
        const docsJsonPath = '/api-docs.json';
        this.router.get(docsJsonPath, (req, res) => {
            let config = this.getConfig(this.getHost(req, false));
            const swaggerUiHandler = swaggerUi.setup(config);
            res.setHeader('Content-Type', 'application/x-www-form-urlencoded');
            res.send(config);
        });
        this.router.use('/docs', swaggerUi.serve, (req, res, next) => {
            let config = this.getConfig(this.getHost(req, false));
            const swaggerUiHandler = swaggerUi.setup(this.getConfig(config));
            if (!req.query.url) {
                res.redirect(`/swagger/docs?url=${this.getHost(req, true)}/swagger${docsJsonPath}`);
            }
            else {
                swaggerUiHandler(req, res, next);
            }
        });
        return this.router;
    }
    getHost(req, needProtype) {
        return `${needProtype ? 'http://' : ''}${req.headers.host}`;
    }
    getConfig(host) {
        const apiList = APIDocs.getAllRoutes(path.join(__dirname, './../../docs/api-docs'), null);
        const spec = swaggerJSDoc({
            swaggerDefinition: {
                info: {
                    title: 'Education',
                    version: '1.0.0'
                },
                host: host,
                basePath: '/api/',
                produces: ['application/json'],
                consumes: ['application/x-www-form-urlencoded', 'application/json'],
                securityDefinitions: {
                    jwt: {
                        type: 'apiKey',
                        name: 'Authorization',
                        in: 'header'
                    }
                },
                security: [
                    { jwt: [] }
                ]
            },
            apis: apiList
        });
        return spec;
    }
    static getAllRoutes(dir, filelist) {
        const _files = fs_1.readdirSync(dir);
        filelist = filelist || [];
        _files
            .map(function (file) {
            // filter out .map and hidden files
            if (file.search(".map") < 0 && file.search(/^\./) < 0) {
                if (fs_1.statSync(path.join(dir, file)).isDirectory()) {
                    filelist = APIDocs.getAllRoutes(path.join(dir, file), filelist);
                }
                else {
                    if (file.search(".yaml") > 0) {
                        filelist.push(path.join(dir, file));
                    }
                }
            }
        });
        return filelist;
    }
}
exports.APIDocs = APIDocs;