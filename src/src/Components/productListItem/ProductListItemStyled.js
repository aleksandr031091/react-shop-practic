import styled from "styled-components";

export const ProductListItemStyled = styled.li`
  width: 100%;
  padding: 10px;
  min-height: 600px;
  .productListItemWrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    border-radius: 14px;
    padding: 20px;
    border: 1px solid ${({ colors }) => colors.darkColors.secondary};
    box-shadow: 1px 2px 10px 0px ${({ colors }) => colors.darkColors.shadow};
    transition: 500ms;
  }
  .productListItemWrapper:hover {
    border: 1px solid ${({ colors }) => colors.darkColors.shadowHover};
    box-shadow: 3px 3px 12px 0px
      ${({ colors }) => colors.darkColors.shadowHover};
    transform: scale(1.03);
  }
  .productListItemTitle {
    margin-bottom: 20px;
    text-align: center;
  }
  .productListItemImg {
    height: 200px;
    margin-bottom: 20px;
    object-fit: contain;
  }
  .productListItemSale {
    font-weight: 500;
  }
  .productListItemDescription {
    margin-bottom: 20px;
    flex-grow: 1;
  }
  .productListItemName {
    font-weight: 700px;
  }
  .productListItemPrice {
    margin-bottom: 20px;
    font-weight: 500;
  }
  .productListItemButtonGroup {
    display: flex;
    align-items: center;
    width: 100%;
  }
  .productListItemButtonGroup button {
    width: 50%;
    height: 30px;
    border: none;
    color: ${({ colors }) => colors.darkColors.buttonText};
    text-transform: uppercase;
    background-color: ${({ colors }) => colors.darkColors.main};

    &:hover {
      background-color: ${({ colors }) => colors.darkColors.active};
    }
  }
  .addToCartBtn {
    border-radius: 14px 0 0 14px;
    margin-right: 2px;
    align-self: center;
    transition: 500ms;
  }
  .detailsBtn {
    border-radius: 0 14px 14px 0;
    align-self: center;
    transition: 500ms;
  }
  @media screen and (min-width: 768px) {
    width: 50%;
  }
  @media screen and (min-width: 1024px) {
    width: 25%;
  }
`;
