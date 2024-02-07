import React from "react";

export default function Header(props) {
  return (
    <div>
      <header className="shadow-lg p-2 md:p-3">
        <div className="flex items-center justify-between w-11/12 md:w-3/4  m-auto">
          <div>
            <a href="/">
              <img className="w-32" src="images/logoDark.png" alt="logo" />
            </a>
          </div>
          <div className="hidden md:block">
            <ul className="flex items-center gap-x-8 [&>li]:cursor-pointer ">
              <li className="hover:text-[#46c6ed]">
                <button onClick={props.services}>Services</button>
              </li>
              <li className="hover:text-[#46c6ed]" onClick={props.team}>
                Team
              </li>
              <li className="hover:text-[#46c6ed]" onClick={props.working}>
                Working
              </li>
              <li className="hover:text-[#46c6ed]">
                <a href="/quotation">Quotation</a>
              </li>
              {/* <li className="hover:text-[#46c6ed]" onClick={props.quotation}>
                Quotation
              </li> */}
              <li className="hover:text-[#46c6ed]" onClick={props.portfolio}>
                Portfolio
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-x-3">
            <div>
              <a
                href="/quotation"
                
                className="text-white text-base rounded-sm border border-[#1d2f5d] bg-[#1d2f5d] px-5 py-2 "
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
