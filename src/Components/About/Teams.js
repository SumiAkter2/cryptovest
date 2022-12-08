import React from "react";
import "./Teams.css";
import { FaFacebook } from "react-icons/fa";
import { ImLinkedin2 } from "react-icons/im";
import { FaTwitter } from "react-icons/fa";
import { RiSkypeFill } from "react-icons/ri";
const Teams = () => {
  return (
    <div className="p-5 bg-primary">
      <h1 className="text-center font-bold my-12 text-3xl ">
        Our Team Members
      </h1>
      <div className="gap-6  mx-auto my-5 lg:flex px-12 justify-center items-center">
        <div data-aos="fade-right">
          <div className="card rounded-lg">
            <img
              src="https://i.ibb.co/rHHJGXH/women2.jpg"
              className="card-img-top"
              alt="man-img"
            />
            <div className="card-footer"></div>
            <div className="card-body bg-color">
              <h5 className="card-title font-bold">Mr. Omar Prokash</h5>
              <p className="card-text">CEO</p>
              <p className="flex gap-6  items-center justify-start">
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
        <div data-aos="fade-down ">
          <div className="card ">
            <img
              src="https://i.ibb.co/KhtfYz6/women1.jpg"
              className="card-img-top"
              alt="man-img"
            />
            <div className="card-footer"></div>
            <div className="card-body bg-color">
              <h5 className="card-title font-bold">Maria Kour</h5>
              <p className="card-text">Director</p>
              <p className="flex gap-6  items-center justify-start">
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
        <div data-aos="fade-up">
          <div className="card rounded-lg">
            <img
              src="https://i.ibb.co/LY9tW3s/man1.jpg"
              className="card-img-top"
              alt="man-img"
            />
            <div className="card-footer"></div>
            <div className="card-body bg-color">
              <h5 className="card-title font-bold">Jack Son</h5>
              <p className="card-text">Work Shop Manager</p>
              <p className="flex gap-6  items-center justify-start">
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
        <div className="col " data-aos="fade-left">
          <div className="card rounded-lg">
            <img
              src="https://i.ibb.co/3RKWRYz/women3.jpg"
              className="card-img-top"
              alt="man-img"
            />
            <div className="card-footer"></div>

            <div className="card-body bg-color">
              <h5 className="card-title font-bold">Armerina Nisha</h5>
              <p className="card-text">Work Shop Manager</p>
              <p className="flex gap-6  items-center justify-start">
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
