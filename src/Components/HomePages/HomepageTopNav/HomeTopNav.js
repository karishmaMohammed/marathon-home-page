"use client";

import React, {  useState,useEffect } from "react";
import { IMAGEURLS } from "@/config";
import Image from "next/image";
import HomeLanding from "./HomeLanding";
import HomeNavs from "./HomeNavs";
import Link from 'next/link'; 
import styles from './HomeTopNav.module.css'; 

function HomeTopNav() {
  const [openMenu, setMenuOpen] = useState(false);
  

  //  useEffect(() => {
  //   const memberDetails = localStorage.getItem('token');
  //   if (memberDetails) {
  //     window.location.href = 'https://marathon-os.com/dashboard'; // Redirect to the dashboard
  //   } else {
  //     window.location.href = '/'; // Redirect to the login page
  //   }
  // }, []);
  
  const HnadleNavigate = ()=>{
    window.location.href = 'https://marathon-os.com/login'
  }

   const handleMenuOpen = (event) => {
    event.stopPropagation(); 
    setMenuOpen(true);
  };
  

  const handleCloseMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
     
        <div className={styles['home-page-top']}>
          <Image src={IMAGEURLS.logo} alt="Marathon Logo" width={500} 
          height={500} />
          <div className={styles['home-page-navs']}>
            {/* Use Link for navigation */}
            <Link href="#why-us">Why us?</Link>
            <Link href="#capabilities">Capabilities</Link>
            <Link href="#security">Security</Link>
           
          </div>
          <div className={styles['home-pg-btns']}>
            {/* buttons */}
            <button className={styles['try-demo']}>Request demo</button>
            {/* <button className={styles['home-login']} onClick={HnadleNavigate}>Login</button> */}
          </div>
          <div className={styles['home-pg-menu']} onClick={(e)=>handleMenuOpen(e)}>
            <Image src={IMAGEURLS.menu} alt="Menu Icon" width={500} 
          height={500}/>
          </div>
        </div>
        {openMenu && <HomeNavs onClose={handleCloseMenu} HnadleNavigate={HnadleNavigate}/>}
       
     
    </>
  );
}

export default HomeTopNav;
