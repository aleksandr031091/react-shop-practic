import styled from "styled-components";

export const AdvFormStyled = styled.div`
  padding-top: 20px;
  padding-left: 10px;

  .labelForm {
    margin-right: 10px;
    font-weight: 700;
    color: ${({ colors }) => colors.darkColors.main};
  }

  .inputForm {
    padding-left: 5px;
    margin-left: 10px;
    min-width: 200px;
    height: 30px;

    font-weight: 700;
    border-radius: 6px;
    color: ${({ colors }) => colors.darkColors.input};
    border-color: ${({ colors }) => colors.darkColors.input};

    transition: 500ms;
  }
  .inputForm:focus {
    outline-color: ${({ colors }) => colors.darkColors.main};
  }
  .selectForm {
    margin-left: 10px;
    width: 100px;
    height: 30px;

    font-weight: 700;
    border-radius: 6px;
    color: ${({ colors }) => colors.darkColors.input};
    border-color: ${({ colors }) => colors.darkColors.input};
  }
  .selectForm:focus {
    outline-color: ${({ colors }) => colors.darkColors.main};
  }
`;
