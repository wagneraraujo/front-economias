import styled from "styled-components";

import Switch, { ReactSwitchProps } from "react-switch";

export const Container = styled.div`
  display: flex;
  align-items: center;
`;
export const ToggleLabel = styled.span`
  color: ${props => props.theme.color.white};
  margin: 0 6px;
`;

export const ToggleSelect = styled(Switch).attrs<ReactSwitchProps>(
  ({ theme }) => ({
    onColor: theme.color.info
  })
)<ReactSwitchProps>``;
