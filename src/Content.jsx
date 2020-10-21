import React from "react";
import CoffeeCard from "./CoffeeCard";
import { Grid } from "@material-ui/core";
import catList from "./constants";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  padding: {
    paddingTop: "20px",
  },
}));

const Content = () => {
  const classes = useStyles();
  const getCatCard = (catObj) => {
    return (
      <Grid item xs={12} sm={6} md={4}>
        <CoffeeCard {...catObj} />
      </Grid>
    );
  };

  return (
    <Grid container spacing={2} className={classes.padding}>
      {catList.map((catObj) => getCatCard(catObj))}
    </Grid>
  );
};

export default Content;
