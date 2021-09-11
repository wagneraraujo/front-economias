import styled from "styled-components";

interface IContainerProps {
  color: string;
}

interface ITagProps {
  color: string;
}

export const Container = styled.li<IContainerProps>`
  background-color: ${props => props.color};
  list-style: none;
  border-radius: 8px;
  margin: 16px 0px;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s;
  position: relative;

  &:hover {
    opacity: 0.5;
    transform: translateX(16px);
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 16px;
  }
  h3 {
    font-weight: bold;
    font-size: 18px;
  }
  small {
    font-size: 14px;
  }
  span {
    font-size: 18px;
  }
`;
export const Tag = styled.div<ITagProps>`
  height: 60%;
  width: 10px;
  background-color: ${props => props.color};
  position: absolute;
  left: 0px;
`;
