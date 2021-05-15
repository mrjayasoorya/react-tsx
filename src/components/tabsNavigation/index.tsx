import React from "react";
import { makeStyles } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PhoneIcon from "@material-ui/icons/Phone";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper
  }
}));

interface Props {
  data: Array<any>;
}

export const NavigationTabs: React.FC<Props> = ({ ...props }) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const _data = props?.data?.length > 0 ? props?.data : [];

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example"
        >
          {_data.map((val, i) => {
            return <Tab label={val.title} key={i} href={val.link} />;
          })}

          {/* <Tab label="Item Two" icon={<FavoriteIcon />} />
          <Tab label="Item Three" icon={<PersonPinIcon />} />
          <Tab label="Item Four" icon={<HelpIcon />} />
          <Tab label="Item Five" icon={<ShoppingBasket />} />
          <Tab label="Item Six" icon={<ThumbDown />} />
          <Tab label="Item Seven" icon={<ThumbUp />} /> */}
        </Tabs>
      </AppBar>
    </div>
  );
};
