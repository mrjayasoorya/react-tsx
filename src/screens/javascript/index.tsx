import React from "react";
import { Button, Grid, Typography } from "@material-ui/core";
import { routes } from "../../routes/routes";
import syllabus from "../../utils";
import { RouteComponentProps } from "react-router-dom";

interface syllabuses {
  data: { [key: string]: "" };
}

interface javascriptSyllabus extends RouteComponentProps<any> {
  data?: {
    [key: string]: Array;
  };
}

const Syllabus: React.FC<syllabuses> = (props) => {
  return (
    <Grid item xs={4}>
      <Button
        variant="contained"
        color="primary"
        href={`${routes.javascript}/list${props?.data?.link}`}
      >
        <Typography variant="subtitle2">{props?.data?.title}</Typography>
      </Button>
    </Grid>
  );
};

interface MyState {
  displaText: string;
}

export class JavascriptSyllabus extends React.Component<
  javascriptSyllabus,
  MyState
> {
  state: MyState = {
    displaText: "My Portfolio"
  };
  render() {
    let syllabuses =
      syllabus?.allConcepts?.constructor === Array ? syllabus?.allConcepts : [];
    return (
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h6" component="h6">
            Javascript Concepts
          </Typography>
        </Grid>
        <Grid
          container
          item
          xs={12}
          spacing={2}
          justify="flex-start"
          alignContent="flex-start"
        >
          {syllabuses.map(
            (val: Object, i: string | number | null | undefined) => (
              <Syllabus data={val} key={i} />
            )
          )}
        </Grid>
      </Grid>
    );
  }
}
