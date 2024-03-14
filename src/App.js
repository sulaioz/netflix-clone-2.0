import React, { useEffect } from 'react';
import './App.css';

import HomeScreen from './screens/HomeScreen';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginScreen from './LoginScreen';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/counter/userSlice';

import ProfileScreen from './screens/ProfileScreen';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(()  => {

const unsubscribe = auth.onAuthStateChanged((userAuth)  =>{
if (userAuth){

  //loggedin

dispatch(login({

  uid: userAuth.uid,
  email: userAuth.email,
})
);

} else {

  //loggedout
  dispatch(logout());
}

});

return unsubscribe; 
  },[dispatch]);
  return (
    <div className="app">

      <BrowserRouter>
          {!user ? (

            <LoginScreen />
          ):(
            <Routes>
<Route path='/profile' element={<ProfileScreen />}>

</Route>
            <Route path="/" element={<HomeScreen />} />
            </Routes>
          )}
        
        
      
        </BrowserRouter>

    </div>
  );
}

export default App;
