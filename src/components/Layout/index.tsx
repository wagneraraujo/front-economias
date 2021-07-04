import { Grid } from "./style";

import Header from "../MainHeader";
import Aside from "../Aside";
import Content from "../Content";

const Layout: React.FC = () => {
  return (
    <Grid>
      <Header />
      <Aside />
      <Content />
    </Grid>
  );
};
export default Layout;
