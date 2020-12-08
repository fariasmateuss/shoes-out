import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 50px 0;
`;

export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: opacity 0.2s;

  .content {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
    }
  }

  .badge {
    position: relative;
    padding: 3px 7px;
    right: 5px;
    top: -15px;
    display: inline-block;
    background-color: ${({ theme }) => theme.colors.cart};
    border-radius: 50px;
    font-size: 11px;
    font-weight: 700;
  }
`;
