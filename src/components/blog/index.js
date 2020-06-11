import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Jumbotron from './Jumbotron';
import DocumentContainer from '../../containers/DocumentContainer';
import LatestPostsContainer from '../../containers/LatestPostsContainer';
import './index.scss';
import { Route } from 'react-router-dom';

const Blog = () => {
  return (
    <div className="blog">
      <Header />
      <Jumbotron />
      <div className="frame center padding">
        <Route path="/blog" exact component={LatestPostsContainer} />
        <Route path="/blog/read" exact component={DocumentContainer} />
        <Footer />
      </div>
    </div>
  );
};

export default Blog;
