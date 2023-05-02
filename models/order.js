'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Shipper, Shipping_partner, Customer, Payment_method, Order_detail}) {
      this.belongsTo(Shipper, { foreignKey: "id_shipper" });
      this.belongsTo(Shipping_partner, { foreignKey: "id_shipping_partner" });
      this.belongsTo(Customer, { foreignKey: "id_customer" });
      this.belongsTo(Payment_method, { foreignKey: "id_payment" });
      this.hasOne(Order_detail, { foreignKey: "id_order" });
    }
  }
  Order.init({
    id_order: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    time_order: DataTypes.DATE,
    time_confirm: DataTypes.DATE,
    time_expected: DataTypes.DATE,
    delivery_fee: DataTypes.INTEGER,
    item_fee: DataTypes.INTEGER,
    total: DataTypes.INTEGER,
    status: DataTypes.INTEGER,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Order',
    timestamps: false
  });
  return Order;
};