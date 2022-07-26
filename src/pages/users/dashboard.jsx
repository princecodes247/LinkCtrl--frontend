// import React from 'react';
import React, { useEffect, useState } from 'react';
import { DashboardLayout } from '../../components/layouts';
import Button from '../../components/ui/Button';
import ProjectCard from '../../components/ui/ProjectCard';
import { ConfigureLinkModal, Dialog, Modal } from '../../components/ui/Modal';

function Dashboard() {
  const [isConfigureLinkModalOpen, setIsConfigureLinkModalOpen] =
    useState(false);
  const [newLink, setNewLink] = useState('');
  const [isResultModalOpen, setIsResultModalOpen] = useState(false);
  const [result, setResult] = useState({});

  // const

  const isLink = (link) => {
    const res = link.match(
      /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
    );
    return res !== null;
  };

  useEffect(() => {});

  const handleCreateLink = (data) => {
    const newResult = {
      success: true,
    };
    setIsConfigureLinkModalOpen(false);
    setResult(newResult);
    setIsResultModalOpen(true);
  };
  const handleShortenRequest = (quickShort = true) => {
    if (!isLink) return false;
    if (quickShort) {
      handleCreateLink({ newLink });
      return;
    }
    setIsConfigureLinkModalOpen(true);
  };

  return (
    <DashboardLayout>
      <div className="w-full flex items-center justify-center">
        <div className="flex w-full flex-col md:flex-row gap-2 mx-12">
          <input
            className="p-3 rounded flex-1 bg-opacity-50 bg-gray-900"
            type="text"
            placeholder="Paste a link to shorten it..."
            value={newLink}
            onInput={(e) => setNewLink(e.target.value)}
          />
          <div className="flex gap-2 md:justify-end">
            <Button
              variant="secondary"
              classNames="grow"
              onClick={() => handleShortenRequest()}
            >
              Quick Shorten
            </Button>
            <Button
              classNames="grow"
              onClick={() => handleShortenRequest(false)}
            >
              Shorten it
            </Button>
          </div>
          <Modal
            data={result}
            isOpen={isResultModalOpen}
            setIsOpen={setIsResultModalOpen}
          />
          <ConfigureLinkModal
            isOpen={isConfigureLinkModalOpen}
            setIsOpen={setIsConfigureLinkModalOpen}
            originalLink={newLink}
            handlerFunction={handleCreateLink}
          >
            <p>Dialog</p>
          </ConfigureLinkModal>
        </div>
      </div>
      <nav className="flex justify-between p-4 mx-8">
        <h2 className="text-lg font-semibold">All Projects</h2>
        {/* <div>Filter</div> */}
      </nav>
      <section className="">
        {/* <div>
          <p>No projects found</p>
          <Button>Create new project</Button>
        </div> */}
        <div className="flex flex-col gap-8 sm:grid sm:grid-cols-2 xl:grid-cols-3 mx-8 px-4">
          {[1, 2, 3, 4, 4, 4, 4, 4].map((projectID) => (
            <ProjectCard projectID={projectID} />
          ))}
        </div>
      </section>
    </DashboardLayout>
  );
}

export default Dashboard;
