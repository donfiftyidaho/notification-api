/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cart_ordered_products', {
    ordered_product_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    order_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    product_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    category_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    product_number: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    product_name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ''
    },
    quantity: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    price_charged: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '0'
    },
    short_desc: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    long_desc: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    session_id: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ''
    },
    delivery_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    notify_farm_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: '0000-00-00'
    },
    original_delivery_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    portal_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    rush_charge: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '0.00'
    },
    product_status: {
      type: DataTypes.ENUM('','Bertha','Lauren','B_Pedido','B_FALTA','B_F_C','B_SHIP','L_PEND','L_NEED','L_F_C','L_SHIP','CANCEL','B_F_C_Q','PROBLEM','Complete'),
      allowNull: false,
      defaultValue: ''
    },
    product_ship_charge: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '0.00'
    },
    sale_name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    discount_amount: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '0.00'
    },
    attrib_ids_list: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    base_price: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '0'
    },
    keyless_discounts: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    flower_cart_id: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    mtl_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    customer_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    keycode: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    tableName: 'cart_ordered_products'
  });
};
