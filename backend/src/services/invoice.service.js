const models = require('../database/models');

const invoiceService = {
  async getAll() {
    const allInvoices = await models.Order.findAll({
      attributes: ['id', 'orderNumber', 'emissionDate', 'value', 'orderStatusBuyer'],
      include: [
        { model: models.Buyer, as: 'buyer', attributes: ['name'] },
        { model: models.Provider,
          as: 'provider',
          attributes: ['name', 'tradingName', 'email'],
          include: [{
            model: models.Cnpj, as: 'CNPJ', attributes: ['cnpj'],
          }],
      },
      ],
    });

    return allInvoices;
  },
};

module.exports = invoiceService;
