import styled from "styled-components";

export const CartListItemStyled = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  &:last-child {
    margin-bottom: 10px;
  }
  .options {
    display: flex;
    align-items: center;
  }
  .options button {
    border: 1px solid ${({ colors }) => colors.darkColors.main};
    border-radius: 6px;
    outline: none;
    background-color: inherit;
    width: 50px;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ colors }) => colors.darkColors.main};
  }
  .cartItemTitle {
    flex-grow: 1;
  }
  .cartItemPrice {
    font-weight: 700;
    margin-right: 20px;
  }
  .buttonIcon {
    fill: currentColor;
    width: 15px;
    height: 15px;
  }
  .cartItemQuantity {
    margin: 0 10px;
    font-weight: 700;
    width: 25px;
    text-align: center;
  }
  .options button:last-child {
    margin-left: 10px;
  }
  .options button:hover {
    border: 1px solid ${({ colors }) => colors.darkColors.active};
    color: ${({ colors }) => colors.darkColors.active};
    cursor: pointer;
    transform: scale(1.05);
    transition: 300ms;
  }
`;
