import React, { useMemo, useEffect } from 'react';
import { connect } from 'react-redux';
import { toggle, listingAsync } from '../modules/board';
import Blog from '../components/blog';
import qs from 'qs';

const BlogContainer = ({ loading, toggle, location, listingAsync }) => {
  useEffect(() => {
    listingAsync();
  }, [listingAsync]);

  useEffect(() => {
    if (loading.get) {
      const queryId = qs.parse(location.search, {
        ignoreQueryPrefix: true,
      }).id;

      toggle(parseInt(queryId));
    }
  }, [loading]);

  return <Blog />;
};

export default connect(
  ({ board }) => ({
    loading: board.loading,
  }),
  {
    toggle,
    listingAsync,
  },
)(BlogContainer);
