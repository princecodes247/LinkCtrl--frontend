// import React, { useState } from 'react';
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function ProjectCard({ projectID }) {
  return (
    <Link to={`project/${projectID}`}>
      <div className="p-4 flex justify-center">
        <p>Name</p>
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
