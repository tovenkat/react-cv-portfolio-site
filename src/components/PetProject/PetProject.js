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
    
const theme = {
    paddingTop:'40px',
    paddingBottom:'40px',
    backgroundColor:'whitesmoke'
};

const petItems = DataPet.map((item)=>{
    return ( <Grid item xs={11} sm={11} md={11} lg={11} key={item.key}>
        <Card key={item.key} picture={item.picture} alt={item.alt} title={item.title}/>
        </Grid>);
});

const PetProject = () => {
    return (
        <Grid container spacing={1} style={theme} alignItems="center" justify='center'>
                {petItems} 
        </Grid>
    );
};

export default PetProject;