// import React, { useState } from 'react';
import React from 'react';
import Button from '../components/Button';
// import './Home.css'
import Header from '../components/Header';
import FeatureCard from '../components/FeatureCard';
import Footer from '../components/Footer';
import QuickShort from '../components/QuickShort';
import TestimonialSection from '../components/TestimonialSection';

function Home() {
  return (
    <main className="text-white bg-black">
      <Header />

      <section className="flex flex-col items-center justify-center w-full h-screen">
        <h1 className="text-center text-9xl font-title">
          <span>Shorten</span>
          <br />
          <span>Share</span>
          <br />
          <span>Track</span>
          <br />
        </h1>
        <div className="flex flex-col w-2/6 gap-5 sm:flex-row">
          <Button>Try for free</Button>
          <Button>See Pricing</Button>
        </div>
      </section>
      <QuickShort />
      <section className="flex flex-col gap-12 p-8 sm:grid sm:grid-cols-2 md:grid-cols-4">
        {[1, 2, 3, 4, 5, 6, 7, 8].map(() => (
          <FeatureCard />
        ))}
      </section>

      <TestimonialSection />
      <section>Pricing </section>
      <section>
        <div className="p-12 bg-gray-300 newsletter_card">k</div>
      </section>

      <Footer />
    </main>
  );
}

export default Home;
