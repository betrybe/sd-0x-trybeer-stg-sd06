const database = require('./connection');

const insertSale = async ({
  userId,
  totalPrice,
  deliveryAddress,
  deliveryNumber,
}) => {
  let sql = 'INSERT INTO sales ';
  sql += '(user_id, total_price, delivery_address, delivery_number, sale_date, status)';
  sql += 'VALUES (?, ?, ?, ?, ?, ?)';
  const [sale] = await database.execute(
    sql,
    [userId, totalPrice, deliveryAddress, deliveryNumber, 'now()', 'Pendente'],
  );

  return sale;
};

const insertCheckout = async ({
  userId,
  totalPrice,
  deliveryAddress,
  deliveryNumber,
  cart,
}) => {
  const sale = insertSale({ userId, totalPrice, deliveryAddress, deliveryNumber });
  for (let i = 0; i < cart.length; i += 1) {
    database.execute(
      'INSERT INTO sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?)', 
      [sale.insertId, cart[i].id, cart[i].quantity],
    );
  }
  return { message: 'Pedido Enviado', sale };
};

module.exports = {
  insertCheckout,
};
