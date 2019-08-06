import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { FaStarHalfAlt, FaStar, FaRegStar } from "react-icons/fa";

const useStyles = makeStyles(theme => ({
  root: {
    width: "50%",
    marginTop: theme.spacing(3),
    overflowX: "auto",
    margin: "auto"
  },
  table: {
    minWidth: 650
  }
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("React", 159),
  createData("Redux", 237),
  createData("JavaScript", 262),
  createData("Node Js", 305),
  createData("CSS", 356)
];

export default function Skill() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <FaStarHalfAlt /> <FaStar /> <FaRegStar />
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Name of the Skill</TableCell>
            <TableCell align="right">Knowledges</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
