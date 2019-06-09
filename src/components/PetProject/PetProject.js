import React from 'react';
import classes from './PetProject.module.css';

import Card from '../Material/Card';


import ImgCandyshop from '../../assets/images/alex-loian-pet-ptoject-bootstrap-candyshop.png';
import ImgBurger from '../../assets/images/alex-loian-pet-ptoject-react-burger.png';
import ImgSocketChat from '../../assets/images/alex-loian-pet-ptoject-socket-chat.png';

const PetProject = () => {
    const content = [{ 'key':1,
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
    
    return (
        <div className={classes.Container}>
           
                {content.map((element)=>{
                    return <Card key={element.key} picture={element.picture} alt={element.alt} title={element.title}/> 
                })}  
 
        </div>
    );
};

export default PetProject;