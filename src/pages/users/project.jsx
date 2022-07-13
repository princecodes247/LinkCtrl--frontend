import React from 'react';
// import React, { useState } from 'react';
import { DashboardLayout } from '../../layouts';
import Button from '../../components/Button';
import ProjectCard from '../../components/ProjectCard';
import { Link, useParams } from 'react-router-dom';
// import React, { useState } from 'react';

function Project() {
  const params = useParams();
  return (
    <DashboardLayout>
      <nav className="flex justify-between p-4">
        <h2>All Projects</h2>
        <div>Filter</div>
      </nav>
      <section>
        {/* <div>
        <p>No projects found</p>
        <Button>Create new project</Button>
      </div> */}
        <div className="flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-3 border border-red-400">
          {[1, 2, 3, 4, 4, 4, 4, 4].map(() => (
            <ProjectCard />
          ))}
        </div>
      </section>
    </DashboardLayout>
  );
}

export default Project;
