import React from "react";

export default function ServerError() {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-white">
      <div>
        <img
          src="/images/server-error.webp"
          alt="No Internet"
          className="lg:w-[600px] w-96"
        />
      </div>
      <p className="font-medium text-xl text-center">
        There is something wrong with the server. Kindly wait!
      </p>
    </section>
  );
}
