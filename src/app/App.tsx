import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Home } from './components/home/Home';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import '../assets/fonts/fonts.css';
import '../assets/images/exellion_logo.png';

ReactDOM.render(
    <Home />,
    document.getElementById('root')
);
