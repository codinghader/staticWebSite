import React from "react";
import { Route } from "react-router";
import styled from "src/typed-components";

import HomeContents from "../HomeContents";
import Bus from "../Bus";
import NavHeader from "src/Components/NavHeader";
import Footer from "src/Components/Footer";

interface IProps {
  isSidebarOpen: boolean;
  onSetSidebarOpen: (open) => void;
  OnSelectMenu: (selected) => void;
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Grid = styled.div`
  width: 100%;
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 100%;
`;
const Main = styled<{ isSidebarOpen: boolean }, any>("main")`
  padding-left: ${props => (props.isSidebarOpen ? "240px" : "0")};
  width: 100%;
  height: 100%;
`;

const HomePresenter: React.SFC<IProps> = ({
  isSidebarOpen,
  onSetSidebarOpen,
  OnSelectMenu
}) => (
  <React.Fragment>
    <Container>
      <Grid>
        <NavHeader OnSelectMenu={OnSelectMenu} />
        <Main isSidebarOpen={isSidebarOpen}>
          <Route path="/" exact={true} component={HomeContents} />
          <Route path="/bus" exact={true} component={Bus} />
        </Main>
        <Footer />
      </Grid>
    </Container>
  </React.Fragment>
);

export default HomePresenter;
