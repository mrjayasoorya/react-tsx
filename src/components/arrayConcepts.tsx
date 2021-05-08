import React from "react";

interface Props {
  displayLabel: String;
  displaySubLabel?: String;
}

export const ArrayConcepts: React.FC<Props> = ({ ...props }) => {
  return (
    <>
      <h4>{props.displayLabel}</h4>
    </>
  );
};
