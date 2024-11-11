import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import {motion} from "framer-motion"

const Footer = () => {
  return (
    <footer className="py-28 bg-[#f4f4f4]">
      <motion.div
      initial ={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 md gap-4">
          <div className="space-y-4 max-w-[300px]">
            <h1 className="text-2xl font-bold">Learn To Web</h1>
            <p className="text-dark2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae obcaecati repudiandae tenetur laboriosam aliquam ea,
              corporis ullam doloremque vero dolore est exercitationem assumenda
              repellendus natus, sed consectetur possimus sit distinctio eos
              neque harum dolorem esse. Id illo maxime fugiat aut?
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10">
            <div className="space-y-4">
              <h1 className="text-2xl font-bold">Courses</h1>
              <div className="text-dark2">
                <ul className="space-y-2 text-lg">
                  <li className="cursor-pointer hover:text-secondary duration-200">
                    Web Development
                  </li>
                  <li className="cursor-pointer hover:text-secondary duration-200">
                    Mobile App
                  </li>
                  <li className="cursor-pointer hover:text-secondary duration-200">
                    UI/UX Desain
                  </li>
                  <li className="cursor-pointer hover:text-secondary duration-200">
                    Software Development
                  </li>
                  <li className="cursor-pointer hover:text-secondary duration-200">
                    E-Learning
                  </li>
                  <li className="cursor-pointer hover:text-secondary duration-200">
                    Graphic Desain
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <h1 className="text-2xl font-bold">Links</h1>
              <div className="text-dark2">
                <ul className="space-y-2 text-lg">
                  <li className="cursor-pointer hover:text-secondary duration-200">
                    Home
                  </li>
                  <li className="cursor-pointer hover:text-secondary duration-200">
                    services
                  </li>
                  <li className="cursor-pointer hover:text-secondary duration-200">
                    About
                  </li>
                  <li className="cursor-pointer hover:text-secondary duration-200"></li>
                  <li className="cursor-pointer hover:text-secondary duration-200">
                    Contact
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-4 max-w-[300px]">
            <h1 className="text-2xl font-bold">Get In Touch</h1>
            <div className="flex">
              <input
                type="text"
                placeholder="Enter your email"
                className="p-3 rounded-s-xl bg-white text-white w-full py-4 focus:ring-1 focus:outline-none placeholder:text-dark2"
              />
              <button className="bg-primary font-semibold p-4 px-6 rounded-e-xl">
                GO
              </button>
            </div>

            <div className="flex gap-3 py-3">
              <a href="#">
                <FaLinkedin className="text-2xl cursor-pointer hover:text-primary hover:scale-105 duration-200" />
              </a>
              <a href="#">
                <FaInstagram className="text-2xl cursor-pointer hover:text-primary hover:scale-105 duration-200" />
              </a>
              <a href="#">
                <FaGithub className="text-2xl cursor-pointer hover:text-primary hover:scale-105 duration-200" />
              </a>
              <a href="#">
                <FaFacebookSquare className="text-2xl cursor-pointer hover:text-primary hover:scale-105 duration-200" />
              </a>
            </div>

          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
