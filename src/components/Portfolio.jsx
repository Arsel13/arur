import React from "react"; 
export default function Portfolio(props) {
  return (
    <div ref={props.refProp} className="py-20 md:py-40 bg-gradient-to-r from-[#46c6ed] to-[#1d2f5d]">
      <div className="w-3/4 m-auto mb-10 text-center">
        <h4 className="text-white text-opacity-60">DISCOVER OUR WORK</h4>
        <h2 className="text-white text-4xl">They already trust us</h2>
      </div>
      <div data-aos="zoom-in-left" className="w-3/4 m-auto grid grid-cols-2 md:grid-cols-3 gap-8">
        <div>
          <img
            className="rounded-md h-32 md:h-52 md:object-cover"
            src="images/1.png"
            alt=""
          />
        </div>
        <div>
          <img
            className="rounded-md h-32 md:h-52 md:object-cover"
            src="images/6.png"
            alt=""
          />
        </div>
        <div>
          <img
            className="rounded-md h-32 md:h-52 md:object-cover"
            src="images/3.png"
            alt=""
          />
        </div>
        <div>
          <img
            className="rounded-md h-32 md:h-52 md:object-cover"
            src="images/4.png"
            alt=""
          />
        </div>
        <div>
          <img
            className="rounded-md h-32 md:h-52 md:object-cover"
            src="images/5.png"
            alt=""
          />
        </div>
        <div>
          <img
            className="rounded-md h-32 md:h-52 md:object-cover"
            src="images/2.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
