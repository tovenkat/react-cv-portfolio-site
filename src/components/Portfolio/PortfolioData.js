import React from "react";
import ReporterMarketPlace from "../../assets/images/alex-loian-commercial-wordpress-reporter-marketplace.png";
import Realestatesite from "../../assets/images/alex-loian-commercial-wordpress-realestatesite.png";
import PizzaShop from "../../assets/images/alex-loian-commercial-wordpress-pizza-shop.png";
import InvestSite from "../../assets/images/alex-loian-commercial-wordpress-investment-site.png";
import FinanceSite from "../../assets/images/alex-loian-commercial-wordpress-finance-site.png";

import ImgCandyshop from "../../assets/images/alex-loian-pet-project-bootstrap-candyshop.png";
import ImgBurger from "../../assets/images/alex-loian-pet-project-react-burger.png";
import ImgSocketChat from "../../assets/images/alex-loian-pet-project-socket-chat.png";
import ToDo from "../../assets/images/alex-loian-pet-project-to-do.png";
import ReduxPic from "../../assets/images/alex-loian-pet-project-react-redux.png";
import Rest from "../../assets/images/alex-loian-react-caspio-rest.png";

const Data = {
  en: {
    portfolio: [
      {
        title: "Realestate Wordpress Develpment",
        key: 11,
        picture: Realestatesite,
        body: "LoremIpsum"
      },
      {
        title: "Reporter Site",
        key: 21,
        picture: ReporterMarketPlace,
        body: "LoremIpsum"
      },
      {
        title: "Pizza WordPress Site",
        key: 31,
        picture: PizzaShop,
        body: "LoremIpsum"
      },
      {
        title: "Investment/Banking Site Development",
        key: 41,
        picture: InvestSite,
        body: "LoremIpsum"
      },
      {
        title: "Financing Site Develpment",
        key: 51,
        picture: FinanceSite,
        body: "LoremIpsum"
      }
    ],
    pet: [
      {
        key: "1pet",
        picture: ImgCandyshop,
        alt: "Practise Bootstrap",
        title: "Bootstrap CSS"
      },
      {
        key: "2pet",
        picture: ImgBurger,
        alt: "React practise Burger SAP",
        href: <a href="https://burger-react-alex-loian.web.app/">Demo</a>,
        title: "Burger React"
      },

      {
        key: "3pet",
        picture: ImgSocketChat,
        alt: "Node JS with Socket IO online chats",
        title: "Socket IO Chat"
      },

      {
        key: "4pet",
        picture: ToDo,
        alt: "React TO-DO app ",
        title: "React To-Do ",
        href: <a href="https://to-do-list-app-ad59b.web.app/">Demo</a>
      },
      {
        key: "5pet",
        picture: ReduxPic,
        alt: "React TO-DO app ",
        title: "React To-Do ",
        href: (
          <a href="https://alex-loian-redux-playground.firebaseapp.com">Demo</a>
        )
      }
    ]
  }
};

const reactEn = [
  {
    title: "React Burger Order App",
    subTitle: "May 2,2019",
    img: ImgBurger,
    demoLink: "https://burger-react-alex-loian.web.app/",
    gitHubLink: "https://github.com/AlexLDP/React-Redux-Burger-App",
    description: `React Burger Order App`,
    skills: ["React", "Redux", "CSS", "Firebase", "Ajax"]
  },
  {
    title: "React To-Do",
    subTitle: "June 5,2019",
    img: ToDo,
    demoLink: "https://to-do-list-app-ad59b.web.app/",
    gitHubLink: "https://github.com/AlexLDP/react-to-do",
    description: `To-Do list. Mobile friendly.`,
    skills: ["React", "Material", "Firebase"]
  },
  {
    title: "React REST Token",
    subTitle: "June 5,2019",
    img: Rest,
    demoLink: "https://alexldp.github.io/CaspioRestToken/",
    gitHubLink: "https://github.com/AlexLDP/react-to-do",
    description: `Capsio Support Helper. REST Token Generator for Caspio REST`,
    skills: ["React", "Material", "AJAX", "REST", "Caspio"]
  }
];
const reactRu = [
  {
    title: "Заказ Бургера на Реакте",
    subTitle: "2 Мая,2019",
    img: ImgBurger,
    demoLink: "https://burger-react-alex-loian.web.app/",
    gitHubLink: "https://github.com/AlexLDP/React-Redux-Burger-App",
    description: `Приложение для заказа бургера`,
    skills: ["React", "Redux", "CSS", "Firebase", "Ajax"]
  },
  {
    title: "Ту-ду лист на Реакте",
    subTitle: "5 июня,2019",
    img: ToDo,
    demoLink: "https://to-do-list-app-ad59b.web.app/",
    gitHubLink: "https://github.com/AlexLDP/react-to-do",
    description: `Ту-ду лист и точка.`,
    skills: ["React", "Material", "Firebase"]
  },
  {
    title: "Генератор Токенов на Реакте",
    subTitle: "20 июня,2019",
    img: Rest,
    demoLink: "https://alexldp.github.io/CaspioRestToken/",
    gitHubLink: "https://github.com/AlexLDP/react-to-do",
    description: `Генератор токенов для облегчения труда Супорт команды`,
    skills: ["React", "Material", "AJAX", "REST", "Caspio"]
  }
];
export const items = {
  en: reactEn,
  ru: reactRu
};
