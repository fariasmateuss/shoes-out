import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Cart } from './styles';

import { MdShoppingCart } from 'react-icons/md';

function Header() {
  return (
    <Container>
      <Link to="/">
        <h1>Discovery</h1>
      </Link>

      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span>4 itens</span>
        </div>
        <MdShoppingCart size={36} />
      </Cart>
    </Container>
  );
}

export default Header;
