let _ordersModel;
let _cartPurchaseOrders;
let Sequelize;
let sequelize;
let Op;

function db() {
  _ordersModel = require('../models').cart_orders;
  _cartPurchaseOrders = require('../models').cart_purchase_orders;

  sequelize = require('../models/index').sequelize;
  Sequelize = require('../models/index').Sequelize;
  Op = Sequelize.Op;
}

/** 
 * for testing only
 */
db.prototype.GetOrders = async (to, from) => {
  let orderResult = await _ordersModel.findAll({
    attributes: ['order_id', 'order_date_time', 'customer_id'],
    where: {
      order_date_time: {
        [Op.lt]: new Date(from),
        [Op.gt]: new Date(to),
      },
    },
  });
  return orderResult;
};

db.prototype.getOrderIdFromPoId = async poId => {
  let poIdResult = await _cartPurchaseOrders.findAll({
    attributes: ['po_id'],
    where: {
      po_id: poId,
    },
    limit: 5,
  });
  return poIdResult;
};

module.exports = db;
