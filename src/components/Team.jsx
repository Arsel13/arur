import React from "react";

export default function Team(props) {
  return (
    // <div className="relative py-16 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[35%] after:w-full md:after:bg-[#46c6ed] after:z-10 ">
    <div ref={props.refProp} className="relative py-16">
      <div className="w-4/5 md:w-3/4 m-auto relative z-20">
        <div className="">
          <p className="text-black text-opacity-50">Meet Our Team</p>
          <h1 className="text-2xl md:text-5xl font-semibold mb-16">
            We House Web Experts
          </h1>
        </div>
        <div className="grid md:grid-cols-5 gap-x-10 gap-y-10 ">
          <div data-aos="slide-up" className="col-span-2 space-y-4 rounded-xl">
            <div>
              <h1 className="text-2xl font-bold">Expert Designers</h1>
              <p className="text-sm">
                Our top-notch designers are prepared to create attractive
                designs that align with your brand's style.
              </p>
            </div>
            <div>
              <h1 className="text-2xl font-bold">E-Commerce Pros</h1>
              <p className="text-sm">
                Our functional team will help you with your e-commerce webstore
                by helping setup all products.
              </p>
            </div>
            <div>
              <h1 className="text-2xl font-bold">Front-end Developer</h1>
              <p className="text-sm">
                We incorporate custom features and seamless integrations via our
                front-end developers.
              </p>
            </div>
          </div>
          <div data-aos="fade-right" className="col-span-3">
            <img
              className="h-96 m-auto rounded-lg"
              src="images/team.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
