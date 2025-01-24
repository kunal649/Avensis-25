import React from "react";
import SpeakerCard from "./SpeakerCard";
import SponsorCard from "./SponsorCard";
import image from "../../../Images/speech.png";
import Sphere1 from "../../../Images/Sphere-Black-Matte1(1).png";
import shape3 from "../../../Images/shape3.png";
import Flapone from "../../../Images/Sponsors/Flapone.jpeg";
import easemytrip from "../../../Images/Sponsors/easemytrip.png";
import Maac from "../../../Images/Sponsors/Maac.jpeg";
import Siec from "../../../Images/Sponsors/Siec.jpeg";

import { Events } from "../../../config/events.js";

const index = () => {
  const speakers = [
    {
      name: "COMING SOON",
      designation: "",
      desc: "",
      image: image,
    },
    {
      name: "COMING SOON",
      designation: "",
      desc: "",
      image: image,
    },
    {
      name: "COMING SOON",
      designation: "",
      desc: "",
      image: image,
    },
  ];

  const sponsors = [
    {
      name: "Ease My Trip",
      image: easemytrip,
    },
    {
      name: "Siec Education ",
      image: Siec,
    },
    {
      name: "Flapone Aviation",
      image: Flapone,
    },
    {
      name: "MAAC",
      image: Maac,
    },
  ];

  return (
    <div className="w-full">
      <img src={Sphere1} class="funsphere" />
      {/* <img src={DecorativeLine} class="funline mt-[350px] z-[1]"/> */}
      <img src={shape3} class="funshape"></img>
      <div className="md:mx-[10%]">
        <div className="w-full mb-24">
          <div className="flex flex-wrap justify-around">
            {sponsors.map((sponsor) => (
              <SponsorCard name={sponsor.name} image={sponsor.image} />
            ))}
          </div>
        </div>
        <div className="w-full text-center text-4xl md:text-5xl font-[ultra] tracking-widest">
          <h1 className="text-white mt-2">WANT TO BE A</h1>
          <h1 className="text-[#EBB22D]  mt-2 md:mt-4">SPONSOR?</h1>
          <div className="flex justify-between w-[70%] md:w-[33%] mt-8 mx-auto">
            <a href="#">
              <button className="w-[120px] md:w-[170px] font-[roboto] text-white text-lg md:text-xl py-[12px] rounded-full  bg-gradient-to-r from-[#771EBD] to-[#BF17C3]">
                REGISTER
              </button>
            </a>
            <a href="#footer" className="ml-3">
              <button className="w-[120px] md:w-[170px] font-[roboto] text-white text-lg md:text-xl py-[10px] rounded-full border-[2px] border-white">
                CONTACT
              </button>
            </a>
          </div>
        </div>
        <div className="w-full mt-12">
          <p className="text-white font-[ultra] text-4xl tracking-widest ml-4">
            {" "}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto z-[99]">
            {speakers.map((speaker) => (
              <SpeakerCard
                name={speaker.name}
                designation={speaker.designation}
                desc={speaker.desc}
                image={speaker.image}
              />
            ))}
          </div>
        </div>
        <div>
          <p className="text-white font-[ultra] text-3xl md:text-4xl tracking-widest my-12 ml-4">
            DEPARTMENTS
          </p>
          <div className="mx-auto">
            <div className="md:ml-[10%] md:mt-12">
              <div className="md:flex">
                <div className="bg-[#1D1332] flex rounded-lg p-2 md:p-4 w-[360px] md:w-[400px] h-[140px] md:h-[180px] mx-[5%]">
                  <img
                    className="object-cover w-2/3 h-full"
                    src={Events[14].tabs[0].image}
                    alt=""
                  />
                  <div className="text-white pl-3 font-[roboto] flex flex-col justify-center w-1/3">
                  <a href="/events">
                    <h1 className="text-xl md:text-2xl font-bold">Robotics</h1>
                    </a>
                  </div>
                </div>
                <div className="bg-[#1D1332] mt-6 md:mt-0 flex rounded-lg p-2 md:p-4 w-[360px] md:w-[400px] h-[140px] md:h-[180px] mx-[5%]">
                  <img
                    className="object-cover w-2/3 h-full"
                    src={Events[14].tabs[1].image}
                    alt=""
                  />
                  <div className="text-white pl-3 font-[roboto] flex flex-col justify-center w-1/3">
                  <a href="/events">
                    <h1 className="text-2xl font-bold">Technical</h1>
                  </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:ml-[25%] mt-6 md:mt-12">
              <div className="md:flex">
                <div className="bg-[#1D1332] flex rounded-lg p-2 md:p-4 w-[380px] md:w-[420px] h-[160px] md:h-[200px] mx-[5%]">
                  <img
                    src={Events[14].tabs[3].image}
                    className="object-cover w-[60%] h-full"
                    alt=""
                  />
                  <div className="text-white pl-3 font-[roboto] flex flex-col justify-center w-[40%]">
                    <a href="/events">
                    <h1 className="text-2xl md:text-3xl font-bold">
                      Fun & Creativity
                    </h1>
                    </a>
                  </div>
                </div>
                <div className="mt-6 md:mt-0 bg-[#1D1332] flex rounded-lg p-2 md:p-4 w-[380px] md:w-[420px] h-[160px] md:h-[200px] mx-[5%]">
                  <img
                    className="object-cover w-2/3 h-full"
                    src={Events[14].tabs[2].image}
                    alt=""
                  />
                  <div className="text-white pl-3 font-[roboto] flex flex-col justify-center w-1/3">
                  <a href="/events">
                    <h1 className="text-2xl font-bold leading-tight">Gaming</h1>
                  </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
