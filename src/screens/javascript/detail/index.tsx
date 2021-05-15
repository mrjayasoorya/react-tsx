import React from "react";
import { Button, Grid, Typography } from "@material-ui/core";
import { routes } from "../../../routes/routes";

interface syllabuses {
  data: { [key: string]: "" };
}

interface javascriptSyllabus {
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
        href={`${routes.javascript}${props?.data?.link}`}
      >
        <Typography variant="subtitle2">{props?.data?.title}</Typography>
      </Button>
    </Grid>
  );
};

interface MyState {
  displaText: string;
}

export class JavascriptSyllabusDetail extends React.Component<
  javascriptSyllabus,
  MyState
> {
  state: MyState = {
    displaText: "My Portfolio"
  };
  render() {
    let syllabuses =
      this.props?.data?.constructor === Array ? this.props?.data : [];
    return (
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h6" component="h6">
            Javascript Concepts Detail
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
