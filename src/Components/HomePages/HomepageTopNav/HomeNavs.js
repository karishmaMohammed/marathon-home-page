import React from 'react';
import { useRouter } from "next/navigation"; // Use useRouter from Next.js for client-side navigation
import styles from './HomeTopNav.module.css'; // Import your CSS module

function HomeNavs({ onClose,openDemoForm, setOpenDemoForm }) {
  
  const router = useRouter(); // Initialize the useRouter hook for navigation

  const handleCloseMenu = () => {
    onClose(); // Close the menu using the onClose prop
  };

  

  return (
    <div className={styles['menu-page']}>
      <div className={styles['menu-close-icon']}>
        <span onClick={handleCloseMenu}>close x</span>
      </div>
      <div className={styles['menu-navs']}>
        {/* Use <a> tags for links or <Link> for navigation */}
        <a href="#why-us" style={{textDecoration:'none'}} onClick={handleCloseMenu}>Why us?</a>
        <a href="#capabilities" style={{textDecoration:'none'}} onClick={handleCloseMenu}>Capabilities</a>
        {/* <a href="#compliance" onClick={handleCloseMenu}>Compliance</a> */}
        <a href="#security" style={{textDecoration:'none'}} onClick={handleCloseMenu}>Security</a>
      </div>
      <div className={styles['menu-buttons']}>
      <button className={styles['try-demo']} onClick={() => setOpenDemoForm(!openDemoForm)}>Request demo</button>
        {/* <button className={styles['home-login-menu']} onClick={HnadleNavigate}>
          Login
        </button> */}
      </div>
    </div>
  );
}

export default HomeNavs;
