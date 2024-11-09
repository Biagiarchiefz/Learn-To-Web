import { delay } from "framer-motion";
import React from "react";
import { TbWorldWww } from "react-icons/tb";
import {motion} from 'framer-motion'

const servicesData = [
  {
    id: 1,
    title: "web development",
    link: "#",
    icons: <TbWorldWww />,
    delay: 0.2,
  },
  {
    id: 2,
    title: "web development",
    link: "#",
    icons: <TbWorldWww />,
    delay: 0.3,
  },
  {
    id: 3,
    title: "web development",
    link: "#",
    icons: <TbWorldWww />,
    delay: 0.4,
  },
  {
    id: 4,
    title: "web development",
    link: "#",
    icons: <TbWorldWww />,
    delay: 0.5,
  },
  {
    id: 5,
    title: "web development",
    link: "#",
    icons: <TbWorldWww />,
    delay: 0.6,
  },
  {
    id: 6,
    title: "web development",
    link: "#",
    icons: <TbWorldWww />,
    delay: 0.7,
  }
];

const Services = () => {
  return (
    <section className="bg-white">
      <div className="container pb-14 pt-16">
        <h1 className="font-bold text-4xl pb-10">Service we provide</h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
          {servicesData.map((item) => (
            <div className="bg-[#f4f4f4] rounded-2xl flex flex-col justify-center items-center gap-4 p-4 py-7 hover:bg-white hover:shadow-2xl hover:scale-110 duration-300">

              <div className="text-4xl mb-4">{item.icons}</div>

              
              <h1 className="text-lg text-center font-semibold px-3 w-[170px]">
                {item.title}
              </h1>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Services;
