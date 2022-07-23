// import React from 'react';
// import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { DashboardLayout } from '../../components/layouts';
import Button from '../../components/ui/Button';
import ProjectCard from '../../components/ui/ProjectCard';
import { ConfigureLinkModal, Dialog, Modal } from '../../components/ui/Modal';

function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <DashboardLayout>
      <div className="w-full flex items-center justify-center">
        <div className="flex w-full flex-col md:flex-row gap-2 mx-12">
          <input
            className="p-3 rounded flex-1 bg-opacity-50 bg-gray-900"
            type="text"
            placeholder="Paste a link to shorten it..."
          />
          <div className="flex gap-2  justify-end">
            <Button variant="secondary" onClick={() => {}}>
              Quick Shorten
            </Button>
            <Button onClick={() => setIsModalOpen(true)}>Shorten it</Button>
          </div>
          {/* <Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen} /> */}
          <ConfigureLinkModal
            isOpen={isModalOpen}
            setIsOpen={setIsModalOpen}
            originalLink="www.google.com"
          >
            <p>Dialog</p>
          </ConfigureLinkModal>
        </div>
      </div>
      <nav className="flex justify-between p-4 mx-8">
        <h2 className="text-lg font-semibold">All Projects</h2>
        <div>Filter</div>
      </nav>
      <section className="">
        {/* <div>
          <p>No projects found</p>
          <Button>Create new project</Button>
        </div> */}
        <div className="flex flex-col gap-8 sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-8 px-4">
          {[1, 2, 3, 4, 4, 4, 4, 4].map((projectID) => (
            <ProjectCard projectID={projectID} />
          ))}
        </div>
      </section>
    </DashboardLayout>
  );
}

export default Dashboard;
