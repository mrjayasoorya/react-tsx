// https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/class_components/
import React from "react";

interface MyState {
  displaText: string;
}

class Portfolio extends React.Component<{}, MyState> {
  state: MyState = {
    displaText: "My Portfolio"
  };
  render() {
    return <h5>{this.state.displaText}</h5>;
  }
}

export default Portfolio;
