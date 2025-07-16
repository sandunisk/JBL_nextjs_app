import { FaBatteryFull, FaVolumeUp } from "react-icons/fa";
import { MdDevices, MdAssistant, MdSpeaker } from 'react-icons/md';

export default function About() {
return (
    <div className="grid grid-cols-1 lg:grid-cols-2 pt-20 px-6 lg:px-12 py-12 bg-gray-100 gap-10">
    <div className="flex flex-col justify-center">
      <h1 className="text-3xl leading-10 lg:text-6xl lg:leading-[4rem] mb-4 font-semibold">
        Crank Up the Volume,<br />Without the Noise
      </h1>
      <p className="text-gray-500 font-medium tracking-wide mb-9 text-sm max-w-sm lg:max-w-full">
        Great music deserves speakers that don't hold back.
        <br /> Discover sound that moves you.
      </p>

      <div className="space-y-4">
        <button className="text-gray-500 flex items-center">
          <FaBatteryFull className="h-6 w-6 mr-2" /> Long Battery Life
        </button>
        <button className="text-gray-500 flex items-center">
          <FaVolumeUp className="h-5 w-6 mr-2" /> Signature JBL Sound Quality
        </button>
        <button className="text-gray-500 flex items-center">
          <MdSpeaker className="h-6 w-6 mr-2" /> Durable & Rugged Build
        </button>
        <button className="text-gray-500 flex items-center">
          <MdDevices className="h-6 w-6 mr-2" /> Portable & Lightweight Design
        </button>
        <button className="text-gray-500 flex items-center">
          <MdAssistant className="h-6 w-6 mr-2" /> Built-in Voice Assistant Support
        </button>
      </div>

      <button className="bg-black text-white font-medium px-4 py-2 rounded-lg mt-10 w-fit">
        Hear the Difference
      </button>
    </div>

    <div className="flex justify-center items-center">
      <img
        src="about_img.png"
        alt="JBL Product"
        className="rounded-2xl w-full h-auto object-cover cursor-pointer"
      />
    </div>
  </div>
);
}
