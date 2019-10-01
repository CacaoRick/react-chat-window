import React from 'react';

const ImageMessage = (props) => {
  return (
    <a
      className="sc-message--image-a"
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
