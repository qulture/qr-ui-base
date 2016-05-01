import React, { PropTypes } from 'react';
import ReactMarkdown from 'react-markdown';

function Markdown(props) {
  const { value } = props;

  return <ReactMarkdown className="qr-markdown-preview" source={value} />;
}

Markdown.propTypes = {
  value: PropTypes.string
}

export default Markdown;
