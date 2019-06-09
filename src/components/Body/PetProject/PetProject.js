import React from 'react';
import classes from './PetProject.module.css';
import LabelArea from '../../LabelArea/LabelArea';
import Card from '../../Material/Card';


import ImgCandyshop from '../../../assets/images/alex-loian-pet-ptoject-bootstrap-candyshop.png';
import ImgBurger from '../../../assets/images/alex-loian-pet-ptoject-react-burger.png';
import ImgSocketChat from '../../../assets/images/alex-loian-pet-ptoject-socket-chat.png';

const PetProject = () => {
    const content = [{ 'picture':ImgBurger,
        'alt':'React practise Burger SAP',
        'title':'Burger React'
    },
    { 'picture':ImgCandyshop,
    'alt':'Practise Bootstrap',
    'title':'Bootstrap CSS'
    },
    { 'picture':ImgSocketChat,
    'alt':'Node JS with Socket IO online chats',
    'title':'Socket IO Chat'
    }];
    
    return (
        <div className={classes.Container}>
            <LabelArea name = 'PET Projects'/>
            <div className ={classes.Items}>
                {content.map((element)=>{
                    return <Card picture={element.picture} alt={element.alt} title={element.title}/> 
                })}  
            </div>
            
            
        </div>
    );
};

export default PetProject;