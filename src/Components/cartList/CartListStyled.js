import styled from "styled-components";

export const CartListStyled = styled.div`
  .totalCount {
    border-top: 3px solid ${({ colors }) => colors.darkColors.main};
    padding: 10px 0;
    font-weight: 700;
    font-size: 20px;
    color: ${({ colors }) => colors.darkColors.main};
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .byBtn {
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: auto;

    font-weight: 700;
    border: 1px solid ${({ colors }) => colors.darkColors.main};
    border-radius: 6px;
    outline: none;
    background-color: inherit;
    color: ${({ colors }) => colors.darkColors.main};
  }
  .byBtn:hover {
    border: 1px solid ${({ colors }) => colors.darkColors.active};
    color: ${({ colors }) => colors.darkColors.active};
    cursor: pointer;
    transform: scale(1.05);
    transition: 500ms;
  }

  .addProduct {
    margin-left: 10px;
    font-weight: 700;
    color: ${({ colors }) => colors.darkColors.main};
  }
`;
