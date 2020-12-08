import styled from 'styled-components';

import { darken } from 'polished';

export const Container = styled.div`
  padding: 30px;
  background: ${({ theme }) => theme.colors['mine-shaft']};
  border-radius: 4px;

  footer {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      background: ${({ theme }) => theme.colors['cod-gray']};
      border: 0;
      border-radius: 4px;
      padding: 12px 20px;
      font-weight: bold;
      text-transform: uppercase;
      transition: background 0.2s;

      &:hover {
        background: ${({ theme }) => darken(0.03, theme.colors['cod-gray'])};
      }
    }
  }
`;

export const ProductTable = styled.table`
  width: 100%;

  thead th {
    color: ${({ theme }) => theme.colors['dusty-gray']};
    text-align: left;
    padding: 12px;

    @media (max-width: 550px) {
      display: none;
    }
  }

  tbody td {
    padding: 12px;
    border-bottom: 1px;

    @media (max-width: 550px) {
      &:nth-child(3),
      &:nth-child(4) {
        display: none;
      }
    }
  }

  img {
    height: 100px;
  }

  strong {
    color: ${({ theme }) => theme.colors['dusty-gray']};
    display: block;
  }

  span {
    display: block;
    margin-top: 5px;
    font-size: 18px;
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;

    input {
      border: 1px solid ${({ theme }) => theme.colors.alto};
      border-radius: 4px;
      color: ${({ theme }) => theme.colors['dove-gray']};
      padding: 6px;
      width: 50px;
    }
  }

  button {
    background: none;
    border: 0;
    padding: 6px;
  }
`;

export const Total = styled.div`
  display: flex;
  align-items: baseline;

  span {
    color: ${({ theme }) => theme.colors['dusty-gray']};
    font-weight: bold;
  }

  strong {
    font-size: 28px;
    margin-left: 5px;
  }
`;
