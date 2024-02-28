import React from "react";
import styles from "./footer.module.css";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

const Footer = () => {
  return (
    <>
      <div className={styles.footerContainer}>
        <div className={styles.footer}>
          <div className={styles.footerIcons}>
            <a
              className={styles.footerLinks}
              href="https://www.linkedin.com/in/sahitya-kumar-choubey"
              target="_blank"
            >
              <FaLinkedin className={styles.footerIcon} />
            </a>
            <a
              className={styles.footerLinks}
              href="https://github.com/SuperSahitya"
              target="_blank"
            >
              <FaGithubSquare className={styles.footerIcon} />
            </a>
            <a
              className={styles.footerLinks}
              href="mailto:@sahityakumarchoubey@gmail.com"
              target="_blank"
            >
              <GrMail className={styles.footerIcon} />
            </a>
            <div className={styles.copyright}>
              &copy; 2024 Sahitya Kumar <span className={styles.lastName}>Choubey</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
