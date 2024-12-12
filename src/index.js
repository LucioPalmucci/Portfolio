import React from 'react';
import ReactDOM from 'react-dom/client';
import Background from './Components/Background/Background.jsx';
import Experiencia from './Components/Experiencia/Experiencia.jsx';
import Intro from './Components/Introduction/Intro.jsx';
import NavBar from './Components/NavBar/NavBar.jsx';
import Proyectos from './Components/Proyectos/Proyectos.jsx';
import './index.css';
import reportWebVitals from './reportWebVitals';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Background />
    <NavBar />
    <Intro />
    <Proyectos/>
    <Experiencia/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
