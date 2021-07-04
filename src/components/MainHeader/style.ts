import styled from "styled-components";

export const Container = styled.div`
  grid-area: MH;
  background-color: ${props => props.theme.color.secondary};
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
`;

export const Profile = styled.div`
  color: ${props => props.theme.color.white};
`;

export const Welcome = styled.h3``;
export const UserName = styled.span``;
