import React from "react";
import WorkCard from "./WorkCard";

export default function Work(props) {
  return (
    <div ref={props.refProp} className="py-16 md:pb-32 bg-[#46c6ed]">
      <div className="w-4/5 md:w-3/4 m-auto">
        <div className="text-white text-center space-y-4 mb-20">
          <p>How It Works</p>
          <h1 className="text-2xl md:text-5xl font-semibold ">
            Want To Learn Everything We Do?
          </h1>
        </div>
        <div data-aos="fade-up" className="grid md:grid-cols-3 gap-x-10 gap-y-10 mt-5">
          <WorkCard
            img="images/work/1.svg"
            title="Kick-Off Meeting"
            desc="We begin your project by discussing your website goals with your assigned designer."
          />
          <WorkCard
            img="images/work/2.svg"
            title="Site Map"
            desc="We define a clear structure for all pages, content, design, and SEO to ensure seamlessness."
          />
          <WorkCard
            img="images/work/3.svg"
            title="Wireframes"
            desc="We build a structural wireframe for your website based on your initial data input.
"
          />
          <WorkCard
            img="images/work/4.svg"
            title="Design"
            desc="Our designer works on a design based on your brand guidelines and presents it to you.
"
          />
          <WorkCard
            img="images/work/5.svg"
            title="Development"
            desc="Our developers develop a custom web theme and integrate your required features."
          />
          <WorkCard
            img="images/work/6.svg"
            title="Testing"
            desc="We optimize your website, run thorough tests, and debug to ensure smooth running."
          />
          <WorkCard
            img="images/work/7.svg"
            title="Implementation"
            desc="Our functional team aligns with you and assists in the upload of relevant product data.
"
          />
          <WorkCard
            img="images/work/8.svg"
            title="Training"
            desc="Once website is finished and delivered, our experts train you on how to update it in future. "
          />
          <WorkCard
            img="images/work/9.svg"
            title="Support"
            desc="Our support is always on standby both pre and post-going live with your website."
          />
        </div>
      </div>
    </div>
  );
}
