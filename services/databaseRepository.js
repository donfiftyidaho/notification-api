let _ordersModel;
let Sequelize;
let sequelize;
let Op;

function db() {
  _ordersModel = require('../models').cart_orders;

  sequelize = require('../models/index').sequelize;
  Sequelize = require('../models/index').Sequelize;
  Op = Sequelize.Op;
}

db.prototype.GetOrders = async (to, from) => {
  let orderResult = await _ordersModel.findAll({
    where: {
      order_date_time: {
        [Op.lt]: new Date(from),
        [Op.gt]: new Date(to),
      },
    },
  });
  return orderResult;
};

module.exports = db;
