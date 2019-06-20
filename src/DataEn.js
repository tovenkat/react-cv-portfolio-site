

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
import Caspio from './assets/images/alex-loian-work-timeline-caspio.png';

import AmericanEnglishCenter from './assets/images/alex-loian-work-timeline-english-level.png';
import IMT from './assets/images/alex-loian-work-timeline-imt-school.png';
import Upwork from './assets/images/alex-loian-work-timeline-upwork.png';
import Gas from './assets/images/alex-loian-work-timeline-gas-engineer.png';
import University from './assets/images/alex-loian-work-timeline-university.png';
import ERC from './assets/images/alex-loian-work-timeline-erc.png';
import Microsoft from './assets/images/alex-loian-work-timeline-microsoft.png';
import AlexAvatar from './assets/images/alex-loian-fron-end-developer-avatar.jpg';

const Data = {
    exp:[
        {
            img:Caspio,
            key:1,
            type:'work',
            title:'Help Desk Specialist',
            subtitle:'Caspio inc.',
            date:'oct./2018 - present',
            skills:[],
            lists:[],
            body:'Working on support Line with United States Market. Product support and general JavaScript and HTML Customizations.I performed a remote troubleshooting through diagnostic techniques and pertinent questions Determined the best solution based on the issue and details provided by customers Walked the customer through the problem-solving process Directed unresolved issues to the next level of support staff.'
        },
        {
            img:Upwork,
            key:2,
            type:'work',
            title:'Freelancer',
            subtitle:'Upwork',
            date:'sep./2018 - present',
            body:'Wordpress Developer, general customizations.'
        },
        {
            img: IMT,
            key:3,
            type:'study',
            title:'IMT School',
            subtitle:'Front-End Developer',
            date:'july./2018 - oct./ 2018',
            body:'Vanilla JavaScript, NodeJS, JQuerry, CSS, HTML, Git, MySQL.'
        },
        {
            img: Gas,
            key:4,
            type:'work',
            title:'Wordpress Developer',
            subtitle:'GasBuild',
            date:'feb/2018 - may./2018',
            body:'Created and keep updated website gasbuild.com. Implemented a new design and customized plugins. Developed back-end and front end part.'
        },
        {
            img: Gas,
            key:5,
            type:'work',
            title:'Natural Gas Safety Engineer',
            subtitle:'GasBuild',
            date:'sep/2015 - feb./2018',
            body:'Managing clients managing contracts. increased revenue of my branch by 100%'
        },
        {
            img: AmericanEnglishCenter,
            key:6,
            type:'study',
            title:'American English Center Dnipro',
            subtitle:'Advanced Level.',
            date:'may/2017 - dec./2018',
            body:''
        },
        {
            img: Microsoft,
            key:7,
            type:'work',
            title:'Sales Consultant',
            subtitle:'Mircosoft Ukraine',
            date:'dec/2012 - may./2015',
            body:''
        },
        {
            img: ERC,
            key:8,
            type:'work',
            title:'Sales Consultant',
            subtitle:'Apple Ukraine (ERC)',
            date:'feb/2011 - dec./2012',
            body:''
        },
        {
            img: University,
            key:9,
            type:'study',
            title:'American English Center Dnipro',
            subtitle:'National Metallurgical Academy of Ukraine',
            date:'sep./2008 - jul./2013',
            body:''
        },
        {
            img: University,
            key:10,
            type:'study',
            title:'WED Manager',
            subtitle:'National Metallurgical Academy of Ukraine',
            date:'sep./2010 - jan./2013',
            body:''
        }],
    portfolio:[
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
    }],
    pet:[{ 'key':2,
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
    ],
    about: {
        title:'About',
        name:'Alex Loian',
        avatar: AlexAvatar,
        location:'Europe,Ukraine,Dnipro',
        age:'28 years',
        about:'Hi am Alex. I am passionable React Front-End Developer',
        cv:{
            title:'CV',
            href:PDF,
            download:'CV-Alex-Loian-Front-End-Developer-React'
        },
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
}};

export default Data
