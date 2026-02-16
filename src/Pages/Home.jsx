// src/Pages/Home.jsx
import React from 'react';
import Banner from '../Components/Banner';
import Welcome from '../Components/Welcome';
import CommercialandResidential from '../Components/CommercialandResidential';
import Services from '../Components/Services';
import Project from '../Components/Project';
import Otherproject from '../Components/Otherproject';
import Reachus from '../Components/Reachus';
import Blog from '../Components/Blog';
import Client from '../Components/Client';
import Partner from '../Components/Patner';


function Home() {
  return (
    <>
      <Banner />
      <div className="flex justify-center w-full overflow-x-hidden">
        <div className="w-full max-w-[1550px]">
          <Welcome />
          <CommercialandResidential />
          <Services />
          <Project />
          <Otherproject />
          <Reachus />
          <Blog />
          <Client />
          {/* <Partner /> */}
          
        </div>
      </div>
    </>
  );
}

export default Home;
