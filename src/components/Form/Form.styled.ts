import styled from "@emotion/styled";
import { Button, Card } from "@mui/material";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const StyledInputsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

export const StyledButton = styled(Button)`
  width: 100%;
  margin: 0;

  @media (min-width: 641px) {
    width: initial;
    margin-right: 12px;
  }
`;

export const StyledCategory = styled.h4`
  color: #9e9e9e;
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 24px;
  padding-left: 24px;
`;

export const StyledComponentsContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 0 24px;

  > div {
    width: 100%;
    margin-right: 0;
  }

  @media (min-width: 641px) {
    > div {
      width: initial;
      margin-right: 24px;
    }
  }
`;

export const StyledCard = styled(Card)`
  max-width: 789px !important;
  min-width: auto;

  @media (min-width: 641px) {
    min-width: 789px;
    max-width: auto;
  }
`;
