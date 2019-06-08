import React from 'react';
import classes from './PetProject.module.css';
import LabelArea from '../../LabelArea/LabelArea';
import Card from '../../Material/Card';


import ImgCandyshop from '../../../assets/images/alex-loian-pet-ptoject-bootstrap-candyshop.png';
import ImgBurger from '../../../assets/images/alex-loian-pet-ptoject-react-burger.png';
import ImgSocketChat from '../../../assets/images/alex-loian-pet-ptoject-socket-chat.png';

const PetProject = () => {
    return (
        <div className={classes.Container}>
            <LabelArea name = 'PET Projects'/>
            <div className ={classes.Items}>
                <Card picture={ImgBurger} alt ='React practise Burger SAP' title='Burger React'/>
                <Card picture={ImgCandyshop} alt ='Practise Bootstrap' title = 'Bootstrap CSS'/>
                <Card picture={ImgSocketChat} alt ='Node JS with Socket IO online chats' title = 'Socket IO Chat'/>
            </div>
            
            
        </div>
    );
};

export default PetProject;