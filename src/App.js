import React from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginScreen from './screens/LoginScreen';
import { auth } from './firebase';

import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import ProfileScreen from './screens/ProfileScreen';
//import { userEvent } from '@testing-library/user-event/dist/types/setup';
function App() {
  const user=useSelector(selectUser);
  const dispatch=useDispatch();
  React.useEffect(()=>{
    const unsubscribe=auth.onAuthStateChanged((userAuth)=>{
      if(userAuth){
        
        dispatch(login({
          uid:userAuth.uid,
          email:userAuth.email
          
        }))
      }
      else{
        dispatch(logout())
      }
    });
    return unsubscribe
  },[dispatch])
  return (
    <div className="app">
      <BrowserRouter>
      {!user ? (<LoginScreen/>)
      :
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/profile" element={<ProfileScreen/>}/>
    </Routes>
      }
        
      </BrowserRouter>
      
    </div>
  );
}

export default App;
