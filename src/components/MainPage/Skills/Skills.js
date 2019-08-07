import React from "react";
import Skill from "./Skill/Skill";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const skills = [
  { name: "React", value: 3 },
  { name: "JavaScript", value: 3 },
  { name: "NodeJS", value: 3 },
  { name: "Redux", value: 3 },
  { name: "Material", value: 3 }
];

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  container: {
    paddingTop: "30px"
  },
  button: {
    marginBottom: "30px"
  },
  buttonsGroup: {
    paddingBottom: "30px"
  }
}));

const Skills = () => {
  const classes = useStyles();
  return (
    <>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={2}
        className={classes.container}
      >
        <Grid item xs={12} sm={6} lg={3}>
          <Skill data={skills} title="Skills" />
        </Grid>
      </Grid>
    </>
  );
};

export default Skills;
