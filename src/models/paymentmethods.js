'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PaymentMethods extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PaymentMethods.init({
    id : {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    }, 
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    payment_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    card_number: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    name_holder: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ex_date: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'PaymentMethods',
  });

  PaymentMethods.associate = function(models) {
    PaymentMethods.belongsTo(models.User, {foreignKey: "user_id"});
    PaymentMethods.belongsTo(models.PaymentTypes, {foreignKey: "payment_type_id"});
  };

  return PaymentMethods;
};
