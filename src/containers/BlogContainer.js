import React, { useMemo, useCallback } from 'react';
import { connect } from 'react-redux';
import { toggle } from '../modules/board';
import Blog from '../components/blog';
import qs from 'qs';

const BlogContainer = ({ toggle, location }) => {
  const query = useMemo(
    () =>
      qs.parse(location.search, {
        ignoreQueryPrefix: true,
      }),
    [location.search],
  );

  const setCurDoc = useCallback(() => {
    if (query.id) toggle(parseInt(query.id));
  }, [query]);

  setCurDoc();
  return <Blog />;
};

export default connect(null, {
  toggle,
})(BlogContainer);
