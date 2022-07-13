import React from 'react';
import { Link, useParams } from 'react-router-dom';
// import React, { useState } from 'react';

function Project() {
  const params = useParams();
  return (
    <main className="flex justify-center p-4">
      <Link to="/">Expenses {params.projectID}</Link>
      <div className="App-header">LinkCtrl Project</div>
    </main>
  );
}

export default Project;
