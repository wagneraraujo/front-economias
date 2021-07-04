import {
  Container,
  Header,
  LogoImg,
  MenuContainer,
  Title,
  MenuItemLink
} from "./style";
import logoimg from "../../assets/logo.svg";

import {
  IoHome,
  IoChevronUpOutline,
  IoChevronDown,
  IoCloseCircle
} from "react-icons/io5";
const Aside: React.FC = () => {
  return (
    <Container>
      <Header>
        <LogoImg src={logoimg} />
        <Title>Minhas Economias</Title>
      </Header>

      <MenuContainer>
        <MenuItemLink>
          <IoHome />
          Dashboard
        </MenuItemLink>
        <MenuItemLink>
          <IoChevronUpOutline />
          Entradas
        </MenuItemLink>
        <MenuItemLink>
          <IoChevronDown />
          Saídas
        </MenuItemLink>
        <MenuItemLink>
          <IoCloseCircle />
          Sair
        </MenuItemLink>
      </MenuContainer>
    </Container>
  );
};
export default Aside;
