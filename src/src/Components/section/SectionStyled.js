import styled from "styled-components";

export const SectionStyled = styled.section`
  margin-top: 20px;
  padding-bottom: 20px;

  .sectionTitle {
    color: ${({ colors }) => colors.darkColors.main};
    margin: 20px 0 10px 10px;
    border-bottom: 4px solid ${({ colors }) => colors.darkColors.main};
  }
`;
