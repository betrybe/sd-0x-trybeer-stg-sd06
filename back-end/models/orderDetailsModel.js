const database = require('./connection');

const getOrderDetails = async (id) => {
  let sql = 'SELECT sp.sale_id, DATE_FORMAT(sa.sale_date, "%d/%m") AS sale_date, pr.name, ';
  sql += ' sp.quantity, pr.price * sp.quantity AS total, sa.status FROM sales_products AS sp ';
  sql += ' JOIN sales AS sa ON sp.sale_id = sa.id JOIN products AS pr ON sp.product_id = pr.id';
  sql += ' WHERE sale_id = ?';
  const [orderDetail] = await database.execute(sql, [id]);
  return { orderDetail };
};

module.exports = { getOrderDetails };
