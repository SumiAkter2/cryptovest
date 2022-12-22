import React from "react";

const TestimonialDetail = ({ t }) => {
  return (
    <div className="card lg:max-w-lg bg-base-200 shadow-xl ">
      <div className="flex justify-center items-center">
        <div className="avatar mt-4 ">
          <div className="w-20 rounded-full ring ring-neutral ring-offset-base-100 ring-offset-2">
            <img src={t.img} alt="man-img" />
          </div>
        </div>
        <div>
          <p className="text-xl ml-4"> {t.name}</p>
          <p className="text-xl ml-4"> {t.location}</p>
        </div>
      </div>
      <div className="card-body">
        <p>{t.comment}</p>
        <div className="card-actions justify-center">
          <div className="badge badge-sm"></div>
          <div className="badge badge-sm"></div>
          <div className="badge badge-sm"></div>
          {/* <div className="badge badge-xs"></div> */}
        </div>
      </div>
    </div>
  );
};

export default TestimonialDetail;