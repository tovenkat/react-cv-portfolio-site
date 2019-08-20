import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { FaStarHalfAlt, FaStar, FaRegStar } from "react-icons/fa";

const skills = [
  { name: "React", value: 5 },
  { name: "Redux", value: 4 },
  { name: "React Material", value: 3 },
  { name: "Thunk", value: 3 },
  { name: "Web Components", value: 3 },
  { name: "Vanilla JavaScript", value: 3 },
  { name: "NodeJS", value: 3 },
  { name: "GitHub", value: 3 }
];
const stars = val => {
  switch (val) {
    case 1:
      return (
        <>
          <FaStar />
          <FaStar />
          <FaStarHalfAlt />
          <FaRegStar />
          <FaRegStar />
        </>
      );
    case 2:
      return (
        <>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaRegStar />
          <FaRegStar />
        </>
      );
    case 3:
      return (
        <>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStarHalfAlt />
          <FaRegStar />
        </>
      );
    case 4:
      return (
        <>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStarHalfAlt />
        </>
      );
    case 5:
      return (
        <>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </>
      );
    default:
      return (
        <>
          <FaStar />
          <FaRegStar />
          <FaRegStar />
          <FaRegStar />
        </>
      );
  }
};
const useStyles = makeStyles(theme => ({
  container: {
    paddingTop: "30px",
    padding: "30px"
  },
  button: {
    marginBottom: "30px"
  },
  buttonsGroup: {
    paddingBottom: "30px"
  },
  root: {
    width: "95%",
    marginTop: theme.spacing(3),
    padding: 20,
    maxwidth: 500,
    overflowX: "auto",
    margin: "auto"
  },
  table: {
    minWidth: 300
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
      >
        <Grid item xs={12} sm={6} lg={3} className={classes.container}>
          <Paper className={classes.root}>
            <Typography variant="h4" gutterBottom>
              Skills
            </Typography>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <TableCell>Skill:</TableCell>
                  <TableCell align="right">Knowledge</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {skills.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell component="th" scope="row">
                      {item.name}
                    </TableCell>
                    <TableCell align="right">{stars(item.value)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default Skills;
