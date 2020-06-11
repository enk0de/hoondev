import React from 'react';
import Header from './Header';
import Title from './Title';
import AboutMe from './AboutMe';
import Project from './Project';
import Vitae from './Vitae';
import Footer from './Footer';

const Portfolio = () => {
  return (
    <div className="portfolio">
      <Header />
      <Title />
      <AboutMe />
      <Project />
      <Vitae />
      <Footer />
    </div>
  );
};

export default Portfolio;
