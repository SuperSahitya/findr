import React from "react";
import styles from "./footer.module.css";
import { FaLinkedin, FaGithubSquare, FaRegCopyright } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import Link from 'next/link'

const Footer = () => {
  return (
    <>
      <div className={styles.footerContainer}>
        <div className={styles.footer}>
          <div className={styles.footerIcons}>
            <Link
              className={styles.footerLinks}
              href="https://www.linkedin.com/in/sahitya-kumar-choubey"
              target="_blank"
            >
              <FaLinkedin className={styles.footerIcon} />
            </Link>
            <Link
              className={styles.footerLinks}
              href="https://github.com/SuperSahitya"
              target="_blank"
            >
              <FaGithubSquare className={styles.footerIcon} />
            </Link>
            <Link
              className={styles.footerLinks}
              href="mailto:@sahityakumarchoubey@gmail.com"
              target="_blank"
            >
              <GrMail className={styles.footerIcon} />
            </Link>
            <div className={styles.copyright}>
              <FaRegCopyright className={styles.copyrightIcon} />{" "}
              <span>
                2024 Sahitya Kumar{" "}
                <span className={styles.lastName}>Choubey</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
