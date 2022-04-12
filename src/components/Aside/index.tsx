import {
  Container,
  Header,
  LogoImg,
  MenuContainer,
  Title,
  MenuItemLink,
} from './style'
import logoimg from '../../assets/logo.svg'

import {
  IoHome,
  IoChevronUpOutline,
  IoChevronDown,
  IoCloseCircle,
} from 'react-icons/io5'
const Aside: React.FC = () => {
  return (
    <Container>
      <Header>
        <LogoImg src={logoimg} />
        <Title>Minhas Economias</Title>
      </Header>

      <MenuContainer>
        <MenuItemLink href="/dashboard">
          <IoHome />
          Dashboard
        </MenuItemLink>
        <MenuItemLink href="/list/entry-balance">
          <IoChevronUpOutline />
          Entradas
        </MenuItemLink>
        <MenuItemLink href="/list/exit-balance">
          <IoChevronDown />
          Saídas
        </MenuItemLink>
        <MenuItemLink>
          <IoCloseCircle />
          Sair
        </MenuItemLink>
      </MenuContainer>
    </Container>
  )
}
export default Aside
