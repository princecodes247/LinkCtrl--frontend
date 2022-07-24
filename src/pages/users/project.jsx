import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { DashboardLayout } from '../../components/layouts';
import Button from '../../components/ui/Button';
// import React, { useState } from 'react';

function Project() {
  const params = useParams();
  return (
    <DashboardLayout>
      <nav className="flex justify-between py-8 px-16">
        <h1 className="text-3xl">Ebis Campaign</h1>

        <div className="flex gap-2">
          <Button>Deactivate</Button>
          <Button>Deactivate</Button>
        </div>
      </nav>
      <section className="flex gap-8 px-16 items-stretch">
        <div className="flex-1 bg-gray-900 ">
          <p>image</p>
        </div>
        <div className="flex-1">
          <div className="flex-1">
            <h2 className="text-2xl mb-8">Summary</h2>
            <div className="flex mb-8 justify-between">
              <p className="">78 total clicks</p>
              <p className="">Expires in 43m</p>
              <p className="">9 clicks left</p>
            </div>
          </div>
          <div className="flex flex-col">
            <nav className="flex items-center justify-between">
              <h4 className="text-xl font-semibold">Clicks</h4>
              <p className="text-sm">Sort by: Latest</p>
            </nav>
            <table className="table-auto border-spacing-5">
              <thead>
                <tr className="text-left">
                  <th>S/N</th>
                  <th>IP Address</th>
                  <th>Location</th>
                  <th>Device</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-700 p-8 cursor-pointer">
                  <td>1.</td>
                  <td>The Sliding Mr. Bones </td>
                  <td>Malcolm Lockyer</td>
                  <td>1961</td>
                </tr>
                <tr className="hover:bg-gray-700">
                  <td>1.</td>
                  <td>Witchy Woman</td>
                  <td>The Eagles</td>
                  <td>1972</td>
                </tr>
                <tr>
                  <td>1.</td>
                  <td>Shining Star</td>
                  <td>Earth, Wind, and Fire</td>
                  <td>1975</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section className="graphs">
        <div>Graph 1</div>
        <div>Graph 2</div>
      </section>
    </DashboardLayout>
  );
}

export default Project;
