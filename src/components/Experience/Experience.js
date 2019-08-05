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

import { Context } from "../../Context";

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: "center",
    top: "0px",
    backgroundColor: "whitesmoke",
    margin: "30px"
  }
}));

function LinkTab(props) {
  return (
    <Tab
      style={{ backgroundColor: "black  " }}
      component="a"
      onClick={event => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

function ExpSwitch(props) {
  console.log(props.type);
  let elements = props.data.exp;
  if (props.type === "work") {
    elements = props.data.exp.filter(item => item.type === "work");
  }
  if (props.type === "study") {
    elements = props.data.exp.filter(item => item.type === "study");
  }
  return (
    <VerticalTimeline style={{ margin: "0px" }}>
      {elements.map(element => {
        return (
          <VerticalTimelineElement
            key={element.key + 13}
            className="vertical-timeline-element--work"
            date={element.date}
            iconStyle={{ background: "#3f51b5", color: "#fff" }}
            icon={null}
          >
            <img src={element.img} width="80px" alt={element.title} />
            <h4 className="vertical-timeline-element-title">{element.title}</h4>
            <h4 className="vertical-timeline-element-subtitle">
              {element.subtitle}
            </h4>
            <p>{element.body}</p>
            <div>
              <ul>
                {element.lists
                  ? element.lists.map((list, index) => (
                      <li key={index} style={{ textAlign: "left" }}>
                        {list}{" "}
                      </li>
                    ))
                  : null}
              </ul>
              {element.skills
                ? element.skills.map((skill, index) => (
                    <span key={index}>{skill} </span>
                  ))
                : null}
            </div>
          </VerticalTimelineElement>
        );
      })}
    </VerticalTimeline>
  );
}

export default function Experience(props) {
  const classes = useStyles();
  const [sortButton, setSortButton] = React.useState(0);
  const [language] = useContext(Context);
  let dataObject = Data.en;
  if (language === "ru") {
    dataObject = Data.ru;
  }

  let currentLabel = ["My Experience", "Work Experience", "Study Experience"];
  let buttonLabel = ["Sort to Work", "Sort to Education", "Sort to General"];

  if (language === "ru") {
    currentLabel = ["Общий Опыт", "Опыт работы", "Образование"];
    buttonLabel = ["Опыт Работы", "Образование", "Общий опыт"];
  }

  const ExperienceClicker = () => {
    if (sortButton === 0) {
      setSortButton(1);
      return;
    }
    if (sortButton === 1) {
      setSortButton(2);
      return;
    }
    if (sortButton === 2) {
      setSortButton(0);
      return;
    }
  };

  return (
    <div className={classes.root}>
      <h1>{currentLabel[sortButton]}</h1>
      <Fab
        style={{ margin: "15px" }}
        variant="extended"
        color="primary"
        aria-label="add"
        onClick={ExperienceClicker}
      >
        {buttonLabel[sortButton]}
      </Fab>

      {sortButton === 0 && <ExpSwitch type="all" data={dataObject} />}
      {sortButton === 1 && <ExpSwitch type="work" data={dataObject} />}
      {sortButton === 2 && <ExpSwitch type="study" data={dataObject} />}
    </div>
  );
}
