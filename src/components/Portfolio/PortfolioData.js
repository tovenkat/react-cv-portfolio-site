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


const Data = {
   en:{ portfolio: [
    {
      title: "Realestate Wordpress Develpment",
      key: 2,
      picture: Realestatesite,
      body: "LoremIpsum"
    },
    {
      title: "Reporter Site",
      key: 1,
      picture: ReporterMarketPlace,
      body: "LoremIpsum"
    },
    {
      title: "Pizza WordPress Site",
      key: 3,
      picture: PizzaShop,
      body: "LoremIpsum"
    },
    {
      title: "Investment/Banking Site Development",
      key: 4,
      picture: InvestSite,
      body: "LoremIpsum"
    },
    {
      title: "Financing Site Develpment",
      key: 5,
      picture: FinanceSite,
      body: "LoremIpsum"
    }
  ],
  pet: [
    {
      key: "2p",
      picture: ImgCandyshop,
      alt: "Practise Bootstrap",
      title: "Bootstrap CSS"
    },
    {
      key: "1p",
      picture: ImgBurger,
      alt:
        "React practise Burger SAP",
        href:
        <a href="https://burger-react-alex-loian.web.app/">Demo</a>,
      title: "Burger React"
    },

    {
      key: "3p",
      picture: ImgSocketChat,
      alt: "Node JS with Socket IO online chats",
      title: "Socket IO Chat"
    },

    {
      key: "4p",
      picture: ToDo,
      alt: "React TO-DO app ",
      title:
        'React To-Do ',
        href: <a href="https://to-do-list-app-ad59b.web.app/">Demo</a>
    },
    {
      key: "4p",
      picture: ReduxPic,
      alt: "React TO-DO app ",
      title:
        'React To-Do ',
        href:<a href="https://alex-loian-redux-playground.firebaseapp.com">Demo</a>
    }
  ]

   }
}

export default Data;