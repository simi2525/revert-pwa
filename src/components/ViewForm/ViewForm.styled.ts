import styled from "@emotion/styled";

export const StatusContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-bottom: 18px;

  span {
    height: 140px !important;
    width: 140px !important;

    :nth-of-type(2) {
      transform: rotate(90deg) !important;
      position: absolute;
      color: #e0e0e0;
    }
  }
`;

export const StatusNumber = styled.span`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 8px;
  color: ${({ color }) => {
    switch (color) {
      case "success":
        return "#2e7d32";
      case "warning":
        return "#ed6c02";
      case "error":
        return "#d32f2f";
    }
  }};
  font-weight: bold;
  font-size: 22px;
`;
