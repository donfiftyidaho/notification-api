/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    'cart_email_history',
    {
      id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      date_time: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      type_id: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
        references: {
          model: 'cart_email_type',
          key: 'id',
        },
      },
      email_subject: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      email_from: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      email_to: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      order_id: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
      },
      po_id: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
      },
      item_id: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
      },
      delivery_status: {
        type: DataTypes.CHAR(1),
        allowNull: true,
      },
      delivery_error_msg: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      user_id: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
        defaultValue: '0',
      },
    },
    {
      tableName: 'cart_email_history',
      timestamps: false,
    }
  );
};
