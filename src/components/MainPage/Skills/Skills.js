import React from "react";
import Skill from "./Skill/Skill";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const skills = [
  { name: "React", value: 3 },
  { name: "Redux", value: 3 },
  { name: "Material", value: 3 }
];
const skills2 = [
  { name: "CSS", value: 2 },
  { name: "HTML", value: 3 },
  { name: "MySql", value: 2 }
];

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  container: {
    paddingBottom: "30px"
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
    <div>
      <h1>Skills</h1>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={2}
        className={classes.container}
      >
        <Grid item xs={12} sm={6} lg={3}>
          <Skill data={skills} />
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Skill data={skills2} />
        </Grid>
      </Grid>

      <Button size="large" className={classes.button}>
        Contact
      </Button>
    </div>
  );
};

export default Skills;
