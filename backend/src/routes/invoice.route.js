const { Router } = require('express');
const invoiceController = require('../controllers/invoice.controller');

const invoiceRoute = Router();

invoiceRoute.get('/invoice', invoiceController.getAll);

module.exports = invoiceRoute;
