import React from 'react'
import { roadmap } from '../assets/images'

const Roadmap = () => {
  return (
    <section className="w-full flex flex-col justify-center items-center min-h-screen gap-6 p-4">
      <h2 className="font-anton text-[24px] sm:text-[30px] md:text-[36px] lg:text-[40px] mb-4 text-center">
        ROADMAP
      </h2>
      <div className="w-full max-w-screen-lg px-4 sm:px-6 md:px-8 lg:px-10">
        <img src={roadmap} alt="New Section" className="w-full h-auto" />
      </div>
      <div className="w-full max-w-screen-lg px-4 sm:px-6 md:px-8 lg:px-10">
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-center mt-4 font-anton">
        Join us on an exciting journey with $CROC, led by the OG Solana Professor. Once we hit a $1M market cap, we’ll reveal our big plans and exciting collaborations. Spread the word and let's achieve great things together with $CROC!
        </p>
      </div>
    </section>
  )
}

export default Roadmap