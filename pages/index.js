import React from 'react';
import Header from '../components/Layout/Header';
import Hero from '../components/Layout/Hero';
import LearningPathEditor from '../components/LearningPathEditor';
import Footer from '../components/Layout/Footer';

const Home = () => {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <LearningPathEditor />
      </main>

      <Footer />

      <style jsx global>{`
        * {
          box-sizing: border-box;
          box-shadow: inset 0px 0px 1px red;
        }
      
        body {
          background-color: #F6F6F6;
          margin: 0;
          padding: 0;
        }
      `}</style>
    </>
  );
};

export default Home;
