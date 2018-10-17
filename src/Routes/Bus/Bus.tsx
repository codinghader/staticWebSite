import React from "react";
import styled from "src/typed-components";

const Container = styled.div`
  background-color: white;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BusContainer: React.SFC<any> = () => (
  <React.Fragment>
    <Container>
      <div>bus page</div>
    </Container>
    ;
  </React.Fragment>
);

export default BusContainer;
