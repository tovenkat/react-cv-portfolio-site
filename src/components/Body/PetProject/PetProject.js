import React from 'react';
import classes from './PetProject.module.css';
import LabelArea from '../../LabelArea/LabelArea';
import PetItem from './PetItem/PetItem';


import ImgCandyshop from '../../../assets/images/alex-loian-pet-ptoject-bootstrap-candyshop.png';
import ImgBurger from '../../../assets/images/alex-loian-pet-ptoject-react-burger.png';
import ImgSocketChat from '../../../assets/images/alex-loian-pet-ptoject-socket-chat.png';

const PetProject = () => {
    return (
        <div className={classes.Container}>
            <LabelArea name = 'PET Project'/>
            <div className ={classes.Items}>
                <PetItem picture={ImgBurger} alt='React practise Burger SAP'/>
                <PetItem picture={ImgCandyshop} alt='Practise Bootstrap'/>
                <PetItem picture={ImgSocketChat} alt='Node JS with Socket IO online chats'/>
            </div>
            
        </div>
    );
};

export default PetProject;