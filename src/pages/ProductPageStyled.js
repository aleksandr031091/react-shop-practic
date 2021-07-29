import styled from "styled-components";

export const ProductPageContainer = styled.div`
  .navigationList {
    list-style: none;
    display: flex;
    align-items: center;
    padding-top: 30px;
  }
  .navigationListItem {
    margin-right: 10px;
  }
  .headerListItemLink {
    text-decoration: none;
    color: ${({ colors }) => colors.darkColors.main};
    text-transform: uppercase;
    &:hover {
      color: ${({ colors }) => colors.darkColors.active};
    }
  }
  .activeHeaderListItemLink {
    color: ${({ colors }) => colors.darkColors.active};
  }
`;
