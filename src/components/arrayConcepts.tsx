import React from "react";
import { Grid, makeStyles, Typography, Divider } from "@material-ui/core";

interface Props {
  displayLabel: String;
  displaySubLabel?: String;
  data?: {
    [key: string]: Array | [];
  };
}

interface displaChildrenComponentProps {
  link?: string;
  description?: string;
  example?: string;
}

const useStyles = makeStyles((theme) => ({
  root: {
    color: "red"
  }
}));

const DisplayChildren: React.FC<displaChildrenComponentProps> = ({
  ...props
}) => {
  return (
    <Grid
      container
      item
      xs={12}
      direction="column"
      justify="flex-start"
      alignItems="flex-start"
    >
      <Typography variant="caption">Description</Typography>
      <Typography variant="caption">Example</Typography>
      <Typography variant="caption">link</Typography>
    </Grid>
  );
};

export const ArrayConcepts: React.FC<Props> = ({ ...props }) => {
  const classes = useStyles();
  const syllabusDataToMap = props?.data?.array ?? [];
  return (
    <>
      <Typography variant="h4" className={classes.root}>
        {props.displayLabel}
      </Typography>
      <Grid container item xs={12}>
        {syllabusDataToMap.map(
          (val: React.ReactNode, i: string | number | null | undefined) => {
            return (
              <React.Fragment key={i}>
                <Grid
                  container
                  item
                  xs={12}
                  justify="flex-start"
                  alignItems="flex-start"
                >
                  <Typography variant="h6" align="left">
                    {val}
                  </Typography>
                </Grid>
                <Grid
                  container
                  item
                  xs={12}
                  justify="flex-start"
                  alignItems="flex-start"
                >
                  <DisplayChildren />
                </Grid>
                <Divider style={{ width: "100%" }} />
              </React.Fragment>
            );
          }
        )}
      </Grid>
    </>
  );
};
