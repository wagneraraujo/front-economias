import { Grid } from "./style";

import Header from "../MainHeader";
import Aside from "../Aside";
import Content from "../Content";

const Layout: React.FC = ({children}) => {
  return (
    <Grid>
      <Header />
      <Aside />
      <Content>

        {children}

      </Content>
    </Grid>
  );
};
export default Layout;
