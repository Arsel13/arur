import React from "react";

export default function Services(props) {
  return (
    <div ref={props.refProp} className="w-4/5 md:w-3/4 m-auto py-16 md:py-32">
      <div className="text-center">
        <p className="text-black text-opacity-50">How We Can Help</p>
        <h1 className="text-2xl md:text-5xl font-semibold text-center mb-16">
          What We Offer
        </h1>
      </div>
      <div data-aos="zoom-in-down" className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-6 [&>div]:text-center [&>div]:cursor-pointer">
        <div className=" space-y-4 p-5 shadow-2xl rounded-xl bg-white hover:scale-110 duration-300 ">
          <div>
            <img
              className="m-auto"
              src="https://www.odoo.com/web/image/35110692-82b1efbd/icon_services_implementation.svg"
              alt=""
            />
          </div>
          <h1 className="text-2xl font-bold">Design</h1>
          <p className="text-sm">
            We craft a web design that mirrors your brand identity and adheres
            to your graphic standards.
          </p>
        </div>
        <div className="space-y-4 p-5 shadow-2xl rounded-xl bg-white hover:scale-110 duration-300">
          <div>
            <img
              className="m-auto"
              src="https://www.odoo.com/web/image/35110700-3cc2f6d9/icon_services_design.svg"
              alt=""
            />
          </div>
          <h1 className="text-2xl font-bold">Development</h1>
          <p className="text-sm">
            We code and develop the entire thing - frontend and backend to meet
            your expectations.
          </p>
        </div>
        <div className=" space-y-4 p-5 shadow-2xl rounded-xl bg-white hover:scale-110 duration-300">
          <div>
            <img
              className="m-auto"
              src="https://www.odoo.com/web/image/35110696-422c32e1/icon_services_dev.svg"
              alt=""
            />
          </div>
          <h1 className="text-2xl font-bold">Implementation</h1>
          <p className="text-sm">
            We deploy the website or webstore and help you add in all the
            necessary data in place.
          </p>
        </div>
        <div className=" space-y-4 p-5 shadow-2xl rounded-xl bg-white hover:scale-110 duration-300">
          <div>
            <img
              className="m-auto"
              src="https://www.odoo.com/web/image/35110698-c3227a72/icon_services_training.svg"
              alt=""
            />
          </div>
          <h1 className="text-2xl font-bold">Training</h1>
          <p className="text-sm">
            We end with a base-level training for you to edit or troubleshoot
            the website autonomously.
          </p>
        </div>
      </div>
    </div>
  );
}
