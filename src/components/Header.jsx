import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdShoppingBasket, MdAdd, MdLogout } from "react-icons/md";
import { motion } from "framer-motion";

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase.config";

import Logo from "../img/logo.jpg";
import Avatar from "../img/avatar.jpg";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";
const Header = () => {
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const [{ user,cartShow,cartItems }, dispatch] = useStateValue();
  const [isMenu, setIsMenu] = useState(false);

  const login = async () => {
    if (!user) {
      const {
        user: { refreshToken, providerData },
      } = await signInWithPopup(firebaseAuth, provider);
      dispatch({
        type: actionType.SET_USER,
        user: providerData[0],
      });
      localStorage.setItem("user", JSON.stringify(providerData[0]));
    } else {
      setIsMenu(!isMenu);
    }
  };
  const logout = () => {
    setIsMenu(false);
    localStorage.clear();
    dispatch({
      type: actionType.SET_USER,
      user: null,
    });
  };
  const showCart = ()=>{
    dispatch({
      type: actionType.SET_CART_SHOW,
      cartShow: !cartShow,
    });
  }
  return (
    <header className="fixed z-50 w-screen p-3 px-4 bg-white md:p-6 md:px-16">
      {/* destop & tablate */}
      <div className="hidden md:flex w-full h-full items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src={Logo} alt="logo" className="w-20 object-cover" />
          <p className="text-headingColor text-xl font-bold">Master Chef</p>
        </Link>
        <div className="flex items-center gap-8">
          <motion.ul
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            className="flex items-center gap-8 "
          >
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              <a href="#home">
              Home
              </a>
            </li>
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
            <a href="#menu">
              Menu
              </a>
            </li>
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
             <a href="#about">
              About Us
              </a>
            </li>
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              <a href="#service">
              Service
              </a>
            </li>
          </motion.ul>

          <div className="relative flex items-center justify-center" onClick={showCart}>
          <MdShoppingBasket className="text-textColor text-2xl  cursor-pointer" />
              {cartItems && cartItems.length>0 && (
                <div className="absolute top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg">
            <p className="text-xs text-white font-semibold text-center">{cartItems.length}</p>
          </div>
              )}
        </div>

          <div className="relative">
            <motion.img
              whileTap={{ scale: 0.6 }}
              src={user ? user.photoURL : Avatar}
              alt="avatar"
              className="w-10 min-w-40 min-h-40 cursor-pointer rounded-full"
              onClick={login}
            />
            {isMenu && (
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                className="w-40 bg-primary shadow-xl rounded-lg flex flex-col absolute top-12 right-0 px-4 py-2"
              >
                {user && user.email === "sachincse06@gmail.com" && (
                  <Link to={"/createItem"}>
                    <p className="px-4 py-2 flex item-center gap-3 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor text-base"
                    onClick={()=>setIsMenu(false)}
                    >
                      New Item <MdAdd />
                    </p>
                  </Link>
                )}
                <p
                  className="px-4 py-2 flex item-center gap-3 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor text-base"
                  onClick={logout}
                >
                  Logout <MdLogout />
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* mobile */}
      <div className="flex item-center justify-between md:hidden w-full h-full " >
        <div className="relative flex items-center justify-center" onClick={showCart}>
          <MdShoppingBasket className="text-textColor text-2xl  cursor-pointer" />
              {cartItems && cartItems.length>0 && (
                <div className="absolute top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg">
            <p className="text-xs text-white font-semibold text-center">{cartItems.length}</p>
          </div>
              )}
        </div>

        <Link to="/" className="flex items-center gap-2">
          <img src={Logo} alt="logo" className="w-20 object-cover" />
          <p className="text-headingColor text-xl font-bold">Master Chef</p>
        </Link>
        <div className="relative">
          <motion.img
            whileTap={{ scale: 0.6 }}
            src={user ? user.photoURL : Avatar}
            alt="avatar"
            className="w-10 min-w-40 min-h-40 cursor-pointer rounded-full my-6"
            onClick={login}
          />
          {isMenu && (
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              className="w-40 bg-primary shadow-xl rounded-lg flex flex-col absolute top-12 right-0 px-4 py-2"
            >
              {user && user.email === "sachincse06@gmail.com" && (
                <Link to={"/createItem"}>
                  <p className="px-4 py-2 flex item-center  cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor text-base">
                    New Item <MdAdd />
                  </p>
                </Link>
              )}
              <ul className="flex flex-col">
                <li
                  className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-200 px-4 py-2"
                  onClick={() => setIsMenu(false)}
                >
                <a href="#home">
                  Home
                  </a>
                </li>
                <li
                  className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-200 px-4 py-2"
                  onClick={() => setIsMenu(false)}
                >
                 <a href="#Menu"></a>
                  Menu
                </li>
                <li
                  className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-200 px-4 py-2"
                  onClick={() => setIsMenu(false)}
                >
                 <a href="#about"></a>
                  About Us
                </li>
                <li
                  className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-200 px-4 py-2"
                  onClick={() => setIsMenu(false)}
                >
                 <a href="#service">

                  Service
                 </a>
                </li>
              </ul>
              <p
                className="m-2 p-2 rounded-md shadow-md flex item-center justify-center bg-gray-200 gap-3 cursor-pointer hover:bg-gray-300 transition-all duration-100 ease-in-out text-textColor text-base"
                onClick={logout}
              >
                Logout <MdLogout />
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
