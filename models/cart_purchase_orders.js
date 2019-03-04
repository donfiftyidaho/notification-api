/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cart_purchase_orders', {
    po_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    buyer_id: {
      type: DataTypes.INTEGER(10),
      allowNull: true,
      defaultValue: '0'
    },
    parent_order_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    warehouse_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    source: {
      type: DataTypes.ENUM('main','standing','stock','consol'),
      allowNull: false,
      defaultValue: 'main'
    },
    leave_farm_date: {
      type: DataTypes.DATE,
      allowNull: true
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
    status: {
      type: DataTypes.ENUM('Need','Ordered','Farm Confirmed','Not Available','Questionable','Price Change','Cancelled','Problem','Change Request','Change Denied','Change OK','Change Confirmed','Substitute Request','Substitute Denied','Substitute OK','Substitute Confirmed','Cancel Request','Cancel Denied','Cancel OK','Cancel Confirmed','Cancel Complete','Partial Cancel Request','Partial Cancel Denied','Partial Cancel OK','Partial Cancel Confirmed','Claim','Claim Nobody','Claim Farm Request','Claim Farm No','Claim Farm Approved','Claim Farm Denied','Claim Farm Done','Claim Shipper','Claim Shipper Sent','Claim Shipper Refund','Claim Shipper Denied'),
      allowNull: false,
      defaultValue: 'Need'
    },
    fp_status: {
      type: DataTypes.ENUM('','Need Confirmation','Farm Confirmed','Not Available','Questionable','Price Change','Cancelled','Claim','Claim Farm Approved','Claim Farm Denied','Claim Done','Partially Cancelled'),
      allowNull: true
    },
    buyer: {
      type: DataTypes.ENUM('','Bertha','Lauren','Liza','Jennifer','Caroline','Office Ojai','Megan'),
      allowNull: false
    },
    ordered_product_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    shipper_account: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    service_type: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    consolidation: {
      type: DataTypes.ENUM('N','Y'),
      allowNull: false,
      defaultValue: 'N'
    },
    cargo_agency: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    account: {
      type: DataTypes.ENUM('','FiftyFlowers Shipping','Farm Shipping'),
      allowNull: false
    },
    tracking_num: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    ship_status: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    ship_description: {
      type: DataTypes.STRING(2000),
      allowNull: false
    },
    farm_notes: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    ship_estimate: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    total_extra_charges: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '0'
    },
    product_detail: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    po_total: {
      type: "DOUBLE(9,2)",
      allowNull: false,
      defaultValue: '0.00'
    },
    hold_at_location: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    saturday_delivery: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    leave_without_signature: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    invoice_status: {
      type: DataTypes.ENUM('Invoice Need','Farm Bill','Ship Bill - Need Farm','Ship and Farm Billed','Invoiced'),
      allowNull: false,
      defaultValue: 'Invoice Need'
    },
    real_ship_cost: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: '0'
    },
    real_shipped_units: {
      type: DataTypes.INTEGER(5),
      allowNull: true,
      defaultValue: '0'
    },
    sell_price_per_stem: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: '0'
    },
    cost_per_unit: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: '0'
    },
    extra_charges: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: '0'
    },
    total_farm_bill: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: '0'
    },
    pre_approved: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    }
  }, {
    tableName: 'cart_purchase_orders'
  });
};
