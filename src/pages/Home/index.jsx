import React from 'react';

import { ProductList } from './styles';

function Home() {
  return (
    <ProductList>
      <li className="container">
        <div className="card">
          <div className="imgBx">
            <img src="https://i.ibb.co/10hBqpX/vans.png" alt="Vans" />
          </div>
          <div className="contentBx">
            <h2>Vans Classic</h2>
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
            <a href="#">Buy Now</a>
          </div>
        </div>
      </li>

      <li className="container">
        <div className="card">
          <div className="imgBx">
            <img src="https://i.ibb.co/10hBqpX/vans.png" alt="Vans" />
          </div>
          <div className="contentBx">
            <h2>Vans Classic</h2>
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
            <a href="#">Buy Now</a>
          </div>
        </div>
      </li>

      <li className="container">
        <div className="card">
          <div className="imgBx">
            <img src="https://i.ibb.co/10hBqpX/vans.png" alt="Vans" />
          </div>
          <div className="contentBx">
            <h2>Vans Classic</h2>
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
            <a href="#">Buy Now</a>
          </div>
        </div>
      </li>
    </ProductList>
  );
}

export default Home;
