import { useEffect, useRef } from "react";
import { banner2 } from "../assets/images";

const Tokenomics = () => {
  const counterRef = useRef(null);

  useEffect(() => {
    const countUp = (target, duration) => {
      const counter = counterRef.current;
      let start = 0;
      const end = parseInt(target, 10);
      const increment = end / (duration / 1000 * 60); // calculate increment based on frame rate

      const updateCounter = () => {
        start += increment;
        if (start >= end) {
          counter.innerText = end.toLocaleString();
        } else {
          counter.innerText = Math.ceil(start).toLocaleString();
          requestAnimationFrame(updateCounter);
        }
      };

      updateCounter();
    };

    // Call countUp function with desired number and duration
    countUp(1000000000, 2000); // count to 1 billion in 2 seconds
  }, []);

  return (
    <div id="tokenomics" className="flex flex-col items-center justify-center pt-0 mt-0 mb-0 pb-0">
      <div className="flex flex-col md:grid md:grid-cols-2 gap-4 mb-8">
        <button className="bg-[#8da7ff] text-white rounded-3xl hover:bg-blue-700 font-anton text-[20px] border-4 border-solid border-black py-[30px] px-[150px]">
          <a href="https://pump.fun/9pXwWf2wFMvcmAEAbhxcW2x5aR6qxMZtDXgww3uaWzXK" target="_blank" className="">PUMP.FUN</a>
        </button>
        <button className="bg-[#8da7ff] text-white rounded-3xl hover:bg-blue-700 font-anton text-[20px] border-4 border-solid border-black py-[30px] px-[150px]">
          <a href="https://x.com/CrocProfessor" target="_blank" className="">TWITTER</a>
        </button>
        <button className="bg-[#8da7ff] text-white rounded-3xl hover:bg-blue-700 font-anton text-[20px] border-4 border-solid border-black py-[30px] px-[150px]">
          <a href="https://t.me/ProfeessorCROC" target="_blank" className="">TELEGRAM</a>
        </button>
        <button className="bg-[#8da7ff] text-white rounded-3xl hover:bg-blue-700 font-anton text-[20px] border-4 border-solid border-black py-[30px] px-[150px]">
          <a href="https://dexscreener.com/" target="_blank" className="">DEXSCREENER</a>
        </button>
      </div>
      <div className="w-full mx-16 mt-32">
        <img src={banner2} alt="banner" className="w-full" />
      </div>
      <h1 className="justify-center flex font-anton text-[40px] sm:text-[50px] md:text-[60px] lg:text-[70px] mt-32">SUPPLY : <span ref={counterRef}>0</span></h1>
    </div>
  );
};

export default Tokenomics;
