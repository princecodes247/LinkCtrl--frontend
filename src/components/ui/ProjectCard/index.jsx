// import React, { useState } from 'react';
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import LinkIcon from '../../../assets/LinkIcon1.svg';

function ProjectCard({ projectID }) {
  return (
    <Link to={`/project/${projectID}`}>
      <div className="bg-gray-900 bg-opacity-20 hover:bg-opacity-40 p-4 flex flex-col justify-center rounded transition duration-100">
        <div className="flex items-center justify-between">
          <h3>Ebi Campaign</h3>
          <div className="flex flex-col items-center">
            <h4>12</h4>
            <p className="text-xs text-gray-600">click/hr</p>
          </div>
        </div>
        <div className="text-sm">
          <p className="text-gray-700">https://www.google.com</p>
          {/* <LinkIcon /> */}
          <p className="text-gray-400">https://www.google.com</p>
        </div>
        {/* <div className="my-4">Lorem ipsum dolor sit amet.</div> */}
        <div className="flex whitespace-nowrap gap-2 mt-4 justify-between text-sm">
          <div className="flex-1 text-center bg-gray-900 rounded px-2">
            <p className="text-xs">total clicks</p>
            <p className="text-base">78</p>
          </div>
          <div className="flex-1 text-center bg-gray-900 rounded px-2">
            <p className="text-xs">Expires in</p>
            <p className="text-base">43m</p>
          </div>
          <div className="flex-1 text-center bg-gray-900 rounded px-2">
            <p className="text-xs">clicks left</p>
            <p className="text-base">4</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

// ProjectCard.defaultProps = {
//   projectID: '',
// };

ProjectCard.propTypes = {
  projectID: PropTypes.string.isRequired,
};

export default ProjectCard;
