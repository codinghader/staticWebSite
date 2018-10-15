import React from "react";

import { RouteComponentProps } from "react-router-dom";
import HomePresenter from "./HomePresenter";
interface IProps extends RouteComponentProps<any> {}
interface IState {
  isSidebarOpen: boolean;
}

class HomeContainer extends React.Component<IProps, IState> {
  public state = {
    isSidebarOpen: false
  };
  public render() {
    const { isSidebarOpen } = this.state;
    return (
      <div>
        <HomePresenter
          isSidebarOpen={isSidebarOpen}
          onSetSidebarOpen={this.onSetSidebarOpen}
          OnSelectMenu={this.OnSelectMenu}
        />
      </div>
    );
  }

  public onSetSidebarOpen = open => {
    this.setState({ isSidebarOpen: open });
  };

  public OnSelectMenu = selected => {
    const to = "/" + selected;
    console.log(location.pathname);
    if (location.pathname !== to) {
      this.props.history.push(to);
      console.log(to);
    }
  };
}

export default HomeContainer;
