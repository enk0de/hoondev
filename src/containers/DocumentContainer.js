import React from 'react';
import { connect } from 'react-redux';
import { toggle } from '../modules/board';
import Document from '../components/blog/document';
import qs from 'qs';

const DocumentContainer = ({ id, date, title, contents, toggle, location }) => {
  return <Document id={id} date={date} title={title} contents={contents} />;
};

export default connect(
  ({ board }) => {
    const selectedDocument = board.selectedDocument;

    return {
      selectedDocument: selectedDocument.id,
      date: selectedDocument.date,
      title: selectedDocument.title,
      contents: selectedDocument.contents,
    };
  },
  {
    toggle,
  },
)(DocumentContainer);
