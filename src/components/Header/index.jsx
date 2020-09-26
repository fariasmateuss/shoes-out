import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Container, Cart } from './styles';

import { MdShoppingCart } from 'react-icons/md';

function Header(props) {
  const cartSize = useSelector(state => state.cart.length);

  return (
    <Container>
      <Link to="/">
        <h1>{props.title}</h1>
      </Link>

      <Cart to="/cart">
        <div className="content">
          <strong>Cart</strong>
          <span>Items</span>
        </div>
        <MdShoppingCart size={36} />
        <div className="badge">{cartSize}</div>
      </Cart>
    </Container>
  );
}
export default Header;
