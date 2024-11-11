import React from "react";
import ban2 from "../../assets/ban2.png";
import hero2 from "../../assets/hero2.png";
import { FaBookOpenReader } from "react-icons/fa6";
import { FaBuildingCircleArrowRight } from "react-icons/fa6";
import { PiReadCvLogoFill } from "react-icons/pi";
import { FaComputer } from "react-icons/fa6";
import { motion } from "framer-motion";
import { Fadeup } from "../Hero/Hero";


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

const Bannerbot = () => {
  return (
    <section className="bg-white">
      <div className="container grid grid-cols-2 py-14">

        <motion.div
        initial = {{ opacity: 0, x : -50 }}
        whileInView={{ opacity:1, x: 0 }}

         className="flex flex-col justify-center items-center">
          <div className="text-center md:text-left space-y-4">

          <h1 className="font-bold text-3xl max-w-[500px]">Join Our Community to Start your Journey</h1>
          <p className="max-w-[500px]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum, debitis architecto? Accusantium assumenda minima soluta sed, illum vero error, consectetur consequuntur dolorum officia ab quas!</p>
          <div className="">
            <button className="bg-primary px-7 font-semibold py-2 rounded-md text-white">Join Now</button>
          </div>

          </div>

        </motion.div>

        <div className="flex items-center justify-center">
          <motion.img
          initial = {{ opacity: 0, x : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
         
            src={hero2}
            alt=""
            className="w-[350px] md:max-w-[400px] drop-shadow object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default Bannerbot;
