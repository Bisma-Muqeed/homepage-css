import React from 'react'
import style from "./Footer.module.css"         
import { FaPhoneAlt ,FaTwitter } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io5";


const Footer = () => {
  return (
    <div className={style.footerContainer}>
      <div className={style.footerHeading}>
        <h1>All Rights Reserved</h1>
      </div>
      <div className={style.iconContainer}>
        <FaPhoneAlt className={style.icon} />
        <IoLogoFacebook className={style.icon} />
        <FaTwitter className={style.icon} />
      </div>
    </div>
  );
};

export default Footer;