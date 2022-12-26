import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Teams.css";
import { FaFacebook } from "react-icons/fa";
import { ImLinkedin2 } from "react-icons/im";
import { FaTwitter } from "react-icons/fa";
import { RiSkypeFill } from "react-icons/ri";

const Teams = () => {
  //   useEffect(() => {
  //     AOS.init();
  //   }, []);
  return (
    <div className="p-5 bg-primary ">
      <h1 className="text-center pb-6 my-12 text-4xl text-neutral">
        Our Executive Members
      </h1>
      <div className="gap-12 mx-auto  my-8 lg:flex  justify-center items-center ">
        <div className="">
          <div className="cards mx-auto rounded-lg">
            <img
              src="https://i.ibb.co/rHHJGXH/women2.jpg"
              className="cards-img-top rounded-tr-2xl rounded-bl-2xl"
              alt="man-img"
            />
            <div className="cards-footer mt-2 "></div>
            <div className="cards-body bg-color ">
              <h5 className="cards-title font-bold">Mr. Omar Prokash</h5>
              <p className="cards-text">CEO</p>
              <p className="flex gap-6 mt-6 items-center justify-start">
                <FaFacebook
                  size="25px"
                  className="hover:text-white cursor-pointer "
                />
                <ImLinkedin2
                  size="25px"
                  className="hover:text-white cursor-pointer "
                />
                <FaTwitter
                  size="25px"
                  className="hover:text-white cursor-pointer "
                />
                <RiSkypeFill
                  size="25px"
                  className="hover:text-white cursor-pointer "
                />
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="cards mx-auto">
            <img
              src="https://i.ibb.co/KhtfYz6/women1.jpg"
              className="cards-img-top rounded-tr-2xl rounded-bl-2xl"
              alt="man-img"
            />
            <div className="cards-footer mt-2"></div>
            <div className="cards-body bg-color">
              <h5 className="cards-title font-bold">Maria Kour</h5>
              <p className="cards-text">Director</p>
              <p className="flex gap-6 mt-6 items-center justify-start">
                <FaFacebook
                  size="20px"
                  className="hover:text-white cursor-pointer "
                />
                <ImLinkedin2
                  size="25px"
                  className="hover:text-white cursor-pointer "
                />
                <FaTwitter
                  size="25px"
                  className="hover:text-white cursor-pointer "
                />
                <RiSkypeFill
                  size="25px"
                  className="hover:text-white cursor-pointer "
                />
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="cards mx-auto">
            <img
              src="https://i.ibb.co/LY9tW3s/man1.jpg"
              className="cards-img-top rounded-tr-2xl rounded-bl-2xl"
              alt="man-img"
            />
            <div className="cards-footer mt-2"></div>
            <div className="cards-body bg-color ">
              <h5 className="cards-title font-bold">Jack Son</h5>
              <p className="cards-text">Work Shop Manager</p>
              <p className="flex gap-6 mt-6 items-center justify-start">
                <FaFacebook
                  size="20px"
                  className="hover:text-white cursor-pointer "
                />
                <ImLinkedin2
                  size="25px"
                  className="hover:text-white cursor-pointer "
                />
                <FaTwitter
                  size="25px"
                  className="hover:text-white cursor-pointer "
                />
                <RiSkypeFill
                  size="25px"
                  className="hover:text-white cursor-pointer "
                />
              </p>
            </div>
          </div>
        </div>
        <div className=" ">
          <div className="cards mx-auto">
            <img
              src="https://i.ibb.co/3RKWRYz/women3.jpg"
              className="cards-img-top rounded-tr-2xl rounded-bl-2xl"
              alt="man-img"
            />
            <div className="cards-footer mt-2"></div>
            <div className="cards-body bg-color">
              <h5 className="cards-title font-bold">Armerina Nisha</h5>
              <p className="cards-text">Work Shop Manager</p>
              <p className="flex gap-6 mt-6 items-center justify-start">
                <FaFacebook
                  size="20px"
                  className="hover:text-white cursor-pointer "
                />
                <ImLinkedin2
                  size="25px"
                  className="hover:text-white cursor-pointer "
                />
                <FaTwitter
                  size="25px"
                  className="hover:text-white cursor-pointer "
                />
                <RiSkypeFill
                  size="25px"
                  className="hover:text-white cursor-pointer "
                />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teams;
