import React from 'react';
// import React, { useState } from 'react';
import { DashboardLayout } from '../../layouts';
import Button from '../../components/Button';
import { Link, useParams } from 'react-router-dom';
// import React, { useState } from 'react';

function Project() {
  const params = useParams();
  return (
    <DashboardLayout>
      <section className="flex">
        <div className="flex-1 h-full">
          <p>image</p>
        </div>
        <div className="flex-1 h-full">
          <h1>Project Name</h1>
          <div>
            <p>Project Description</p>
            <label htmlFor="projectActive">
              <input name="projectActive" type="checkbox" />
            </label>
          </div>
          <p>Project Description</p>
          <p>Project Description</p>
          <p>Project Description</p>
        </div>
      </section>
    </DashboardLayout>
  );
}

export default Project;
