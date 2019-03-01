/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    'cart_orders',
    {
      order_id: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      cs_rep_id: {
        type: DataTypes.INTEGER(10),
        allowNull: true,
        defaultValue: '0',
      },
      order_date_time: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: '0000-00-00 00:00:00',
      },
      customer_id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        defaultValue: '0',
      },
      email: {
        type: DataTypes.STRING(150),
        allowNull: false,
        defaultValue: '',
      },
      phone_number: {
        type: DataTypes.STRING(25),
        allowNull: false,
        defaultValue: '',
      },
      shipping_phone: {
        type: DataTypes.STRING(255),
        allowNull: false,
        defaultValue: '',
      },
      claim_phone_number: {
        type: DataTypes.STRING(25),
        allowNull: true,
      },
      fax_number: {
        type: DataTypes.STRING(25),
        allowNull: false,
        defaultValue: '',
      },
      billing_first_name: {
        type: DataTypes.STRING(100),
        allowNull: false,
        defaultValue: '',
      },
      billing_last_name: {
        type: DataTypes.STRING(100),
        allowNull: false,
        defaultValue: '',
      },
      billing_company_name: {
        type: DataTypes.STRING(255),
        allowNull: false,
        defaultValue: '',
      },
      billing_address1: {
        type: DataTypes.STRING(100),
        allowNull: false,
        defaultValue: '',
      },
      billing_address2: {
        type: DataTypes.STRING(100),
        allowNull: false,
        defaultValue: '',
      },
      billing_address3: {
        type: DataTypes.STRING(100),
        allowNull: false,
        defaultValue: '',
      },
      billing_city: {
        type: DataTypes.STRING(100),
        allowNull: false,
        defaultValue: '',
      },
      billing_state: {
        type: DataTypes.CHAR(2),
        allowNull: false,
        defaultValue: '',
      },
      billing_postal_code: {
        type: DataTypes.STRING(20),
        allowNull: false,
        defaultValue: '',
      },
      billing_country: {
        type: DataTypes.STRING(100),
        allowNull: false,
        defaultValue: '',
      },
      billing_cell_phone: {
        type: DataTypes.STRING(25),
        allowNull: true,
      },
      shipping_cell_phone: {
        type: DataTypes.STRING(25),
        allowNull: true,
      },
      shipping_first_name: {
        type: DataTypes.STRING(100),
        allowNull: false,
        defaultValue: '',
      },
      shipping_last_name: {
        type: DataTypes.STRING(100),
        allowNull: false,
        defaultValue: '',
      },
      shipping_company_name: {
        type: DataTypes.STRING(255),
        allowNull: false,
        defaultValue: '',
      },
      shipping_address1: {
        type: DataTypes.STRING(100),
        allowNull: false,
        defaultValue: '',
      },
      shipping_address2: {
        type: DataTypes.STRING(100),
        allowNull: false,
        defaultValue: '',
      },
      shipping_address3: {
        type: DataTypes.STRING(100),
        allowNull: false,
        defaultValue: '',
      },
      shipping_city: {
        type: DataTypes.STRING(100),
        allowNull: false,
        defaultValue: '',
      },
      shipping_state: {
        type: DataTypes.CHAR(2),
        allowNull: false,
        defaultValue: '',
      },
      shipping_postal_code: {
        type: DataTypes.STRING(20),
        allowNull: false,
        defaultValue: '',
      },
      shipping_country: {
        type: DataTypes.STRING(100),
        allowNull: false,
        defaultValue: '',
      },
      event_date: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      cc_type: {
        type: DataTypes.STRING(50),
        allowNull: false,
        defaultValue: '',
      },
      cc_num: {
        type: 'BLOB',
        allowNull: false,
      },
      name_on_card: {
        type: DataTypes.STRING(150),
        allowNull: false,
        defaultValue: '',
      },
      cc_exp: {
        type: DataTypes.STRING(10),
        allowNull: false,
        defaultValue: '',
      },
      cc_cvv2: {
        type: DataTypes.STRING(4),
        allowNull: false,
        defaultValue: '',
      },
      sub_total: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: '0.00',
      },
      ship_cost: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: '0.00',
      },
      tax_cost: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: '0.00',
      },
      order_total: {
        type: 'DOUBLE(9,2)',
        allowNull: false,
        defaultValue: '0.00',
      },
      total_discount: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: '0.00',
      },
      total_rush_charge: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: '0.00',
      },
      keycode: {
        type: DataTypes.STRING(20),
        allowNull: false,
        defaultValue: '',
      },
      sale_title: {
        type: DataTypes.STRING(100),
        allowNull: false,
        defaultValue: '',
      },
      ship_type: {
        type: DataTypes.STRING(100),
        allowNull: false,
        defaultValue: '',
      },
      status: {
        type: DataTypes.ENUM(
          'New Order',
          'Paypal Verified',
          'Not Finalized',
          'Waiting for Payment',
          'Paypal Pending Payment',
          'Paypal Error',
          'Verified',
          'Complete',
          'Testimonials',
          'Substitute Request',
          'Substitute Denied',
          'Substitute OK',
          'Substitute Confirmed',
          'Change Request',
          'Change Denied',
          'Change OK',
          'Change Confirmed',
          'Cancel Request',
          'Cancel Denied',
          'Cancel OK',
          'Cancel Confirmed',
          'Cancel Complete',
          'Partial Cancel Request',
          'Partial Cancel Denied',
          'Partial Cancel OK',
          'Partial Cancel Confirmed',
          'Complaint',
          'Claim Request',
          'Claim OK',
          'Claim Refund',
          'Claim Complete'
        ),
        allowNull: false,
        defaultValue: 'New Order',
      },
      ship_date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: '0000-00-00 00:00:00',
      },
      portal_id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        defaultValue: '0',
      },
      message_card: {
        type: DataTypes.STRING(255),
        allowNull: false,
        defaultValue: '',
      },
      ship_message: {
        type: DataTypes.STRING(255),
        allowNull: false,
        defaultValue: '',
      },
      special_instructions: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      cc_result: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      internal_notes: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      internal_rep: {
        type: DataTypes.ENUM(
          '',
          'Rep A',
          'Rep B',
          'Rep C',
          'Rep D',
          'Rep E',
          'Rep F',
          'Rep G',
          'Rep XXX',
          'Bertha',
          'Blu',
          'Caitlin',
          'Caroline',
          'Celine',
          'Daniela',
          'Isabella',
          'Karina',
          'Lauren',
          'Lily',
          'Liza',
          'Lola',
          'Lucia',
          'Macristina',
          'Marina',
          'Maria Jose',
          'Maya',
          'Megan',
          'Monica',
          'Norma',
          'Vanessa',
          'Deleted'
        ),
        allowNull: false,
      },
      prev_customer_id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        defaultValue: '-1',
      },
      happy_customer: {
        type: DataTypes.ENUM('Y', 'N'),
        allowNull: true,
      },
      reviewed: {
        type: DataTypes.ENUM('Y', 'N'),
        allowNull: false,
        defaultValue: 'N',
      },
      pre_approved: {
        type: DataTypes.INTEGER(1),
        allowNull: false,
      },
      customer_type: {
        type: DataTypes.ENUM('WEB', 'DIRECT'),
        allowNull: false,
      },
      imported_dt: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    {
      tableName: 'cart_orders',
      timestamps: false,
    }
  );
};
