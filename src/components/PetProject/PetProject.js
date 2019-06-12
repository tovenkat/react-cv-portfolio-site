import React from 'react';

import Card from '../Material/Card';
import Grid from '@material-ui/core/Grid';


import ImgCandyshop from '../../assets/images/alex-loian-pet-ptoject-bootstrap-candyshop.png';
import ImgBurger from '../../assets/images/alex-loian-pet-ptoject-react-burger.png';
import ImgSocketChat from '../../assets/images/alex-loian-pet-ptoject-socket-chat.png';

const DataPet = [{ 'key':2,
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
    }];

const PetProject = () => {
    
    
    return (
        <Grid container spacing={1} style={{marginTop:'40px',backgroundColor:'whitesmoke'}} alignItems="center" justify='center'>
                {
                    DataPet.map((item)=>{
                    return ( <Grid item xs={12} sm={12} md={4} lg={4} >
                        <Card key={item.key} picture={item.picture} alt={item.alt} title={item.title}/>
                        </Grid>);
                })} 
        </Grid>
    );
};

export default PetProject;