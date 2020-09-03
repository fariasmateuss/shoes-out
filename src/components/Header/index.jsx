import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { Container, Cart } from './styles';

import { MdShoppingCart } from 'react-icons/md';

function Header({ cartSize }) {
  return (
    <Container>
      <Link to="/">
        <h1>Discovery</h1>
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
export default connect(state => ({
  cartSize: state.cart.length,
}))(Header);
