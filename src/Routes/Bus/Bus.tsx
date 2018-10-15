import React from "react";
import { RouteComponentProps } from "react-router-dom";

interface IProps extends RouteComponentProps<any> {}

class BusContainer extends React.Component<IProps, any> {
  public render() {
    console.log("load home contents container");
    return <div>Bus page</div>;
  }
}

export default BusContainer;
