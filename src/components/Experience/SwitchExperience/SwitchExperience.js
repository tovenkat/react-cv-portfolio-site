import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaBullhorn, FaAppleAlt } from "react-icons/fa";

const SwitchExperience = props => {
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
            icon={element.type === "work" ? <FaBullhorn /> : <FaAppleAlt />}
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
};

export default SwitchExperience;
