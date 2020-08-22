import React from 'react';

import { ProductList } from './styles';

function Home() {
  return (
    <ProductList>
      <div class="container">
        <div class="card">
          <div class="imgBx">
            <img src="https://i.ibb.co/10hBqpX/vans.png" alt="Vans" />
          </div>
          <div class="contentBx">
            <h2>Vans Shoe</h2>
            <div class="size">
              <h3>Size :</h3>
              <span>37</span>
              <span>38</span>
              <span>39</span>
              <span>40</span>
            </div>
            <div class="color">
              <h3>Color :</h3>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <a href="#">Buy Now</a>
          </div>
        </div>
      </div>
    </ProductList>
  );
}

export default Home;
