import React from "react";
import styled from "src/typed-components";
import { Button, Classes } from "@blueprintjs/core";

const Grid = styled.header`
  height: 77px;
  display: grid;
  grid-template-columns: 4fr 6fr;
  grid-template-rows: 100%;
  align-items: center;
  justify-content: center;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface IProps {
  OnSelectMenu: (selected: any) => void;
}
class NavHeader extends React.Component<IProps> {
  public render() {
    return (
      <Grid>
        <Title>Company</Title>
        <Main>
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
        </Main>
      </Grid>
    );
  }
}

export default NavHeader;
