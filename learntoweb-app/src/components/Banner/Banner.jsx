import React from "react";
import hero2 from "../../assets/hero2.png";
import { FaBookOpenReader } from "react-icons/fa6";
import { FaBuildingCircleArrowRight } from "react-icons/fa6";
import { PiReadCvLogoFill } from "react-icons/pi";
import { FaComputer } from "react-icons/fa6";
import { motion } from "framer-motion";
import { Fadeup } from "../Hero/Hero";
import ban2 from "../../assets/ban2.png";


const bannerData = [
  {
    id: 1,
    title: "10.000+ online course",
    icons: <FaBookOpenReader />,
  },
  {
    id: 2,
    title: "Bootcamp & Program",
    icons: <FaComputer />,
  },
  {
    id: 3,
    title: "Corporate Service",
    icons: <FaBuildingCircleArrowRight />,
  },
  {
    id: 4,
    title: "Review CV",
    icons: <PiReadCvLogoFill />,
  },
];

export const sliderBanner = (delay) => {
  return {
    initial : {
      opacity : 0,
      x : -50,
    },
    animate: {
      opacity : 1,
      x : 0,
      transition : {
        duration : 0.5,
        delay : delay,
        ease : "easeInOut",

    }
  }
}
}

const Banner = () => {
  return (
    <section className="bg-white">
      <div className="container grid grid-cols-2 py-14">
        <div className="flex items-center justify-center">
          <motion.img
          initial = {{ opacity: 0, x : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true}}
          transition={{ duration: 0.8, ease: "easeInOut" }}
            src={ban2}
            alt=""
            className="w-[350px] md:max-w-[400px] drop-shadow object-cover"/>
        </div>

        <div className="flex flex-col justify-center">
          <motion.h1 
          initial = {{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true}}
          transition={{ duration: 0.5}}
          className="text-center md:text-left text-3xl md:text-4xl font-bold  !leading-snug">
            Learn to web offers many advantages as follows
          </motion.h1>

          <div className="mt-9">
            {bannerData.map((item) => (
              <motion.div
                variants={sliderBanner(item.delay)}
                initial="initial"
                whileInView={"animate"}
                viewport={{ once: true }}
                className="text-center w-full h-[60px] p-4 flex items-center gap-3 rounded-lg bg-[#f4f4f4] hover:bg-white hover:scale-110 duration-300 hover:shadow-2xl mb-5"
                id={item.id}
              >
                <div className="text-2xl">{item.icons}</div>

                <p className="text-sm">{item.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
