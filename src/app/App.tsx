import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Home } from './components/home/home';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import '../assets/fonts/fonts.css';

ReactDOM.render(
    <div>
        {/* <Header /> */}
        <Home />
        {/* <Footer /> */}
    </div>,
    document.getElementById('root')
);
