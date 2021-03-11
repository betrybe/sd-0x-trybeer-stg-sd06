import React from 'react';
import { Link } from 'react-router-dom';

const MenuOptions = () => (
  <div className="menuButton">
    <Link
      to="/products"
      data-testid="side-menu-item-products"
      className="buttonLateral"
    >
      Produtos
    </Link>
    <Link
      to="/orders"
      data-testid="side-menu-item-my-orders"
      className="buttonLateral"
    >
      Meus Pedidos
    </Link>
    <Link
      to="/profile"
      data-testid="side-menu-item-my-profile"
      className="buttonLateral"
    >
      Meu Perfil
    </Link>
  </div>
);

export default MenuOptions;
