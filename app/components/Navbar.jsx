import styles from "./navbar.module.css";
import { GiCrackedAlienSkull } from "react-icons/gi";

const Navbar = () => {
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.logo}>Findr</div>
        <div className={styles.menu}>
          <GiCrackedAlienSkull className={styles.icon}/>
        </div>
      </div>
    </>
  );
};

export default Navbar;
