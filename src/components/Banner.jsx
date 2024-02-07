import React from "react";
export default function Banner(props) {


  return (
    <div className="bg-[#46c6ed]">
      <div className="grid md:grid-cols-2 items-center w-11/12 md:w-3/4 m-auto pt-24 pb-32">
        <div className="px-5">
          <h3 className="text-white text-3xl md:text-6xl font-semibold">
            Let’s Get Started With Your Website
          </h3>
          <p className="text-white text-sm md:text-xl my-5">
            We take care of it all - from your web design to final development.
          </p>
          <div className="text-center md:text-left my-16">
            <a href="/quotation"  className="text-white text-xl  rounded-sm border border-[#1d2f5d] bg-[#1d2f5d] px-8 py-2">
            Get a Quote
            </a>
          </div>
        </div>
        <div>
          <img className="w-auto h-auto" src="images/banner1.png" alt="" />
        </div>
      </div>
    </div>
  );
}
