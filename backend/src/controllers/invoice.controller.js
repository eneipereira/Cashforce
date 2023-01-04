const invoiceService = require('../services/invoice.service');

const invoiceController = {
  /** @type {import('express').RequestHandler} */
  async getAll(_req, res) {
    const allInvoices = await invoiceService.getAll();

    res.status(200).json(allInvoices);
  },
};

module.exports = invoiceController;
