import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { BiCartAlt } from "react-icons/bi";
import { TiContacts } from "react-icons/ti";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import auth from "../../Firebase/firebase.init";
import { CgProfile } from "react-icons/cg";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { BsCoin } from "react-icons/bs";
import { BiLogInCircle } from "react-icons/bi";
import { MdOutlineSettings } from "react-icons/md";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { AiOutlineHome } from "react-icons/ai";
import { RxDashboard } from "react-icons/rx";
import swal from "sweetalert";
import userImage from "../../img/user.jpg";
import "../Home/toggle.css";

const Navbar = ({ children, cart }) => {
  const [user] = useAuthState(auth);
  const [dark, setDark] = useState(false);
  const [signOut] = useSignOut(auth);
  const navigate = useNavigate();
  let quantity = 0;
  cart.forEach((coin) => {
    quantity = quantity + coin.quantity;
  });

  return (
    <div data-theme={dark ? "dark" : "light"} className=" ">
      <div className="drawer drawer-end fixed top-0 ">
        <input id="  my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          <div className="w-full navbar bg-primary  lg:px-12   ">
            <div className="flex-1 px-2 lg:mx-2 font-bold text-2xl">
              <img
                style={{ width: "70px" }}
                src="https://i.ibb.co/XCqJxdh/realistic-bitcoin-crypto-currency-illustration-on-blue-background-vector-removebg-preview.png"
                alt="bitcoin-logo"
              />
              <h2>CryptoVest</h2>
              <div className=" lg:ml-12 ml-2">
                <label className="switch">
                  <input type="checkbox" onClick={() => setDark(!dark)} />
                  <span className="sliders"></span>
                </label>
              </div>
            </div>

            <div className="flex-none lg:hidden">
              <label for="  my-drawer-3" className="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>

            <div className="flex-none hidden lg:block  ">
              <ul className="menu  menu-horizontal gap-x-2  ">
                <li>
                  <NavLink className="rounded-md h-12 my-auto" to="/">
                    <AiOutlineHome /> Home
                  </NavLink>
                </li>
                <li>
                  <NavLink className="rounded-md h-12 my-auto" to="/coin">
                    <BsCoin /> Coins
                  </NavLink>
                </li>

                <li>
                  <NavLink className="rounded-md h-12 my-auto" to="/about">
                    <IoMdInformationCircleOutline /> About
                  </NavLink>
                </li>

                <li>
                  <NavLink className="rounded-md h-12 my-auto" to="/contact">
                    <TiContacts /> Contact
                  </NavLink>
                </li>
                {user && (
                  <li>
                    <NavLink
                      className="rounded-lg h-12 my-auto"
                      to="/dashboard"
                    >
                      <RxDashboard /> Dashboard
                    </NavLink>
                  </li>
                )}
                {/* =======================cart============= */}
                <li>
                  <NavLink className="rounded-lg h-12 my-auto">
                    <div className="dropdown dropdown-end ">
                      <label tabIndex={0} className=" cursor-pointer indicator">
                        <span className="badge badge-sm indicator-item bg-primary text-gray-400">
                          {quantity}
                        </span>
                        <HiOutlineShoppingCart
                          size="25px"
                          className=" hover:fill-gray-700 "
                        />
                      </label>
                      <ul
                        tabIndex={0}
                        className="dropdown-content menu  shadow bg-base-100 rounded-box w-32 text-center"
                      >
                        <div className="mx-auto">
                          <li>
                            <p>
                              <HiOutlineShoppingBag /> Item {quantity}
                            </p>
                          </li>
                          <li>
                            <Link to="/carts">
                              <BiCartAlt /> View Cart
                            </Link>
                          </li>
                        </div>
                      </ul>
                    </div>
                  </NavLink>
                </li>
                {user ? (
                  <>
                    <li>
                      <NavLink className="rounded-lg h-12 my-auto">
                        <div className="dropdown dropdown-end">
                          <label
                            tabIndex={0}
                            className="avatar cursor-pointer btn btn-ghost"
                          >
                            <div className="w-10 rounded-full   cursor-pointer">
                              {user ? (
                                <>
                                  <img src={user.photoURL} alt="profile-img" />
                                </>
                              ) : (
                                <img src={userImage} alt="profile-img" />
                              )}
                              <span className="badge badge-xs bg-green-600 indicator-item"></span>
                            </div>
                          </label>
                          <ul
                            tabIndex={0}
                            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-48 mx-auto"
                          >
                            <div className="mx-auto">
                              <li>
                                <Link className="text-center" to="/profile">
                                  <CgProfile /> Profile
                                </Link>
                              </li>
                              <li>
                                <Link to="/setting">
                                  <MdOutlineSettings /> Settings
                                </Link>
                              </li>
                              <li>
                                <button
                                  className=" rounded-lg  my-2  "
                                  onClick={async () => {
                                    const success = await signOut();
                                    if (success) {
                                      swal({
                                        icon: "success",
                                        text: "You are Sign Out Now",
                                      });
                                    }
                                    navigate("/");
                                  }}
                                >
                                  <RiLogoutCircleRLine /> Sign Out
                                </button>
                              </li>
                            </div>
                          </ul>
                        </div>
                      </NavLink>
                    </li>
                  </>
                ) : (
                  <li>
                    <NavLink to="/login">
                      <BiLogInCircle /> Log In
                    </NavLink>
                  </li>
                )}
              </ul>
            </div>
          </div>

          {children}
        </div>
        <div className="drawer-side   ">
          <label for="  my-drawer-3" className="drawer-overlay"></label>
          <ul className="menu p-2 overflow-y-auto w-80 bg-base-100">
            <li>
              <NavLink className="rounded-md h-12 my-auto" to="/">
                <AiOutlineHome /> Home
              </NavLink>
            </li>
            <li>
              <NavLink className="rounded-md h-12 my-auto" to="/coin">
                <BsCoin /> Coins
              </NavLink>
            </li>

            <li>
              <NavLink className="rounded-md h-12 my-auto" to="/about">
                <IoMdInformationCircleOutline /> About
              </NavLink>
            </li>

            <li>
              <NavLink className="rounded-md h-12 my-auto" to="/contact">
                <TiContacts /> Contact
              </NavLink>
            </li>
            <li>
              <NavLink className="rounded-lg h-12 my-auto">
                <div className="dropdown dropdown-bottom ">
                  <label tabIndex={0} className=" cursor-pointer indicator">
                    <span className="badge badge-sm indicator-item bg-primary text-gray-400">
                      {quantity}
                    </span>
                    <HiOutlineShoppingCart
                      size="25px"
                      className=" hover:fill-gray-700 "
                    />
                  </label>
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu  shadow bg-base-100 rounded-box w-32 text-center"
                  >
                    <div className="mx-auto">
                      <li>
                        <p>
                          <HiOutlineShoppingBag /> Item {quantity}
                        </p>
                      </li>
                      <li>
                        <Link to="/carts">
                          <BiCartAlt /> View Cart
                        </Link>
                      </li>
                    </div>
                  </ul>
                </div>
              </NavLink>
            </li>
            {user ? (
              <>
                <li>
                  <NavLink className="rounded-lg h-12 my-auto">
                    <div className="dropdown dropdown-bottom">
                      <label
                        tabIndex={0}
                        className="avatar cursor-pointer btn btn-ghost"
                      >
                        <div className="w-10 rounded-full   cursor-pointer">
                          {user ? (
                            <>
                              <img src={user.photoURL} alt="profile-img" />
                            </>
                          ) : (
                            <img src={userImage} alt="profile-img" />
                          )}
                          <span className="badge badge-xs bg-green-600 indicator-item"></span>
                        </div>
                      </label>
                      <ul
                        tabIndex={0}
                        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-48 mx-auto"
                      >
                        <div className="mx-auto">
                          <li>
                            <Link className="text-center" to="/profile">
                              <CgProfile /> Profile
                            </Link>
                          </li>
                          <li>
                            <Link to="/setting">
                              <MdOutlineSettings /> Settings
                            </Link>
                          </li>
                          <li>
                            <button
                              className=" rounded-lg  my-2  "
                              onClick={async () => {
                                const success = await signOut();
                                if (success) {
                                  swal({
                                    icon: "success",
                                    text: "You are Sign Out Now",
                                  });
                                }
                                navigate("/");
                              }}
                            >
                              <RiLogoutCircleRLine /> Sign Out
                            </button>
                          </li>
                        </div>
                      </ul>
                    </div>
                  </NavLink>
                </li>
              </>
            ) : (
              <li>
                <NavLink to="/login">
                  <BiLogInCircle /> Log In
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
