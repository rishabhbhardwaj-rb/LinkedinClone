import React, { useEffect } from 'react';
import './App.css';
import Header from './ Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import Login from './Login';
import { auth } from './firebase';
import Widgets  from './Widgets.js';


function App() {

  const user = useSelector(selectUser);
  const dispatch  = useDispatch();
  useEffect(()=>{
    auth.onAuthStateChanged((userAuth)=>{
      if(userAuth){
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoURL:userAuth.profileURL,
      }));
      }else{
        dispatch(logout());
      }
    })
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);
  return (
    <div className="app">
      <Header />
      {!user?(<Login />):
      <div className="app__body">
        <Sidebar />
        <Feed />
        <Widgets />
      </div>
      }
      
    </div>
  );
}

export default App;
