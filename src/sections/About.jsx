import React from 'react';
import { about } from "../assets/images";

const About = () => {
  return (
    <section id="about" className="w-full flex flex-col lg:flex-row justify-center items-center min-h-screen gap-10 px-5 pt-0 mt-0 pb-0 mb-0">
      <div className="lg:w-7/12 p-4">
        <h1 className="font-anton text-[50px] mb-4">WHO's $CROC</h1>
        <h2 className="font-anton text-[30px] mb-4">
          Professor $CROC is an OG teacher in the Solana space—who do you think taught everything to the boys' club?<br/>
          <br/>This is where it all began. $CROC has stepped back into the picture after retiring, needing to make ends meet. <br/>He knows everyone's secrets, but especially $BRETT's...<br/><br/>
          Stay tuned! We'll be releasing short episodes with hidden secrets every Monday and Friday. Follow all our socials to catch them all!        </h2>
      </div>
      <div className="lg:w-5/12 p-4">
        <img src={about} alt="New Section" className="w-full" />
      </div>
    </section>
  );
};

export default About;
