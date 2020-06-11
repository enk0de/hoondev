import React from 'react';
import { connect } from 'react-redux';
import { toggle } from '../modules/board';
import LatestPosts from '../components/blog/LatestPosts';

const LatestPostsContainer = ({ documents, toggle }) => {
  return <LatestPosts documents={documents} toggle={toggle} />;
};

export default connect(
  ({ board }) => ({
    documents: board.documents,
  }),
  {
    toggle,
  },
)(LatestPostsContainer);
