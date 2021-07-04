import { useMemo } from "react";

//useMemo ele memoriza o valor e se o valor muda...
import { Container, Profile, Welcome, UserName } from "./style";
import emojis from "../../utils/emojis";
import Toggle from "../Toggle";

const Header: React.FC = () => {
  const emoji = useMemo(() => {
    const indice = Math.floor(Math.random() * emojis.length);
    return emojis[indice];
  }, []);

  return (
    <Container>
      <Toggle />
      <div>themas</div>
      <Profile>
        <Welcome>Opa! Você por aqui {emoji}</Welcome>
        <UserName>wagner</UserName>
      </Profile>
    </Container>
  );
};
export default Header;
