import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.logo}>Findr</div>
        <div className={styles.menu}>
          <div>Log In</div>
          <div>Sign In</div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
