import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import './Navbar.scss';

const Navbar = () => {
  const navigate = useNavigate();

  const localUser = JSON.parse(localStorage.getItem('user'));

  const { IsAdmin, Username } = localUser;

  const onRentalClick = () => {
    navigate('/');
  };

  const onLogoutClick = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <div className="navbar">
      <div className="navbar__menu">
        <h1 className="navbar__title" onClick={onRentalClick}>
          Rental
        </h1>
        <ul className="navbar__list">
          {IsAdmin ? (
            <>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? 'navbar__active' : 'navbar__item'
                  }
                  to="/cars"
                >
                  Car
                </NavLink>
              </li>
              <li className="navbar__item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? 'navbar__active' : 'navbar__item'
                  }
                  to="/users"
                >
                  Users
                </NavLink>
              </li>
            </>
          ) : (
            ''
          )}
          <li className="navbar__item">
            <NavLink
              className={({ isActive }) =>
                isActive ? 'navbar__active' : 'navbar__item'
              }
              to="/rentals"
            >
              Rentals
            </NavLink>
          </li>
        </ul>
      </div>
      {localUser ? (
        <div className="navbar__user">
          <h2 className="navbar__username">{Username}</h2>
          <Button className="alert rental__button" onClick={onLogoutClick}>
            Logout
          </Button>
        </div>
      ) : (
        <Button className="alert rental__button" onClick={onLogoutClick}>
          Login
        </Button>
      )}
    </div>
  );
};

export default Navbar;
