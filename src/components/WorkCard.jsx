import React from "react";

export default function WorkCard(props) {
  return (
    <div className="text-white">
      <div className="bg-black bg-opacity-50 inline-block p-3 rounded-lg mb-5">
        <img className="" src={props.img} alt={props.title} />
      </div>
      <h1 className="text-3xl font-bold">{props.title}</h1>
      <p className="text-base">{props.desc}</p>
    </div>
  );
}
