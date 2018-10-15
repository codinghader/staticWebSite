import React from "react";
import { Route } from "react-router";

// Be sure to include styles at some point, probably during your bootstraping
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import SideNav, { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";
import { Icon } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";

import HomeContents from "../HomeContents";
import Bus from "../Bus";
import { FaBus } from "react-icons/fa";
import { MdHome } from "react-icons/md";
import styled from "src/typed-components";

import NavHeader from "src/Components/NavHeader";

interface IProps {
  isSidebarOpen: boolean;
  onSetSidebarOpen: (open) => void;
  OnSelectMenu: (selected) => void;
}

const Main = styled<{ isSidebarOpen: boolean }, any>("main")`
  padding-left: ${props => (props.isSidebarOpen ? "240px" : "0")};
  height: 100vh;
`;

const StyledIcon = styled(Icon)`
  vertical-align: middle;
`;

const HomePresenter: React.SFC<IProps> = ({
  isSidebarOpen,
  onSetSidebarOpen,
  OnSelectMenu
}) => (
  <React.Fragment>
    <NavHeader OnSelectMenu={OnSelectMenu} />

    <SideNav
      onSelect={OnSelectMenu}
      onToggle={onSetSidebarOpen}
      hidden={!isSidebarOpen}
    >
      <SideNav.Toggle />
      <SideNav.Nav defaultSelected="">
        <NavItem eventKey="">
          <NavIcon>
            <MdHome style={{ fontSize: "1.75em", verticalAlign: "middle" }} />
          </NavIcon>
          <NavText>Home</NavText>
        </NavItem>
        <NavItem eventKey="bus">
          <NavIcon>
            <FaBus style={{ fontSize: "1.75em", verticalAlign: "middle" }} />
          </NavIcon>
          <NavText>버스</NavText>
        </NavItem>
        <NavItem eventKey="ticket">
          <NavIcon>
            <StyledIcon icon={IconNames.PEOPLE} iconSize={Icon.SIZE_LARGE} />
          </NavIcon>
          <NavText>항공권</NavText>
        </NavItem>
      </SideNav.Nav>
    </SideNav>

    <Main isSidebarOpen={isSidebarOpen}>
      <Route path="/" exact={true} component={HomeContents} />
      <Route path="/bus" exact={true} component={Bus} />
    </Main>
  </React.Fragment>
);

export default HomePresenter;
