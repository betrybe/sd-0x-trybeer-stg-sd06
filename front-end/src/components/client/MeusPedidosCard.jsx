import React from 'react';
import { Link } from 'react-router-dom';
import dateFormat from 'dateformat';
import PropTypes from 'prop-types';

export default function MausPedidosCard(props) {
  const { order, index } = props;

  return (
    <div data-testid={ `${index}-order-card-container` } className="cardConteiner">
        <Link to={ `/orders/${order.id}` } className="linkMeusPedidos">
        <div data-testid={ `${index}-order-number` }>
          { `Pedido ${order.id}` }
        </div>
        </Link>
        <div data-testid={ `${index}-order-date` }>
          { dateFormat(order.sale_date, 'dd/mm') }
        </div>
        <div data-testid={ `${index}-order-total-value` } className="valueMeuPedido">
          { `R$ ${order.total_price.replace('.', ',')}` }
        </div>
      </div>
  );
}

MausPedidosCard.propTypes = {
  order: PropTypes.arrayOf(PropTypes.object).isRequired,
  index: PropTypes.number.isRequired,
};
