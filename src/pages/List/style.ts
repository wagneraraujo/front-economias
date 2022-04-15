import styled from 'styled-components'

export const Container = styled.div`
  padding: 16px;
`

export const Filters = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-bottom: 26px;

  .tag-filter {
    font-size: 14px;
    background: none;
    border: none;
    margin: 0 16px;
    color: ${(props) => props.theme.color.white};
  }

  .tag-current::after {
    border-bottom: 5px solid ${(props) => props.theme.color.secondary};
    margin: 0 auto;
    width: 30px;
    display: block;
    content: '';
  }

  .tag-eventual::after {
    border-bottom: 5px solid ${(props) => props.theme.color.info};
    margin: 0 auto;
    width: 30px;
    display: block;
    content: '';
  }
`

