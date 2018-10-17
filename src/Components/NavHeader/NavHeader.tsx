import React from "react";
import styled from "src/typed-components";
import { Button, Classes } from "@blueprintjs/core";

const Header = styled.header`
  height: 77px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  width: 150px;
`;

interface IProps {
  OnSelectMenu: (selected: any) => void;
}
class NavHeader extends React.Component<IProps> {
  public render() {
    return (
      <Header>
        <Title>Company</Title>
        <div>
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
        </div>
      </Header>
    );
  }
}

export default NavHeader;
