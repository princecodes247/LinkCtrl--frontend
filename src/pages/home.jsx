// import React, { useState } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import Button from '../components/Button';
// import './Home.css'
import Header from '../components/Header';
import FeatureCard from '../components/FeatureCard';
import Footer from '../components/Footer';
import QuickShort from '../components/QuickShort';
import TestimonialSection from '../components/TestimonialSection';
=======
import Button from '../components/ui/Button';
// import './Home.css'
import Header from '../components/ui/Header';
import FeatureCard from '../components/ui/FeatureCard';
import Footer from '../components/ui/Footer';
import QuickShort from '../components/ui/QuickShort';
import TestimonialSection from '../components/ui/TestimonialSection';
>>>>>>> dev

function Home() {
  return (
    <main className="text-white bg-black">
      <Header />

      <section className="flex flex-col items-center justify-center w-full h-screen">
        <h1 className="text-center text-6xl md:text-9xl font-title">
          <span>Shorten</span>
          <br />
          <span>Share</span>
          <br />
          <span>Track</span>
          <br />
        </h1>
<<<<<<< HEAD
        <div className="flex mt-12 flex-col w-4/5 sm:w-3/6 md:2/6 gap-5 sm:flex-row">
          <Button to="register">Try for free</Button>
          <Button>See Pricing</Button>
=======
        <div className="flex mt-12 flex-col w-4/5 sm:w-3/6 md:w-2/6 gap-5 sm:flex-row">
          <Button classNames="flex-1" to="register">
            Try for free
          </Button>
          <Button classNames="flex-1">See Pricing</Button>
>>>>>>> dev
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
