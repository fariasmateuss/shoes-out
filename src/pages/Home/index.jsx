import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { formatPrice } from '../../util/format';
import { MdAddShoppingCart } from 'react-icons/md';
import * as CartActions from '../../store/modules/cart/actions';

import api from '../../services/api';

import { ProductList, ProductCard, CartAmount } from './styles';

function Home({ amount, addToCartRequest }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('products');

      const data = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));

      setProducts(data);
    }

    loadProducts();
  }, []);

  function handleAddProduct(id) {
    addToCartRequest(id);
  }

  return (
    <ProductList>
      {products.map(product => (
        <ProductCard
          key={product.id}
          className="container"
          bgCircle={product.color}
        >
          <div className="card">
            <div className="imgBx">
              <img src={product.image} alt={product.title} />
            </div>
            <div className="contentBx">
              <h2>{product.title}</h2>
              <div className="size">
                <h3>Size :</h3>
                <span>37</span>
                <span>38</span>
                <span>39</span>
                <span>40</span>
              </div>
              <div className="color">
                <h3>Color :</h3>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="price">
                <h3>Price :</h3>
                <span>{product.priceFormatted}</span>
              </div>
              <button
                type="button"
                onClick={() => handleAddProduct(product.id)}
              >
                {amount[product.id] || 0 ? (
                  <CartAmount>
                    <MdAddShoppingCart size={1} />
                    {amount[product.id]}
                  </CartAmount>
                ) : (
                  <CartAmount hidden></CartAmount>
                )}
                Buy Now
              </button>
            </div>
          </div>
        </ProductCard>
      ))}
    </ProductList>
  );
}

const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;

    return amount;
  }, {}),
});

const mapDispatchProps = dispatch => bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchProps)(Home);
