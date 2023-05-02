const { Payment_method } = require("../models");

const getAllPaymentMethods = async (req, res) => {
  try {
    const paymentList = await Payment_method.findAll({});
    res.status(201).json({paymentList});
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  getAllPaymentMethods,
};
