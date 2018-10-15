import React from "react";
import { RouteComponentProps } from "react-router-dom";
import HomeContentsPresenter from "./HomeContentsPresenter";
interface IProps extends RouteComponentProps<any> {}

class HomeContentsContainer extends React.Component<IProps, any> {
  public render() {
    return (
      <div>
        <HomeContentsPresenter />
      </div>
    );
  }
}

export default HomeContentsContainer;
