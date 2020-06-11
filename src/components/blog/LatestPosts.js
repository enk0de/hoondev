import React, { useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';
import './LatestPosts.scss';

export const PostItem = ({ id, date, title, desc, toggle }) => {
  console.log(date);
  return (
    <div className="blog-lp-item_container">
      <div className="date">{date}</div>
      <Link
        to={'/blog/read?id=' + id}
        className="title"
        onClick={() => {
          toggle(id);
        }}
      >
        {title}
      </Link>
      <div className="desc">{desc}</div>
    </div>
  );
};

const LatestPosts = ({ documents, loading, toggle }) => {
  return (
    <div className="blog-lp_container">
      <h2 className="lp_title">Latest Posts</h2>
      {!loading.get && <span>Loading</span>}
      {loading.get &&
        documents.map((doc) => (
          <PostItem
            key={doc.id}
            id={doc.id}
            date={doc.date}
            title={doc.title}
            desc={doc.desc}
            toggle={toggle}
          />
        ))}
    </div>
  );
};

export default LatestPosts;
