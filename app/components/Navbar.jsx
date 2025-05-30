import Link from "next/link";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.logo}>
          <Link href={"/"} className={styles.link}>
            Findr
          </Link>
        </div>
        {/* <div className={styles.menu}>
          <Link href={"/analysis"} className={styles.link}>
            Analysis
          </Link>
        </div> */}
      </div>
    </>
  );
};

export default Navbar;
