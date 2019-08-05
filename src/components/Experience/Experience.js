import React, { useContext } from "react";
import Paper from "@material-ui/core/Paper";
import Tab from "@material-ui/core/Tab";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import Data from "./ExperienceData";
import SwitchExperience from "./SwitchExperience/SwitchExperience";

import { Context } from "../../Context";

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: "center",
    top: "0px",
    backgroundColor: "whitesmoke",
    margin: "30px"
  }
}));

export default function Experience(props) {
  const classes = useStyles();
  const [sortButton, setSortButton] = React.useState(0);
  const [language] = useContext(Context);

  let dataObject = Data.en;
  if (language === "ru") {
    dataObject = Data.ru;
  }

  const ExperienceClicker = () => {
    switch (sortButton) {
      case 0:
        setSortButton(1);
        break;
      case 1:
        setSortButton(2);
        break;
      case 2:
        setSortButton(0);
        break;
      default:
        setSortButton(0);
        break;
    }
  };

  return (
    <div className={classes.root}>
      <h1>{dataObject.currentLabel[sortButton]}</h1>
      <Fab
        style={{ margin: "15px" }}
        variant="extended"
        color="primary"
        aria-label="add"
        onClick={ExperienceClicker}
      >
        {dataObject.buttonLabel[sortButton]}
      </Fab>

      {sortButton === 0 && <SwitchExperience type="all" data={dataObject} />}
      {sortButton === 1 && <SwitchExperience type="work" data={dataObject} />}
      {sortButton === 2 && <SwitchExperience type="study" data={dataObject} />}
    </div>
  );
}
