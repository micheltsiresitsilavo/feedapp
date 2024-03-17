import React from "react";

const About = () => {
  return (
    <section className="bg-gray-900 text-white h-screen">
      <div className="mx-auto max-w-screen-xl px-4  lg:flex lg:h-screen lg:items-center ">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
            Feedæp <br />
            <span className="sm:block text-lg"> by Michel Tsilavo. </span>
          </h1>

          <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed ">
            Ity dia web app simple natao hizarana ireo asa vitanao mba azahoana
            critique, na toraka voninkazo io na tsongotsongo mankarary. Ny
            tanjona dia ny mba hahaizanao ny mety sy ny tsy mety tokony harenina
            amin'izay asa vitanao amin'ny alalan'ireo feedback avy amin'ireo
            namana rehetra.
          </p>
          <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed italic">
            "Lunch your app, get a feedback from community, and scale."
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
