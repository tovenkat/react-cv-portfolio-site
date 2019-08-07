import AmericanEnglishCenter from "../../assets/images/logos/alex-loian-work-timeline-english-level.png";
import IMT from "../../assets/images/logos/alex-loian-work-timeline-imt-school.png";
import Upwork from "../../assets/images/logos/alex-loian-work-timeline-upwork.png";
import Gas from "../../assets/images/logos/alex-loian-work-timeline-gas-engineer.png";
import University from "../../assets/images/logos/alex-loian-work-timeline-university.png";
import ERC from "../../assets/images/logos/alex-loian-work-timeline-erc.png";
import Microsoft from "../../assets/images/logos/alex-loian-work-timeline-microsoft.png";
import Caspio from "../../assets/images/logos/alex-loian-work-timeline-caspio.png";

const exp = [
  {
    img: Caspio,
    key: 1,
    type: "work",
    title: "Help Desk Specialist",
    subtitle: "Caspio inc.",
    date: "oct./2018 - sep./2019",
    skills: [],
    lists: [],
    body:
      "Working on support Line with United States Market. Product support and general JavaScript and HTML Customizations.I performed a remote troubleshooting through diagnostic techniques and pertinent questions Determined the best solution based on the issue and details provided by customers Walked the customer through the problem-solving process Directed unresolved issues to the next level of support staff."
  },
  {
    img: Upwork,
    key: 2,
    type: "work",
    title: "Freelancer",
    subtitle: "Upwork",
    date: "sep./2018 - present",
    body: "Wordpress Developer, general customizations."
  },
  {
    img: IMT,
    key: 3,
    type: "study",
    title: "IMT School",
    subtitle: "Front-End Developer",
    date: "july./2018 - oct./ 2018",
    body: "Vanilla JavaScript, NodeJS, JQuerry, CSS, HTML, Git, MySQL."
  },
  {
    img: Gas,
    key: 4,
    type: "work",
    title: "Wordpress Developer",
    subtitle: "GasBuild",
    date: "feb/2018 - may./2018",
    body:
      "Created and keep updated website gasbuild.com. Implemented a new design and customized plugins. Developed back-end and front end part."
  },
  {
    img: Gas,
    key: 5,
    type: "work",
    title: "Natural Gas Safety Engineer",
    subtitle: "GasBuild",
    date: "sep/2015 - feb./2018",
    body:
      "Managing clients managing contracts. increased revenue of my branch by 100%"
  },
  {
    img: AmericanEnglishCenter,
    key: 6,
    type: "study",
    title: "American English Center Dnipro",
    subtitle: "Advanced Level.",
    date: "may/2017 - dec./2018",
    body: ""
  },
  {
    img: Microsoft,
    key: 7,
    type: "work",
    title: "Sales Consultant",
    subtitle: "Mircosoft Ukraine",
    date: "dec/2012 - may./2015",
    body: ""
  },
  {
    img: ERC,
    key: 8,
    type: "work",
    title: "Sales Consultant",
    subtitle: "Apple Ukraine (ERC)",
    date: "feb/2011 - dec./2012",
    body: ""
  },
  {
    img: University,
    key: 9,
    type: "study",
    title: "American English Center Dnipro",
    subtitle: "National Metallurgical Academy of Ukraine",
    date: "sep./2008 - jul./2013",
    body: ""
  },
  {
    img: University,
    key: 10,
    type: "study",
    title: "WED Manager",
    subtitle: "National Metallurgical Academy of Ukraine",
    date: "sep./2010 - jan./2013",
    body: ""
  }
];
const expru = [
  {
    img: Caspio,
    key: 1,
    type: "work",
    title: "Специалист службы поддержки",
    subtitle: "Caspio inc.",
    date: "октябрь./2018 - сентябрь/2019",
    skills: [],
    lists: [],
    body:
      "Working on support Line with United States Market. Product support and general JavaScript and HTML Customizations.I performed a remote troubleshooting through diagnostic techniques and pertinent questions Determined the best solution based on the issue and details provided by customers Walked the customer through the problem-solving process Directed unresolved issues to the next level of support staff."
  },
  {
    img: Upwork,
    key: 2,
    type: "work",
    title: "Фрилансер",
    subtitle: "Upwork",
    date: "Сентябрь/2018 - по настощее время",
    body: "Разработчик Wordpress. Создание и настройка сайтов под ключ."
  },
  {
    img: IMT,
    key: 3,
    type: "study",
    title: "IMT Школа",
    subtitle: "Фронт-Энд Разработчик",
    date: "july./2018 - oct./ 2018",
    body: "Vanilla JavaScript, NodeJS, JQuerry, CSS, HTML, Git, MySQL."
  },
  {
    img: Gas,
    key: 4,
    type: "work",
    title: "Разработчик Wordpress",
    subtitle: "GasBuild",
    date: "feb/2018 - may./2018",
    body:
      "Created and keep updated website gasbuild.com. Implemented a new design and customized plugins. Developed back-end and front end part."
  },
  {
    img: Gas,
    key: 5,
    type: "work",
    title: "Natural Gas Safety Engineer",
    subtitle: "GasBuild",
    date: "sep/2015 - feb./2018",
    body:
      "Managing clients managing contracts. increased revenue of my branch by 100%"
  },
  {
    img: AmericanEnglishCenter,
    key: 6,
    type: "study",
    title: "American English Center Dnipro",
    subtitle: "Advanced Level.",
    date: "may/2017 - dec./2018",
    body: ""
  },
  {
    img: Microsoft,
    key: 7,
    type: "work",
    title: "Sales Consultant",
    subtitle: "Mircosoft Ukraine",
    date: "dec/2012 - may./2015",
    body: ""
  },
  {
    img: ERC,
    key: 8,
    type: "work",
    title: "Sales Consultant",
    subtitle: "Apple Ukraine (ERC)",
    date: "feb/2011 - dec./2012",
    body: ""
  },
  {
    img: University,
    key: 9,
    type: "study",
    title: "American English Center Dnipro",
    subtitle: "National Metallurgical Academy of Ukraine",
    date: "sep./2008 - jul./2013",
    body: ""
  },
  {
    img: University,
    key: 10,
    type: "study",
    title: "WED Manager",
    subtitle: "National Metallurgical Academy of Ukraine",
    date: "sep./2010 - jan./2013",
    body: ""
  }
];
const en = {
  exp: exp,
  currentLabel: ["My Experience", "Work Experience", "Study Experience"],
  buttonLabel: ["Sort to Work", "Sort to Education", "Sort to General"]
};
const ru = {
  exp: expru,
  currentLabel: ["Общий Опыт", "Опыт работы", "Образование"],
  buttonLabel: ["Опыт Работы", "Образование", "Общий опыт"]
};

const Data = {
  en,
  ru
};
export default Data;
