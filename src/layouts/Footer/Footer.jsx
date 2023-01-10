import React from "react";
import FooterStyle from "./FooterStyle.module.css";
import YadikaLogo from "/image/logo/yadika.png";
import MailIcon from "/image/icons/mail.png";

const Footer = () => {
  return (
    <div>
      <div className={FooterStyle.footer}>
        <div className={FooterStyle.logo}>
          <img src={YadikaLogo} alt="" />
          <div>
            <p
              style={{
                fontSize: "18px",
                fontWeight: 400,
              }}
            >
              <b>SMK</b> Yadika Soreang
            </p>
            <p
              style={{
                fontSize: "12px",
                marginTop: "10px",
              }}
            >
              Jl. Raya Soreang, Cingcin, Kec. Soreang, <br /> Kabupaten Bandung,
              Jawa Barat 40921
            </p>
          </div>
        </div>
        <div className={FooterStyle.info}>
          <div className={FooterStyle.item}>
            <img src={MailIcon} alt="" />
            <p>User@gmail.com</p>
          </div>
          <div className={FooterStyle.item}>
            <img src={MailIcon} alt="" />
            <p>User@gmail.com</p>
          </div>
        </div>
      </div>
      <div className={FooterStyle.underFooter}>
        <div className={FooterStyle.copyright}>
          <p>
            All rights reserve to{" "}
            <b
              style={{
                color: "#010E3D",
              }}
            >
              SMK YADIKA SOREANG
            </b>{" "}
            2022 Ltd.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
