import React from "react";
import styled from "src/typed-components";

const Container = styled.div`
  background-color: white;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TitleText = styled.h1`
  font-size: 32px;
  line-height: 40px;
  font-weight: 300;
`;

const SubText = styled.p`
  font-size: 12px;
  font-weight: 400;
`;

const HomeContentsPresenter: React.SFC<any> = () => (
  <React.Fragment>
    <Container>
      <div>
        <TitleText>Home page title Text</TitleText>
        <div>
          <SubText>this is addtional description</SubText>
        </div>
      </div>
    </Container>
  </React.Fragment>
);

export default HomeContentsPresenter;
