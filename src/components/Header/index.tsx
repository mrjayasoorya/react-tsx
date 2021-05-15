import React from "react";

interface Props {
  headerType?: String;
}

export const Header: React.FC<Props> = ({ ...props }) => {
  return <div>Header</div>;
};
