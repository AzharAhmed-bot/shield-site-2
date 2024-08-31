import React from 'react';
import ReactPlayer from 'react-player';

export default function VideoOverlay({ url, onClose }) {
  const handleClose = (e) => {
    e.stopPropagation();
    onClose();
  };

  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center"
      onClick={handleClose}
    >
      <div
        className="relative w-11/12 sm:w-3/4 h-2/4 lg:h-3/4 bg-white rounded-lg shadow-lg p-4"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-2 left-2 text-black bg-gray-200 hover:bg-gray-300 rounded-full px-2 focus:outline-none"
          onClick={handleClose}
        >
          X
        </button>
        <ReactPlayer
          url={url}
          width="100%"
          height="100%"
          controls={true}
        />
      </div>
    </div>
  );
}
