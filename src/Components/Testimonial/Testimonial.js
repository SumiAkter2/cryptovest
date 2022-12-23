import React from "react";
import TestimonialDetail from "./TestimonialDetail";
import img1 from "../../img/businessman1.jpg";
import img2 from "../../img/businessman2.jpg";
import img3 from "../../img/businessman3.jpg";
import img4 from "../../img/businessman4.jpg";
import { FaQuoteRight } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa";
const Testimonial = () => {
  const testimonial = [
    {
      id: 1,
      name: "Mr. Junilior",
      comment:
        "Lorem ipsum dolor sit amet cing, consectetur adipisi. Vel consectetur.",
      location: "Qatar",
      star: "5 star",
      img: img1,
    },
    {
      id: 3,
      name: "Catrina Lucas",
      comment:
        "Lorem ipsum dolor sit amet cing, consectetur adipisi. Vel consectetur.",
      location: "USA",
      img: img3,
      star: "5 star",
    },
    {
      id: 2,
      name: "Mr. Jack",
      comment:
        "Lorem ipsum dolor sit amet cing, consectetur adipisi. Vel consectetur.",
      location: "California",
      star: "5 star",
      img: img2,
    },

    {
      id: 4,
      name: "Janifar kai",
      comment:
        "Lorem ipsum dolor sit amet cing, consectetur adipisi. Vel consectetur.",
      location: "New york",
      star: "5 star",
      img: img4,
    },
  ];
  return (
    <div>
      <div className="flex justify-center items-start mt-12 mb-16">
        <h1>
          <FaQuoteLeft color="skyBlue" />
        </h1>
        <h1 className="text-center text-4xl text-info mx-4">Our Client Say</h1>
        <h1>
          <FaQuoteRight color="skyBlue" />
        </h1>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 px-12 mt-6">
        {testimonial.map((t) => (
          <TestimonialDetail key={t.id} t={t} />
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
