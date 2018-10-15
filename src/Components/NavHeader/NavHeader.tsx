import React from "react";
import styled from "src/typed-components";
import {
  Alignment,
  Button,
  Classes,
  Navbar,
  NavbarGroup,
  NavbarHeading
} from "@blueprintjs/core";

const StyledNavbar = styled(Navbar)`
  height: 77px;
  /* display: flex; */
`;

interface IProps {
  OnSelectMenu: (selected: any) => void;
}
class NavHeader extends React.Component<IProps> {
  public render() {
    return (
      <StyledNavbar>
        <NavbarGroup align={Alignment.LEFT}>
          <NavbarHeading>Company</NavbarHeading>
        </NavbarGroup>
        <NavbarGroup align={Alignment.RIGHT}>
          <Button
            className={Classes.MINIMAL}
            text="Home"
            onClick={() => {
              this.props.OnSelectMenu("");
            }}
          />
          <Button
            className={Classes.MINIMAL}
            text="버스"
            onClick={() => {
              this.props.OnSelectMenu("bus");
            }}
          />
          <Button
            className={Classes.MINIMAL}
            text="여행"
            onClick={() => {
              this.props.OnSelectMenu("tour");
            }}
          />
          <Button
            className={Classes.MINIMAL}
            text="비자"
            onClick={() => {
              this.props.OnSelectMenu("visa");
            }}
          />
        </NavbarGroup>
      </StyledNavbar>
    );
  }
}

export default NavHeader;
