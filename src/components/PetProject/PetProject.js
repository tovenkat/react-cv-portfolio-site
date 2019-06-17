import React from 'react';
import Card from '../Material/Card';
import Grid from '@material-ui/core/Grid';

import ImgCandyshop from '../../assets/images/alex-loian-pet-ptoject-bootstrap-candyshop.png';
import ImgBurger from '../../assets/images/alex-loian-pet-ptoject-react-burger.png';
import ImgSocketChat from '../../assets/images/alex-loian-pet-ptoject-socket-chat.png';
import ToDo from '../../assets/images/alex-loian-pet-ptoject-to-do.png';

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
    },
    
    { 'key':4,
    'picture':ToDo,
    'alt':'React TO-DO app',
    'title':'React To-Do'
    }
];
    
const theme = {
    backgroundColor:'whitesmoke',
    PaddingTop:'20px'
};

const petItems = DataPet.map((item)=>{
    return ( <Grid item xs={10} sm={10} md={10} lg={10} key={item.key}>
        <Card key={item.key} picture={item.picture} alt={item.alt} title={item.title}/>
        </Grid>);
});

const PetProject = () => {
    return (
        <div >
            <h1  style={{marginBottom:'10px',}}>PET Projects</h1>
            <Grid container spacing={3} style={theme} alignItems="center" justify='center'>
                    {petItems} 
            </Grid>
        </div>);
};

export default PetProject;