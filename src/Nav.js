import React, { useEffect, useState} from 'react';
import './Nav.css';
import { useNavigate } from 'react-router-dom';
//import { useHistory } from 'react-router-dom';


export default function Nav(){
const navigate=useNavigate();
const [show,handleShow]=useState(false);
const transitionNavBar=()=>{
    if(window.scrollY>100){
        handleShow(true)
    }
    else{
        handleShow(false)
    }
}
useEffect(()=>{
    window.addEventListener("scroll",transitionNavBar);
    return()=>window.removeEventListener("scroll",transitionNavBar)
},[])
    return(
        <div className={` nav ${show && 'nav__black'}`} >
            <div className='nav__content'>
                <img className='nav__logo' onClick={navigate('/')} src="https://pngimg.com/d/netflix_PNG26.png"/>


                <img className='nav__avatar' onClick={navigate('/profile')}src='https://cdn.imgbin.com/8/20/20/imgbin-samsung-galaxy-a8-a8-user-login-telephone-avatar-pawn-pvE7Qhr6Zk7kLJpGiWZ9FFRVf.jpg'/>

                
           
            </div>            
        </div>
    )
}