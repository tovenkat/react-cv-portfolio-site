import React from "react";
import Paper from '@material-ui/core/Paper';
import Tab from "@material-ui/core/Tab";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import Data from "./ExperienceData";

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
  if (props.type === "All") {
    return (
      <VerticalTimeline style={{ margin: "0px" }}>
        {props.data.map(element => {
          return (
           
            <VerticalTimelineElement
              key={element.key + 13}
              className="vertical-timeline-element--work"
              date={element.date}
              iconStyle={{ background: "#3f51b5", color: "#fff" }}
              icon={null}
            >
              <img src={element.img} width="80px" alt={element.title} />
              <h4 className="vertical-timeline-element-title">
                {element.title}
              </h4>
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
  if (props.type === "Work") {
    return (
      <VerticalTimeline>
        {props.data.map(element => {
          if (element.type === "work") {
            return (
              <VerticalTimelineElement
                key={element.key + "11"}
                className="vertical-timeline-element--work"
                date={element.date}
                iconStyle={{ background: "#3f51b5", color: "#fff" }}
                icon={null}
              >
                <img src={element.img} width="80px" alt={element.title} />
                <h4 className="vertical-timeline-element-title">
                  {element.title}
                </h4>
                <h4 className="vertical-timeline-element-subtitle">
                  {element.subtitle}
                </h4>
                <p>{element.body}</p>
              </VerticalTimelineElement>
            );
          }
          return null;
        })}
      </VerticalTimeline>
    );
  }
  if (props.type === "Study") {
    return (
      <VerticalTimeline style={{ margin: "0px" }}>
        {props.data.map(element => {
          if (element.type === "study") {
            return (
              <VerticalTimelineElement
                key={element.key + 12}
                className="vertical-timeline-element--work"
                date={element.date}
                iconStyle={{ background: "#3f51b5", color: "#fff" }}
                icon={null}
              >
                <img src={element.img} width="80px" alt={element.title} />
                <h4 className="vertical-timeline-element-title">
                  {element.title}
                </h4>
                <h4 className="vertical-timeline-element-subtitle">
                  {element.subtitle}
                </h4>
                <p>{element.body}</p>
              </VerticalTimelineElement>
            );
          }
          return null;
        })}
      </VerticalTimeline>
    );
  }
}

export default function Experience(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  let current = ["My Experience", "Work Experience", "Study Experience"];
  let labels = ["Sort to Work", "Sort to Education", "Sort to General"];

  if (props.language === "ru") {
    current = ["Общий Опыт", "Опыт работы", "Образование"];
    labels = ["Опыт Работы", "Образование", "Общий опыт"];
  }

  const ExperienceClicker = () => {
    if (value === 0) {
      setValue(1);
      return;
    }
    if (value === 1) {
      setValue(2);

      return;
    }
    if (value === 2) {
      setValue(0);
      return;
    }
  };
  let language = Data.en;
  if (props.language == "ru") {
    language = Data.ru;
  }
  return (
    <div className={classes.root}>
      <h1>{current[value]}</h1>
      <Fab
        style={{ margin: "15px" }}
        variant="extended"
        color="primary"
        aria-label="add"
        onClick={ExperienceClicker}
      >
        {labels[value]}
      </Fab>

      {value === 0 && <ExpSwitch type="All" data={language} />}
      {value === 1 && <ExpSwitch type="Work" data={language} />}
      {value === 2 && <ExpSwitch type="Study" data={language} />}
    </div>
  );
}
