import { Container, ToggleLabel, ToggleSelect } from "./style";

const Toggle: React.FC = () => (
  <Container>
    <ToggleLabel>Light</ToggleLabel>
    <ToggleSelect
      checked
      onChange={() => console.log("mud")}
      uncheckedIcon={false}
      checkedIcon={false}
    />
    <ToggleLabel>Dark</ToggleLabel>
  </Container>
);

export default Toggle;
