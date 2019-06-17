import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


import ReporterMarketPlace from './assets/images/alex-loian-commercial-wordpress-reporter-marketplace.png';
import Realestatesite from './assets/images/alex-loian-commercial-wordpress-realestatesite.png';
import PizzaShop from './assets/images/alex-loian-commercial-wordpress-pizza-shop.png';
import InvestSite from './assets/images/alex-loian-commercial-wordpress-investment-site.png';
import FinanceSite from './assets/images/alex-loian-commercial-wordpress-finance-site.png';
import ImgCandyshop from './assets/images/alex-loian-pet-ptoject-bootstrap-candyshop.png';
import ImgBurger from './assets/images/alex-loian-pet-ptoject-react-burger.png';
import ImgSocketChat from './assets/images/alex-loian-pet-ptoject-socket-chat.png';
import ToDo from './assets/images/alex-loian-pet-ptoject-to-do.png';
import QR from './assets/images/alex-loian-qr-code-telephone.png';
import PDF from './assets/images/CV-Alex-Loian-Front-End-Developer-React-Resume.pdf';
import ReactLogo from './assets/images/alex-loian-skills-react-logo.svg';
import NodeJS from './assets/images/alex-loian-skills-NodeJS-logo.png';
import JSLogo from './assets/images/alex-loian-skills-JS-logo.png';
import English from './assets/images/alex-loian-skill-english-level.png';
import html from './assets/images/alex-loian-skill-html5.png';
import cssLogo from './assets/images/alex.loian.skill-css.png';

const portfolio =[
    {
    title:'Realestate Wordpress Develpment',
    key:2,
    picture: Realestatesite,
    body:'LoremIpsum'
},{
    title:'Reporter Site',
    key:1,
    picture: ReporterMarketPlace,
    body:'LoremIpsum'
},
{
    title:'Pizza WordPress Site',
    key:3,
    picture: PizzaShop,
    body:'LoremIpsum'
},
{
    title:'Investment/Banking Site Development',
    key:4,
    picture: InvestSite,
    body:'LoremIpsum'
},
{
    title:'Financing Site Develpment',
    key:5,
    picture: FinanceSite,
    body:'LoremIpsum'
}];

const pet = [{ 'key':2,
    'picture':ImgCandyshop,
    'alt':'Practise Bootstrap',
    'title':'Bootstrap CSS'
    },
    { 'key':1,
    'picture':ImgBurger,
        'alt':'React practise Burger SAP',
        'title':'Burger React'
    },
    
    { 'key':3,
    'picture':ImgSocketChat,
    'alt':'Node JS with Socket IO online chats',
    'title':'Socket IO Chat'
    },
    
    { 'key':4,
    'picture':ToDo,
    'alt':'React TO-DO app',
    'title':'React To-Do'
    }
];

const about = {
    text:['Alex Loian', 'Front-End Developer'],
    buttons:[{
        title:'CV',
        href:PDF,
        download:'CV-Alex-Loian-Front-End-Developer-React'
    },
    {
        title:'LinkedIn',
        href:'https://www.linkedin.com/in/alex-loian-82828284',
    },
    {
        title:'Email',
        href:'mailto:alex@loian.dev?subject=Site%20Alex%20Inquiry',
    },
    {
        title:'Phone',
        href:'tel:0980506389',
    },
    {
        title:'GitHub',
        href:'https://github.com/AlexLDP',
    }],
    contact:['Dnipro, Ukraine','Phone: 098-050-63-89','Email: alex@loian.dev'],
    qr:QR,
    skills:[
        {
            picture:NodeJS,
            alt:'NodeJS Development',
            title:'NodeJS',
            key:6,
        },
        {
            picture:ReactLogo,
            alt:'Alex Loian Front-End Developer React Native',
            title:'React',
            key:2,
        },
        {
            picture:JSLogo,
            alt:'Alex Loian Front-End Developer Vanilla JavaScript',
            title:'JavaScript',
            key:3,
        },
        {
            picture:cssLogo,
            alt:'CSS 5',
            title:'CSS',
            key:4,
        },
        {
            picture:html,
            alt:'HTML 5 Development',
            title:'HTML 5',
            key:5,
        },
        {
            picture:English,
            alt:'English',
            title:'English',
            key:1,
        }]
};

ReactDOM.render(<App portfolio={portfolio} pet={pet} about={about}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
