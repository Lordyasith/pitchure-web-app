import React from 'react';
import Nav from '../Nav';
import "./HomeScreen.css"
import Banner from '../Banner';
import requests from '../Request';
import Row from '../Row';
export default function(){
    return(
        <div className='homeScreen'>
           
           <Banner/>
           <Nav/>
            
           <Row title="Popular" fetchUrl={requests.fetchPopular} isLargeRow/>
           <Row title="NowPlaying" fetchUrl={requests.fetchNowPlaying}/>
           <Row title="TopRated" fetchUrl={requests.fetchTopRated}/>
           <Row title="Upcoming" fetchUrl={requests.fetchPopular}/>
           
        </div>
    )
}