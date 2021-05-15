// https://maxrozen.com/implement-higher-order-component-react-typescripts
import { Grid } from "@material-ui/core";
import React from "react";
import { Header } from "../components/Header";

// First we need to add a type to let us extend the incoming component.
type Props = {
  headerType?: string;
};

// Mark the function as a generic using P (or whatever variable you want)
export function withHeader<P>(
  // Then we need to type the incoming component.
  // This creates a union type of whatever the component
  // already accepts AND our extraInfo prop
  WrappedComponent: React.ComponentType<P & Props>
) {
  const ComponentWithExtraInfo = (props: P) => {
    // At this point, the props being passed in are the original props the component expects.
    return (
      <>
        <Header />
        <WrappedComponent {...props} />
      </>
    );
  };
  return ComponentWithExtraInfo;
}
