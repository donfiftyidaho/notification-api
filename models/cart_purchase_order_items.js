/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cart_purchase_order_items', {
    po_item_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    po_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    ordered_item_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    po_item_status: {
      type: DataTypes.ENUM('New Item','Verified','Complaint','Claim Request','Claim OK','Claim Denied','Claim Reship','Claim Refund','Refund Done','Internal Claim','Internal Claim Done','Internal Claim Denied','Change Request','Change Denied','Change OK','Change Confirmed','Change Complete','Cancel Request','Cancel Denied','Cancel OK','Cancel Confirmed','Cancel Complete','Substitute Request','Substitute Denied','Substitute OK','Substitute Confirmed','Substitute Complete'),
      allowNull: false,
      defaultValue: 'New Item'
    },
    po_cost: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    fp_cost: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    fp_cost_agree: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '1'
    },
    item_estimated_shipping: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '0'
    },
    estimated_extra_charges: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '0'
    },
    po_unit_measure: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    po_bunch_size: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    po_measure: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    item_details: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    box: {
      type: DataTypes.ENUM('None','QB','HB','FB','FB 25 Cups','FB 50 Cups','FB 75 Cupes','FB 100-125 Cups','FB 150-180 Cups','FB 200-300 Cups','FF Mini','FF QB','FF HB','EB','Internet','8th Box','3/4B','RHB','C6QB','C6HB','C8HB','CG','CGF','8B','PB','Blume','Orchid Box','Orchid Corsage','Glads Small','Glads Large','Greenery LG','Greenery SM','Other Domestic','Other EC','Other CO','Other USA','Other All','Wreath'),
      allowNull: true
    },
    num_boxes: {
      type: DataTypes.INTEGER(4),
      allowNull: false
    },
    po_item_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    po_item_number: {
      type: DataTypes.STRING(1000),
      allowNull: false
    },
    box_id: {
      type: DataTypes.INTEGER(10),
      allowNull: true,
      defaultValue: '1'
    },
    ordered_product_id: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    bundle_id: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    }
  }, {
    tableName: 'cart_purchase_order_items'
  });
};
