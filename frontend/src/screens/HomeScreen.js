import React, { useEffect } from 'react';
import LandingContent from '../components/LandingContent';

const HomeScreen = () => {
  useEffect(() => {
    document.title = 'Dyverse Productions';
  });

  return (
    <div className="landing">
      <video id="background-video" playsInline loop autoPlay={true} muted>
        <source src="/space_flight.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <LandingContent />
    </div>
  );
};

export default HomeScreen;
