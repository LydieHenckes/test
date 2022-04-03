import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GiftPage from './containers/GiftPage';
import {useState} from 'react'
import HomePage from './containers/HomePage';
import './App.css';

function App() {
  const [isMainPage, setMainPage] = useState(true)

  return (
    <div className="App">
      {isMainPage && <HomePage  setMainPage = {setMainPage} />} 
      {!isMainPage && <GiftPage setMainPage = {setMainPage} />} 
    </div>
  );
}

export default App;
