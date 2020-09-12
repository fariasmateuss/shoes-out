import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { formatPrice } from '../../util/format';
import { MdAddShoppingCart } from 'react-icons/md';
import * as CartActions from '../../store/modules/cart/actions';

import api from '../../services/api';

import { ProductList, ProductCard, CartAmount } from './styles';

function Home() {
  const [products, setProducts] = useState([]);

  const amount = useSelector(state =>
    state.cart.reduce((amount, product) => {
      amount[product.id] = product.amount;

      return amount;
    }, {}),
  );

  const dispatch = useDispatch();

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
    dispatch(CartActions.addToCartRequest(id));
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

export default Home;
