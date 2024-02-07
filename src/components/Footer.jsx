import React from "react";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

export default function Footer() {
  return (
    <div className="bg-[#212529]">
      <div className="w-3/4 m-auto text-center py-12">
        <div className="my-12">
          <img className="h-32 m-auto" src="images/logo.png" alt="logo" />
        </div>
        <div className="grid md:grid-cols-5 text-white text-start gap-x-5 gap-y-8">
          <div>
            <h1 className="font-semibold text-xl">Links</h1>
            <ul className="text-white text-opacity-60">
              <li>Services</li>
              <li>Team</li>
              <li>Quotation</li>
              <li>Portfolio</li>
            </ul>
          </div>
          {/* <div>
            <h1 className="font-semibold text-xl">Services</h1>
            <ul className="text-white text-opacity-60">
              <li>Support </li>
              <li>Upgrade</li>
              <li>Education</li>
            </ul>
          </div> */}
          <div>
            <h1 className="font-semibold text-xl">Social</h1>
            <ul className="text-white text-opacity-60 [&>li]:flex [&>li]:gap-x-3 [&>li]:items-center">
              <li>
                <a className="flex items-center gap-x-3" href="https://www.facebook.com/aruretech">
                  <BsFacebook /> Facebook
                </a>
              </li>
              <li>
                <a className="flex items-center gap-x-3" href="https://www.linkedin.com/company/14543180">
                  <BsLinkedin /> Linkedin
                </a>
              </li>
              <li>
                <a className="flex items-center gap-x-3" href="https://twitter.com/Aruretech">
                  <BsTwitter /> Twitter
                </a>
              </li>
              <li>
                <a className="flex items-center gap-x-3" href="https://www.instagram.com/arure.tech/">
                  <BsInstagram /> Instagram
                </a>
              </li>
            </ul>
          </div>
          <div className="md:col-span-3 text-white text-opacity-60">
            <h1 className="font-semibold text-xl">About</h1>
            <p>Let's Get Started With Your Website</p>
            <p>
              We take care of it all - from your web design to final
              development.
            </p>
            <p>
            Arure LLC, 659, 447 Broadway, 2nd Floor, New York, NY, New York, US, 10013;
            </p>
            <a href="tel:+18584634405">
            Phone # (858) 463-4405
            </a>
          </div>
        </div>
      </div>
      <div className="text-center bg-[#1c1f23] text-white py-4 ">
        <h3>Arure Technologies &trade;Ltd &reg;</h3>
      </div>
    </div>
  );
}
