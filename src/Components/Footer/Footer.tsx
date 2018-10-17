import React from "react";
import styled from "src/typed-components";
import { Icon, Text } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";

const Container = styled.footer`
  width: 100%;
  height: 200px;
  background-color: grey;
  color: white;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 100%;
  align-items: center;
  justify-content: center;
`;

const Box = styled.div`
  /* width: 75%; */
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 20% 0 20%;
`;

const CustomIcon = styled(Icon)`
  margin-right: 10px;
`;

const Label = styled(Text)`
  padding: 5px 0 5px 0;
`;

class Footer extends React.Component {
  public render() {
    return (
      <Container>
        <Box>
          <Label>
            <CustomIcon icon={IconNames.MAP_MARKER} />
            adress
          </Label>
          <Label>
            <CustomIcon icon={IconNames.PHONE} />
            tel
          </Label>
          <Label>
            <CustomIcon icon={IconNames.DOCUMENT} />
            fax
          </Label>
          <Label>
            <CustomIcon icon={IconNames.ENVELOPE} />
            email
          </Label>
        </Box>
        <Box>
          <div>about company</div>
          <div>other links</div>
        </Box>
      </Container>
    );
  }
}

export default Footer;
