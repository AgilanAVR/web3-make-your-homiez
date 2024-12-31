import React, { useContext, useState } from "react";
import style from "./NavBar.module.css"; //modular css
import Image from "next/image";
import Link from "next/link";
import { Model, Error } from "../index";
import images from "../../assets/index";

//internal imports
import { ChatAppContect } from "../../Context/ChatAppContext";

const NavBar = () => {
  //menus details
  const menuItems = [
    {
      menu: "ALL USERS",
      link: "alluser",   //alluser on the pages component
    },
    {
      menu: "CHAT",
      link: "/",    //index
    },
    {
      menu: "CONTACT",
      link: "/",
    },
    {
      menu: "SETTING",
      link: "/",
    },
    {
      menu: "FAQS",
      link: "/",
    },
    {
      menu: "TERMS OF USE",
      link: "/",
    },
  ];

  //useState
  const [active, setActive] = useState(2);
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  //getting data from the context
  const { account, userName, connectWal, createAccount, error } =
    useContext(ChatAppContect);

  return (
    <div className={style.NavBar}>
      <div className={style.NavBar_box}>
        <div
          className={style.NavBar_box_left}
          style={{
            display: !open ? "block" : "none",
          }}
        >
          <Image
            className={style.logo_image}
            src={images.logo}
            alt="logo"
            width={50}
            height={50}
          />
        </div>
        <div className={style.navBar_box_right}>
          {/*---------------------------------->>>>>> deskotp */}
          <div className={style.navBar_box_right_menu}>
            {!open &&
              menuItems.map((el, i) => {
                return (
                  <div
                    key={i + 1}
                    onClick={() => {
                      setActive(i + 1);
                    }}
                    className={`${style.navBar_box_right_menu_items} ${
                      active == i + 1 ? style.active_button : ""
                    }`}
                  >
                    <Link
                      href={el.link}
                      className={style.navBar_box_right_menu_items_link}
                    >
                      {el.menu}
                    </Link>
                  </div>
                );
              })}
          </div>

          {/*---------------------------------->>>>>> mobile */}
          {open && (
            <div className={style.mobile_menu}>
              {menuItems.map((el, i) => {
                return (
                  <div
                    key={i + 1}
                    onClick={() => {
                      setActive(i + 1);
                    }}
                    className={`${style.mobile_menu_items} ${
                      active == i + 1 ? style.active_button : ""
                    }`}
                  >
                    <Link
                      href={el.link}
                      className={style.mobile_menu_items_link}
                    >
                      {el.menu}
                    </Link>
                  </div>
                );
              })}

              <p className={style.mobile_menu_btn}>
                <Image
                  src={images.close}
                  alt="close"
                  width={50}
                  height={50}
                  onClick={() => {
                    setOpen(false);
                  }}
                />
              </p>
            </div>
          )}

          {/* connect wallet */}
          <div className={style.Navbar_box_right_connect}>
            {account == "" ? (
              <button
                onClick={() => {
                  connectWal();
                }}
              >
                <span>Connect Wallet</span>
              </button>
            ) : (
              <button
                style={{
                  display: !open ? "block" : "none",
                }}
                onClick={() => {
                  setOpenModal(true);
                }}
              >
                <Image
                  src={userName ? images.accountName : images.create2}
                  alt="alternate image"
                  width={20}
                  height={20}
                />{" "}
                <small className={style.Navbar_box_right_connect_name}>
                  {userName || "create Account"}
                </small>
              </button>
            )}
          </div>
          {!open && (
            <div
              className={style.Navbar_box_right_open}
              onClick={() => {
                setOpen(true);
              }}
            >
              <Image src={images.open} alt="open" width={30} height={39} />
            </div>
          )}
        </div>
      </div>

      {/* {----------------> modal component} */}

      {openModal && (
        <div className={style.modalBox}>
          <Model
            openbox={setOpenModal}
            title="WELCOME TO"
            head="CHAT BUDDY"
            info="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam itaque natus illum porro facere eos, obcaecati nostrum non nemo eum"
            smallInfo="Kindly select your name..."
            image={images.hero}
            functionName={createAccount}
            account={account}
          />
        </div>
      )}

      {/* -----------------------------> Error Component  */}
      {error.length > 0 ? (
        <>
          <Error error={error} />
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default NavBar;
