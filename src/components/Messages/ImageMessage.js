import React from 'react';

const ImageMessage = (props) => {
  return (
    <a
      rel="noopener noreferrer"
      target="_blank"
      href={props.data.url}
    >
      <img
        className="sc-message--image"
        src={props.data.url}
      />
    </a>
  );
};

export default ImageMessage;
