import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import '../../css/client/menu.css';
import { Link } from 'react-router-dom';
import GeneralContext from '../../context/general/GeneralContext';
import MenuOptions from './MenuOptions';

export default function Menu(props) {
  const { title } = props;
  const [isVisible, setIsVisible] = useState(false);
  const { setUserData, initialUser } = useContext(GeneralContext);

  const menuChecked = () => setIsVisible(document.getElementById('check').checked);

  const handleLogin = () => {
    localStorage.setItem('token', '');
    setUserData({ initialUser });
  };

  return (
    <header className="menuSuperior">
      <label className="top-hamburguer" data-testid="top-hamburguer" htmlFor="check">
        &#9776;
        <input type="checkbox" id="check" onChange={ () => menuChecked() } />
      </label>
      <h1 className="topTitle" data-testid="top-title">{title}</h1>
      {isVisible && (
        <div className="side-menu-container">
          <nav className="menuLateral">
            <MenuOptions />

            <div className="menuButton textCenter">
              <Link
                to="/login"
                data-testid="side-menu-item-logout"
                className="buttonLateral"
                onClick={ handleLogin }
              >
                Sair
              </Link>
            </div>
          </nav>
        </div>
      ) }
    </header>
  );
}

Menu.propTypes = {
  title: PropTypes.string.isRequired,
};
