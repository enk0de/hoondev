import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { toggle } from '../modules/board';
import LatestPosts from '../components/blog/LatestPosts';

const LatestPostsContainer = ({ documents, loading, toggle }) => {
  return (
    <LatestPosts documents={documents} loading={loading} toggle={toggle} />
  );
};

export default connect(
  ({ board }) => ({
    documents: board.documents,
    loading: board.loading,
  }),
  {
    toggle,
  },
)(LatestPostsContainer);
