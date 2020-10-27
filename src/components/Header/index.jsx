import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { MdShoppingCart } from 'react-icons/md';
import { Container, Cart } from './styles';

function Header({ title }) {
  const cartSize = useSelector(state => state.cart.length);

  return (
    <Container>
      <Link to="/">
        <h1>{title}</h1>
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
