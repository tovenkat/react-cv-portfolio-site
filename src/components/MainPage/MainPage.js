import React from 'react';
import LazyHero from 'react-lazy-hero';
import MacImage from "../../assets/images/alex-loian-dummy-picture-1.jpg";
import Stock7 from "../../assets/images/alex-loian-cv-stock-photos-7.jpg";

export default function MainPage() {
    return (

        <div style={{width:'100%', backgroundColor:'whitesmoke'}}>
         
            <LazyHero opacity={0} minHeight='100vh' parallaxOffset={60} isCentered={true}  imageSrc={MacImage}>
                <div style={{color:'black', paddingBottom:'38vh'}}>
                <h1 >Alex Loian</h1>
                </div>
           
            </LazyHero>
            <div style={{textAlign:'center'}}>
                <h2>Site is under Construction</h2>
            </div>
            <div style={{height:'300px',backgroundColor:'cyan'}}>

            </div>
            <div>
            <LazyHero opacity={0} minHeight='400px' parallaxOffset={60} isCentered={true}  imageSrc={Stock7}>
                <h1 style={{color:'black',textAlign:'center', paddingBottom:'200px'}}>Alex Loian</h1>
                
            </LazyHero>
        </div>
        </div>
       
    )
}
