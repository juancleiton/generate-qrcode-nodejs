const express = require('express');
const routes = express.Router();
const QrcodeController = require('../controllers/QrcodeController');
routes.get('/', QrcodeController.gerenateQrcode);
module.exports = routes;