import styled from "styled-components";

export const HeaderListStyled = styled.ul`
  display: flex;
  align-items: center;

  .headerListItem {
    &:hover {
      transition: 500ms;
      transform: scale(1.05);
    }
  }

  .headerListItem:not(:first-child) {
    margin-left: 20px;
  }
  .headerListItemLink {
    font-size: 15px;
    font-weight: 400;
    text-transform: uppercase;
    text-decoration: none;
    color: ${({ colors }) => colors.darkColors.main};

    transition: 500ms;

    &:hover {
      color: ${({ colors }) => colors.darkColors.active};
    }
  }
`;
