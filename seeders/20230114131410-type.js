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
    return queryInterface.bulkInsert("Types", [
      {
        id_type: 1,
        name: "Trà sữa",
      },
      {
        id_type: 2,
        name: "Đồ ăn nhẹ",
      },
      {
        id_type: 3,
        name: "Bánh ngọt",
      },
      {
        id_type: 4,
        name: "Topping",
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
