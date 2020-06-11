import React from 'react';
import { Route } from 'react-router-dom';
import './App.scss';
import Portfolio from './components/portfolio';
import BlogContainer from './containers/BlogContainer';

const App = () => {
  return (
    <div className="App">
      <Route path="/" component={Portfolio} exact={true} />
      <Route path="/blog" component={BlogContainer} />
    </div>
  );
};

export default App;
