import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { FaStarHalfAlt, FaStar, FaRegStar } from "react-icons/fa";

const useStyles = makeStyles(theme => ({
  root: {
    width: "95%",
    marginTop: theme.spacing(3),
    overflowX: "auto",
    margin: "auto"
  },
  table: {
    minWidth: 300
  }
}));

const stars = val => {
  switch (val) {
    case 1:
      return (
        <>
          <FaStar />
          <FaStar />
          <FaRegStar />
          <FaRegStar />
        </>
      );
    case 2:
      return (
        <>
          <FaStar />
          <FaStar />
          <FaStarHalfAlt />
          <FaRegStar />
        </>
      );
    case 3:
      return (
        <>
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
export default function Skill(props) {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Typography variant="h4" gutterBottom>
        {props.title}
      </Typography>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Skill:</TableCell>
            <TableCell align="right">Knowledge</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data.map((item, index) => (
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
  );
}
