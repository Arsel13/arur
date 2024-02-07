import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./Footer";
import Header from "./Header";

export default function Quotation(props) {
  const [loading, setLoading] = useState(false);

  const success_toaster = (message) => {
    toast.success(message, {
      position: toast.POSITION.TOP_RIGHT,
      theme: "dark",
    });
  };
  const info_toaster = (message) => {
    toast.info(message, {
      position: toast.POSITION.TOP_RIGHT,
      theme: "dark",
    });
  };
  const error_toaster = (message) => {
    toast.error(message, {
      position: toast.POSITION.TOP_RIGHT,
      theme: "dark",
    });
  };

  const PostAPI = async (url, postData) => {
    let config = {
      headers: {
        accessToken: localStorage.getItem("accessToken"),
      },
    };
    try {
      setLoading(true); 
      let response = await axios.post(
        "https://backend.arure.solutions/" + url,
        postData,
        config
      );
      setLoading(false); 
      return response;
    } catch (error) {
      setLoading(false);
    }
  };

  const [quotation, setQuotation] = useState({
    previousDesign: "Yes, I only need help for development",
    pages: "",
    extraFeatures: [], // Use an array to store the selected checkboxes
    responsive:
      "Yes, the mobile version is just a variation of the desktop version.",
    timeline: "1 Week",
    name: "",
    email: "",
    contact: "",
  });

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      const updatedExtraFeatures = [...quotation.extraFeatures];

      if (checked) {
        updatedExtraFeatures.push(name);
      } else {
        const index = updatedExtraFeatures.indexOf(name);
        if (index > -1) {
          updatedExtraFeatures.splice(index, 1);
        }
      }

      setQuotation((prevState) => ({
        ...prevState,
        extraFeatures: updatedExtraFeatures,
      }));
    } else {
      setQuotation((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const sendMail = async (e) => {
    e.preventDefault();
     
    if (quotation.previousDesign === "") {
      info_toaster("Please Select Any Option");
    } else if (quotation.pages === "") {
      info_toaster("Please enter No of Pages");
    } else if (quotation.extraFeatures.length === 0) {
      info_toaster("Please select at least one Extra Feature");
    } else if (quotation.responsive === "") {
      info_toaster("Is your site Responsive");
    } else if (quotation.timeline === "") {
      info_toaster("What's your expected Timeline");
    } else if (quotation.name === "") {
      info_toaster("Please enter your Name");
    } else if (quotation.email === "") {
      info_toaster("Please enter your Email");
    } else {
      e.preventDefault();
      setLoading(true);
      let res = await PostAPI("sendmail", {
        previousDesign: quotation.previousDesign,
        pages: quotation.pages,
        extraFeatures: quotation.extraFeatures,
        responsive: quotation.responsive,
        timeline: quotation.timeline,
        name: quotation.name,
        email: quotation.email,
        contact: quotation.contact,
      });
      if (res?.data?.status === "1") {
        setLoading(false);
        success_toaster(res?.data?.message);
        setQuotation({
          previousDesign: "",
          pages: "",
          extraFeatures: [],
          responsive: "",
          timeline: "",
          name: "",
          email: "",
          contact: "",
        });
      } else {
        e.preventDefault();
        error_toaster(res?.data?.message);
      }
    }
  };
  return (
    <>
      <ToastContainer />
      <Header/>
      <div ref={props.refProp} className="py-20 md:py-40 bg-[#e9ecef]">
        <div className="w-1/2 m-auto mb-10 text-center">
          <h4 className="text-[#017e84]">Tell Us About Your Web</h4>
          <h2 className="text-4xl font-semibold mt-3">Want A Quotation?</h2>
          <p className="mt-3">This is exclusive of all content, logo, and branding vision.</p>
        </div>
        <div className="w-3/5 m-auto">
          <form action="">
            <div>
              <label className="block text-lg font-medium leading-6 text-gray-700 my-3">
                Do you already have a design?
              </label>
              <select
                value={quotation.previousDesign}
                onChange={onChange}
                id="previousDesign"
                name="previousDesign"
                className="h-full w-full border-0 border-transparent rounded-md shadow-sm bg-white py-3 px-2 text-gray-500 focus:outline-none focus:ring-0 focus:border-transparent sm:text-base"
              >
                <option value="Yes, I only need help for development">
                Yes, I only need help for development*
                </option>
                <option value="Yes, I only need help for integration">
                  Yes, I only need help for integration.
                </option>
                <option value="I have one but it needs some improvements..">
                  I have one but it needs some improvements..
                </option>
                <option value="I don't have a design or I want a new one..">
                  I don't have a design or I want a new one..
                </option>
                <option value="I want a top-notch design.">
                  I want a top-notch design.
                </option>
              </select>
            </div>

            <div>
              <h3 className="block text-lg font-medium leading-6 text-gray-700 my-3">
                How many pages do you have?
              </h3>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="bg-white shadow-sm rounded-md px-6 flex justify-between items-center">
                  <label className="text-lg font-medium leading-6 text-gray-700 my-3">
                    1 - 5
                  </label>
                  <input
                    type="radio"
                    value="1 - 5"
                    onChange={onChange}
                    name="pages"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                </div>
                <div className="bg-white shadow-sm rounded-md px-6 flex justify-between items-center">
                  <label className="text-lg font-medium leading-6 text-gray-700 my-3">
                    6 - 10
                  </label>
                  <input
                    type="radio"
                    value="6 - 10"
                    onChange={onChange}
                    name="pages"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                </div>
                <div className="bg-white shadow-sm rounded-md px-6 flex justify-between items-center">
                  <label className="text-lg font-medium leading-6 text-gray-700 my-3">
                    11 - 15
                  </label>
                  <input
                    type="radio"
                    value="11 - 15"
                    onChange={onChange}
                    name="pages"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                </div>
                <div className="bg-white shadow-sm rounded-md px-6 flex justify-between items-center">
                  <label className="text-lg font-medium leading-6 text-gray-700 my-3">
                    16 - 20
                  </label>
                  <input
                    type="radio"
                    value="16 - 20"
                    onChange={onChange}
                    name="pages"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                </div>
              </div>
            </div>
            <div>
              <h3 className="block text-lg font-medium leading-6 text-gray-700 my-3">
                Which extra features do you need?
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white shadow-sm rounded-md px-6 flex justify-between items-center">
                  <label className="text-lg font-medium leading-6 text-gray-700 my-3">
                    Blog
                  </label>
                  <input
                    type="checkbox"
                    name="Blog"
                    checked={quotation.extraFeatures.includes("Blog")}
                    onChange={onChange}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                </div>
                <div className="bg-white shadow-sm rounded-md px-6 flex justify-between items-center">
                  <label className="text-lg font-medium leading-6 text-gray-700 my-3">
                    Events
                  </label>
                  <input
                    type="checkbox"
                    name="Events"
                    checked={quotation.extraFeatures.includes("Events")}
                    onChange={onChange}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                </div>
                <div className="bg-white shadow-sm rounded-md px-6 flex justify-between items-center">
                  <label className="text-lg font-medium leading-6 text-gray-700 my-3">
                    eCommerce
                  </label>
                  <input
                    type="checkbox"
                    name="eCommerce"
                    checked={quotation.extraFeatures.includes("eCommerce")}
                    onChange={onChange}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                </div>
                <div className="bg-white shadow-sm rounded-md px-6 flex justify-between items-center">
                  <label className="text-lg font-medium leading-6 text-gray-700 my-3">
                    Livechat
                  </label>
                  <input
                    type="checkbox"
                    name="Livechat"
                    checked={quotation.extraFeatures.includes("Livechat")}
                    onChange={onChange}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                </div>
                
                <div className="bg-white shadow-sm rounded-md px-6 flex justify-between items-center">
                  <label className="text-lg font-medium leading-6 text-gray-700 my-3">
                    Forum
                  </label>
                  <input
                    type="checkbox"
                    name="Forum"
                    checked={quotation.extraFeatures.includes("Forum")}
                    onChange={onChange}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                </div>
                <div className="bg-white shadow-sm rounded-md px-6 flex justify-between items-center">
                  <label className="text-lg font-medium leading-6 text-gray-700 my-3">
                    Appointment
                  </label>
                  <input
                    type="checkbox"
                    name="Appointment"
                    checked={quotation.extraFeatures.includes("Appointment")}
                    onChange={onChange}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                </div>
                <div className="bg-white shadow-sm rounded-md px-6 flex justify-between items-center">
                  <label className="text-lg font-medium leading-6 text-gray-700 my-3">
                  Payment Gateway Integration
                  </label>
                  <input
                    type="checkbox"
                    name="Payment Gateway Integration"
                    checked={quotation.extraFeatures.includes("Payment Gateway Integration")}
                    onChange={onChange}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                </div>
              </div>
            </div>
            <div>
              <label className="block text-lg font-medium leading-6 text-gray-700 my-3">
                Do you need your website to be responsive?
              </label>
              <select
                value={quotation.responsive}
                onChange={onChange}
                id="responsive"
                name="responsive"
                className="h-full w-full border-0 border-transparent rounded-md shadow-sm bg-white py-3 px-2 text-gray-500 focus:outline-none focus:ring-0 focus:border-transparent sm:text-base"
              >
                <option value="Yes, the mobile version is just a variation of the desktop version.">
                  Yes, the mobile version is just a variation of the desktop
                  version.
                </option>
                <option value="Yes, the mobile version differs a lot from the desktop version.">
                  Yes, the mobile version differs a lot from the desktop
                  version.
                </option>
              </select>
            </div>
            <div>
              <label className="block text-lg font-medium leading-6 text-gray-700 my-3">
                What is your expected timeline for the website?
              </label>
              <select
                value={quotation.timeline}
                onChange={onChange}
                id="timeline"
                name="timeline"
                className="h-full w-full border-0 border-transparent rounded-md shadow-sm bg-white py-3 px-2 text-gray-500 focus:outline-none focus:ring-0 focus:border-transparent sm:text-base"
              >
                <option value="1 Week">1 Week</option>
                <option value="2 Week">2 Week</option>
                <option value="3 Week">3 Week</option>
                <option value="4 Week">4 Week</option>
              </select>
            </div>
            <div>
              <div>
                <label className="block text-lg font-medium leading-6 text-gray-700 my-3">
                  What is your name?
                </label>
                <input
                  value={quotation.name}
                  onChange={onChange}
                  id="name"
                  name="name"
                  className="h-full w-full border-0 border-transparent rounded-md shadow-sm bg-white py-3 px-2 text-gray-500 focus:outline-none focus:ring-0 focus:border-transparent sm:text-base"
                  type="text"
                />
              </div>
              <div>
                <label className="block text-lg font-medium leading-6 text-gray-700 my-3">
                  What is your email?
                </label>
                <input
                  value={quotation.email}
                  onChange={onChange}
                  id="email"
                  name="email"
                  className="h-full w-full border-0 border-transparent rounded-md shadow-sm bg-white py-3 px-2 text-gray-500 focus:outline-none focus:ring-0 focus:border-transparent sm:text-base"
                  type="text"
                />
              </div>
              <div>
                <label className="block text-lg font-medium leading-6 text-gray-700 my-3">
                  What is your contact number? (Optional)
                </label>
                <input
                  value={quotation.contact}
                  onChange={onChange}
                  id="contact"
                  name="contact"
                  className="h-full w-full border-0 border-transparent rounded-md shadow-sm bg-white py-3 px-2 text-gray-500 focus:outline-none focus:ring-0 focus:border-transparent sm:text-base"
                  type="text"
                />
              </div>
              <div className="text-end my-3">
                <button
                  onClick={sendMail}
                  className="py-2 px-4 bg-green-300 rounded-lg"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
        {loading && (
          <div className="fixed top-0 left-0 h-screen w-screen flex justify-center items-center bg-black bg-opacity-50">
            <div className="loader"></div>
          </div>
        )}
      </div>
      <Footer/>
    </>
  );
}
