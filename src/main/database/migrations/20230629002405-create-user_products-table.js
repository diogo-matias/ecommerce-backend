'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('user_products', { 
      user_id: {
        type: Sequelize.UUID,
        references: {model: 'users', key: 'id'},
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      }, 
      product_id: {
        type: Sequelize.UUID,
        references: {model: 'products', key: 'id'},
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  async down (queryInterface) {
  
  await queryInterface.dropTable('user_products');
     
  }
};
