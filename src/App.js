import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import LeftBar from './components/LeftBar';
import Feeds from './components/Feeds';
import LoginPage from './components/LoginPage';
import {useDispatch,useSelector} from 'react-redux'
import {login, logout,selectUser } from './features/user/userSlice'
import {onAuthStateChanged} from 'firebase/auth'
import {auth} from './firebase/firebase'
import Widgets from './components/Widgets';
function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth,(user)=>{
      if (user) {
        const {displayName,email,photoURL} = user;
        dispatch(login({name:displayName,email:email,photoURL:photoURL}))
      } else {
        dispatch(logout());
      }
    })
  }, []);
  return (
    <div className="app">
       {user ? 
          <div className="app--all-contents">
              <Header/>
              <main className="app--main">
                <LeftBar/>
                <Feeds/>
                <Widgets/>
              </main>
          </div> :
        <LoginPage/> }
    </div>
  );
}

export default App;
