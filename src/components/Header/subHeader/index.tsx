import React from "react";
import { NavigationTabs } from "../../tabsNavigation";

interface Props {
  data: Array<any>;
}

export const SubHeader: React.FC<Props> = ({ ...props }) => {
  return <NavigationTabs data={props.data} />;
};
