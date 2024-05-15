import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.logo}>Findr</div>
        <div className={styles.menu}></div>
      </div>
    </>
  );
};

export default Navbar;
