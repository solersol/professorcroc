import React from 'react';
import { about } from "../assets/images";

const About = () => {
  return (
    <section className="w-full flex flex-col lg:flex-row justify-center items-center min-h-screen gap-10 px-5 pt-0 mt-0 pb-0 mb-0">
      <div className="lg:w-7/12 p-4">
        <h1 className="font-anton text-[50px] mb-4">Your Heading</h1>
        <h2 className="font-anton text-[30px] mb-4">
          This is a block of text on the left side. You can add any content you want here. 
          Make sure to fill this with relevant information about your section. 
          It will be displayed next to the image on larger screens and above it on smaller screens.<br/>
          This is a block of text on the left side. You can add any content you want here. 
          Make sure to fill this with relevant information about your section. 
          It will be displayed next to the image on larger screens and above it on smaller screens.
        </h2>
      </div>
      <div className="lg:w-5/12 p-4">
        <img src={about} alt="New Section" className="w-full" />
      </div>
    </section>
  );
};

export default About;
