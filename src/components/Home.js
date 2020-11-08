import React from 'react';
import MainSection from './mainSection';
import AboutSection from './aboutSection';
import ContentSection from './contentSection';
import CardsSection from './cardsSection';
import Navbar from './Navbar';

const Home = () => {
  return (
    <>
      <Navbar color='rbga(0,0,0,0.01)' />
      <MainSection />
      <AboutSection />
      <ContentSection
        title='Objectives of the club'
        content='1. Development of payloads that may comprise of detectors, electronics, and associated algorithms, which can be an experimental piggyback payload on the on-going (Small or operational) satellite projects of ISRO.
                 2. Empowering the Satellite Team with the skills to develop the Satellite.
                 3. Design, fabricate, test the satellite Bus & Payload, and deliver the integrated spacecraft for launch.
                 4. Learn to use skills like project management, event planning and managing funds.
                 5. Encourage research and development in miniaturized satellites, establishing a communication link between the satellite and ground station.'
      />

      <CardsSection />
    </>
  );
};

export default Home;
