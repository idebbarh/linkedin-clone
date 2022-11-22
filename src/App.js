import React from 'react';
import './App.css';
import Header from './components/Header';
import LeftBar from './components/LeftBar';
import Feeds from './components/Feeds';
import LoginPage from './components/LoginPage';
function App() {
  return (
    <div className="app">
        <LoginPage/>
        {/* <div className="app--all-contents">
          <Header/>
          <main className="app--main">
            <LeftBar/>
            <Feeds/>
            Widgets
          </main>
        </div> */}
    </div>
  );
}

export default App;
