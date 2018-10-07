import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Home } from './components/home/Home';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import '../assets/fonts/fonts.css';

ReactDOM.render(
    <div>
        <Header />
        <Home />
        <Footer />
    </div>,
    document.getElementById('root')
);
