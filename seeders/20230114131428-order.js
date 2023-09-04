"use strict";

export async function up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    return queryInterface.bulkInsert("Orders", [
      {
        id_customer: 1,
        id_payment: 2,
        id_store: 1,
        id_shipping_partner: 1,
        time_order: "2023-08-12",
        delivery_fee: 25000,
        item_fee: 305000,
        total: 330000,
        status: 0
      },
      {
        id_customer: 1,
        id_payment: 2,
        id_store: 1,
        id_shipping_partner: 1,
        time_order: "2023-08-12",
        delivery_fee: 25000,
        item_fee: 305000,
        total: 330000,
        status: 0
      },
      {
        id_customer: 1,
        id_payment: 2,
        id_store: 1,
        id_shipping_partner: 2,
        time_order: "2023-08-12",
        delivery_fee: 25000,
        item_fee: 305000,
        total: 330000,
        status: 4
      },
      {
        id_customer: 1,
        id_payment: 2,
        id_store: 1,
        id_shipping_partner: 1,
        time_order: "2023-08-12",
        delivery_fee: 0,
        item_fee: 305000,
        total: 305000,
        status: 4
      },
      {
        id_customer: 1,
        id_payment: 2,
        id_store: 2,
        id_shipping_partner: 1,
        time_order: "2023-08-12",
        delivery_fee: 0,
        item_fee: 305000,
        total: 305000,
        status: 4
      },
      {
        id_customer: 1,
        id_payment: 2,
        id_store: 2,
        id_shipping_partner: 1,
        time_order: "2023-08-12",
        delivery_fee: 0,
        item_fee: 305000,
        total: 305000,
        status: 4
      },
      {
        id_customer: 1,
        id_payment: 2,
        id_store: 2,
        id_shipping_partner: 1,
        time_order: "2023-08-12",
        delivery_fee: 0,
        item_fee: 305000,
        total: 305000,
        status: 4
      },
    ]);
  },

  export async function down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
