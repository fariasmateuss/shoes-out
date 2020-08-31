import styled from 'styled-components';

export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
`;

export const ProductCard = styled.li`
  position: relative;
  list-style-type: none;

  .card {
    position: relative;
    width: 320px;
    height: 450px;
    background: #232323;
    border-radius: 20px;
    overflow: hidden;

    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: ${props => props.bgCircle};
      clip-path: circle(150px at 80% 20%);
      transition: 0.5s ease-in-out;
    }

    &:hover:before {
      clip-path: circle(300px at 80% -20%);
    }

    &:after {
      content: 'Vans';
      position: absolute;
      top: 30%;
      left: -20px;
      font-size: 9em;
      font-weight: 800;
      font-style: italic;
      color: rgba(255, 255, 255, 0.04);
    }

    .imgBx {
      position: absolute;
      top: 50%;
      transform: translateY(-50px);
      z-index: 10000;
      width: 100%;
      height: 220px;
      transition: 1s;

      img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(-25deg);
        width: 270px;
      }
    }

    &:hover .imgBx {
      top: 0%;
      transform: translateY(0%);
    }

    &:hover .contentBx {
      height: 250px;
    }

    .contentBx {
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 100px;
      text-align: center;
      transition: 1s;
      z-index: 10;

      h2 {
        position: relative;
        font-weight: 600;
        letter-spacing: 1px;
        padding-top: 30px;
        color: #fff;
      }

      .size,
      .color,
      .price {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 8px 20px;
        transition: 0.5s;
        opacity: 0;
        visibility: hidden;

        h3 {
          color: #fff;
          font-weight: 300;
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-right: 10px;
        }
      }

      .size span {
        width: 26px;
        height: 26px;
        text-align: center;
        line-height: 26px;
        font-size: 14px;
        display: inline-block;
        color: #111;
        background: #fff;
        margin: 0 5px;
        transition: 0.5s;
        color: #111;
        border-radius: 4px;
        cursor: pointer;
      }

      .color span {
        width: 20px;
        height: 20px;
        background: #eee;
        border-radius: 50%;
        margin: 0 5px;
        cursor: pointer;

        &:nth-child(1) {
          background: #eab15b;
        }

        &:nth-child(2) {
          background: #eab15b;
        }

        &:nth-child(3) {
          background: #e91e63;
        }
      }

      button {
        display: inline-block;
        padding: 10px 20px;
        background: #fff;
        border-radius: 4px;
        border-style: none;
        margin-top: 10px;
        text-decoration: none;
        font-weight: 600;
        color: #111;
        opacity: 0;
        transform: translateY(50px);
        transition: 0.5s;
      }
    }

    &:hover .contentBx .size,
    &:hover .contentBx .color,
    &:hover .contentBx .price {
      opacity: 1;
      visibility: visible;
      transition-delay: 0.6s;
    }

    &:hover .contentBx button {
      opacity: 1;
      transform: translateY(0px);
      transition-delay: 0.75s;
    }
  }
`;
