import "./Loading.css";
import img from "../../img/c7e1b7b5753737039e1bdbda578132b8.gif";
const Loading = () => {
  return (
    <div className="w-full h-full  flex justify-center items-center">
      {/* <svg viewBox="0 0 50 50 " className="loading">
        <circle class="ring" cx="25" cy="25" r="20"></circle>
        <circle class="ball" cx="25" cy="5" r="5.5"></circle>
      </svg> */}
      <img src={img} alt="" />
    </div>
  );
};

export default Loading;
