import React from "react";
import { Button, Grid, Typography } from "@material-ui/core";
import { routes } from "../../../routes/routes";
import { RouteComponentProps, withRouter } from "react-router-dom";
import syllabus from "../../../utils";
import { withHeader } from "../../../HOCs/withHeader";
import { SubHeader } from "../../../components/Header/subHeader";

interface syllabuses {
  data: { [key: string]: "" };
}

interface matchObject {
  [key: string]: Object | String | Number;
}

interface javascriptSyllabus extends RouteComponentProps<any> {
  data?: keyof typeof Array;
  match: { [key: string]: matchObject };
}

const Syllabus: React.FC<syllabuses> = (props) => {
  return (
    <Grid item xs={4}>
      <Button
        variant="contained"
        color="primary"
        href={`${routes.javascript}/detail${props?.data?.link}`}
      >
        <Typography variant="subtitle2">{props?.data?.title}</Typography>
      </Button>
    </Grid>
  );
};

interface MyState {
  data: Array<any>;
}

class JavascriptSyllabusListing extends React.Component<
  javascriptSyllabus,
  MyState
> {
  state: MyState = {
    data: []
  };
  // props: javascriptSyllabus = {
  //   match: this.props.match
  // };
  componentDidMount() {
    this.setState({ data: syllabus[this.props.match.params.id] });
  }
  render() {
    const { data } = this.state;
    return (
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h6" component="h6">
            Javascript Concepts Listing
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <SubHeader data={data} />
        </Grid>
        {/* <Grid
          container
          item
          xs={12}
          spacing={2}
          justify="flex-start"
          alignContent="flex-start"
        >
          {data.map((val: Object, i: string | number | null | undefined) => (
            <Syllabus data={val} key={i} />
          ))}
        </Grid> */}
      </Grid>
    );
  }
}

export default withRouter(withHeader(JavascriptSyllabusListing));
