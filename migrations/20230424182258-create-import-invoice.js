"use strict";
export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable("Import_invoices", {
    id_i_invoice: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    id_staff: {
      type: Sequelize.INTEGER,
      references: { model: "Staffs", key: "id_staff" },
      allowNull: false,
    },
    id_provider: {
      type: Sequelize.INTEGER,
      references: { model: "Providers", key: "id_provider" },
      allowNull: false,
    },
    datetime: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    status: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    description: {
      type: Sequelize.STRING,
    },
  });
}
export async function down(queryInterface, Sequelize) {
  await queryInterface.dropTable("Import_invoices");
}
