import React from 'react';
import './header.css';
import logo from '../../logo.svg';


export default function Header(props) {
    return (
        <div id='hader1' className="mainHead">
            <div>
                <img className='logo' src={logo} alt="Logo" />
            </div>
            <div className="mainTitle">
                <h1>React Cheat Sheet<span>V16</span></h1>
            </div>
        </div>
    )
}
