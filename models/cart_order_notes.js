/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    'cart_order_notes',
    {
      note_id: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      order_id: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: false,
        defaultValue: '0',
      },
      rep_name: {
        type: DataTypes.STRING(255),
        allowNull: false,
        defaultValue: '',
      },
      employee_id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        defaultValue: '0',
      },
      note: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      note_date_time: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: '0000-00-00 00:00:00',
      },
    },
    {
      tableName: 'cart_order_notes',
      timestamps: false,
    }
  );
}
