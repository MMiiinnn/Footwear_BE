"use strict";
export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable("Customers", {
    id_customer: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    id_account: {
      type: Sequelize.INTEGER,
      references: { model: "Accounts", key: "id_account" },
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
    },
    image: {
      type: Sequelize.STRING,
    },
    phone: {
      type: Sequelize.STRING,
    },
    address: {
      type: Sequelize.STRING,
    },
  });
}
export async function down(queryInterface, Sequelize) {
  await queryInterface.dropTable("Customers");
}
