import React from 'react';
import Header from './Header';
import Operating from './Operating';
import Article from './Article';
import About from './About';
import Spaceman from './Spaceman';
import Alt from './Alt';
import LogoBar from './LogoBar';
import Footer from './Footer';

function Home() {
    return (
        <React.Fragment>
            <Header />
            <Operating />
            <Article />
            <About />
            <Spaceman />
            <Alt />
            <LogoBar />
            <Footer />
        </React.Fragment>
    );
}

export default Home;