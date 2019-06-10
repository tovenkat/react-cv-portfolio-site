import React from 'react';
import classes from './PetProject.module.css';

import Card from '../Material/Card';


import ImgCandyshop from '../../assets/images/alex-loian-pet-ptoject-bootstrap-candyshop.png';
import ImgBurger from '../../assets/images/alex-loian-pet-ptoject-react-burger.png';
import ImgSocketChat from '../../assets/images/alex-loian-pet-ptoject-socket-chat.png';

const DataPet = [{ 'key':1,
    'picture':ImgBurger,
        'alt':'React practise Burger SAP',
        'title':'Burger React'
    },
    { 'key':2,
    'picture':ImgCandyshop,
    'alt':'Practise Bootstrap',
    'title':'Bootstrap CSS'
    },
    { 'key':3,
    'picture':ImgSocketChat,
    'alt':'Node JS with Socket IO online chats',
    'title':'Socket IO Chat'
    }];

const PetProject = () => {
    
    
    return (
        <div className={classes.Container}>
                {
                    DataPet.map((item)=>{
                    return (<Card key={item.key} picture={item.picture} alt={item.alt} title={item.title}/>);
                })} 
        </div>
    );
};

export default PetProject;