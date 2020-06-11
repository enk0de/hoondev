import React from 'react';
import qs from 'qs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import './index.scss';
import { Link } from 'react-router-dom';

const Document = ({ id, title, contents, date, toggle }) => {
  return (
    <div className="document">
      <div className="header">
        <Link className="back" to="/blog">
          <FontAwesomeIcon icon={faAngleLeft} style={{ marginRight: '8px' }} />
          뒤로가기
        </Link>
        <h2 className="title">{title}</h2>
        <div className="info">
          <span className="date">{date.toLocaleString('ko-KR')}</span>
        </div>
      </div>
      <p>{contents}</p>
    </div>
  );
};

export default Document;
