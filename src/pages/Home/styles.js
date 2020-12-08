import styled from 'styled-components';

export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  justify-items: center;

  @media (max-width: 1040px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 715px) {
    grid-template-columns: auto;
  }
`;

export const ProductCard = styled.li`
  position: relative;
  list-style-type: none;

  .card {
    position: relative;
    width: 320px;
    height: 450px;
    background: ${({ theme }) => theme.colors['mine-shaft']};
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
      content: 'Nike';
      position: absolute;
      top: 30%;
      font-size: 10em;
      font-weight: 900;
      font-style: italic;
      text-transform: uppercase;
      color: rgba(255, 255, 255, 0.04);
    }

    .imgBx {
      position: absolute;
      top: 50%;
      transform: translateY(-50px);
      z-index: 10000;
      width: 100%;
      height: 220px;
      transition: 0.9s;

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
        background: ${({ theme }) => theme.colors['primary-color']};
        margin: 0 5px;
        transition: 0.5s;
        color: ${({ theme }) => theme.colors.gray};
        border-radius: 4px;
        cursor: pointer;
      }

      .color span {
        width: 20px;
        height: 20px;
        background: ${({ theme }) => theme.colors.gallery};
        border-radius: 50%;
        margin: 0 5px;
        cursor: pointer;

        &:hover {
          width: 21px;
          height: 21px;
        }

        &:nth-child(2) {
          background: ${({ theme }) => theme.colors.porsche};
        }

        &:nth-child(3) {
          background: ${({ theme }) => theme.colors.amarantch};
        }
      }

      button {
        display: inline-block;
        padding: 10px 20px;
        background: ${({ theme }) => theme.colors['primary-color']};
        border-radius: 4px;
        border-style: none;
        margin-top: 10px;
        text-decoration: none;
        font-weight: 600;
        color: ${({ theme }) => theme.colors.gray};
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

export const CartAmount = styled.div`
  display: ${props => (props.hidden ? 'none' : 'inline-block')};
  position: absolute;
  padding: 3px 7px;
  left: -10px;
  top: -10px;
  background-color: ${({ theme }) => theme.colors.cart};
  border-radius: 50px;
  font-size: 10px;
  font-weight: 700;
`;

export const Spinner = styled.div`
  margin: 30vh auto 0;
  width: 70px;
  text-align: center;

  span {
    width: 18px;
    height: 18px;
    background-color: ${({ theme }) => theme.colors.shaft};
    border-radius: 100%;
    display: inline-block;
    -webkit-animation: LoadingDelay 1.4s infinite ease-in-out both;
    animation: LoadingDelay 1.4s infinite ease-in-out both;
  }

  span:nth-child(1) {
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
  }

  span:nth-child(2) {
    -webkit-animation-delay: -0.16s;
    animation-delay: -0.16s;
  }

  @keyframes LoadingDelay {
    0%,
    80%,
    100% {
      -webkit-transform: scale(0);
      transform: scale(0);
    }

    40% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }
`;
