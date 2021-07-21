import styled from "styled-components";

export const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  height: 60px;
  border-bottom: 3px solid ${({ colors }) => colors.darkColors.main};
  background-color: ${({ colors }) => colors.darkColors.background};

  .headerLogo {
    font-weight: 700;
    font-size: 25px;
    color: ${({ colors }) => colors.darkColors.main};
    text-transform: uppercase;
  }
`;
