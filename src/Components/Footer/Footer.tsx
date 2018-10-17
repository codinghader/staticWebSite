import React from "react";
import styled from "src/typed-components";
import { Icon, Text } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";

const Container = styled.footer`
  width: 100%;
  height: 200px;
  background-color: grey;
  color: white;
  text-align: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Box = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 30px;
`;

const CustomIcon = styled(Icon)`
  margin-right: 10px;
`;

class Footer extends React.Component {
  public render() {
    return (
      <Container>
        <Box>
          <div>
            <Text>
              <CustomIcon icon={IconNames.MAP_MARKER} />
              adress
            </Text>
          </div>
          <div>
            <Text>
              <CustomIcon icon={IconNames.PHONE} />
              tel
            </Text>
          </div>
          <div>
            <Text>
              <CustomIcon icon={IconNames.DOCUMENT} />
              fax
            </Text>
          </div>
          <div>
            <Text>
              <CustomIcon icon={IconNames.ENVELOPE} />
              email
            </Text>
          </div>
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
