import React from "react";
import Image from "next/image"; // Import Image from Next.js
import styles from './HomeTopNav.module.css'; // Import your CSS module
import { IMAGEURLS } from "@/config";


function HomeLanding() {
    return (
        <div className={styles['home-landing-page']}>
            <div className={styles['home-landing-container']}>
                <div className={styles['home-landing-content']}>
                   
                    <div className={styles['home-landing-title']} >
                        <span style={{color:'#610bee'}}>Hardware</span> Lifecycle Management OS
                    </div>
                    <div className={styles['home-landing-description']}>
                        All-in-one cloud software suite designed to optimize your Engineering, 
                        Supply Chain and Manufacturing processes.
                    </div>
                    <div className={styles['home-landing-btns']}>

                        <button className={styles['home-landing-try-demo']}>Request a Demo</button>
                    </div>
                </div>
                <Image
                    src={IMAGEURLS.hardwareLogo}
                    alt="Girl Image"
                    className={styles['home-landing-girl-img']}
                    loading="lazy"
                    width={593} // Provide width for Image component
                    height={475} // Provide height for Image component
                />
                {/* <Image 
          src={`${ASSET_PREFIX_URL}girl_img_mobile.webp`} 
          alt="Girl Image Mobile" 
          className={styles['home-landing-girl-img-mobile']} 
          style={{ height: '250px', width: '275px' }} 
          width={275} // Provide width for Image component
          height={250} // Provide height for Image component
        /> */}
            </div>
            <div className={styles['home-landing-bottom-img']}>
                {/* <Image 
          src={`${ASSET_PREFIX_URL}desktop-ticket-list.webp`} 
          alt="Desktop Ticket List" 
          width={800} // Provide width for Image component
          height={400} // Provide height for Image component
        /> */}
            </div>
            {/* <div className={styles['home-landing-bottom-img-mobile']}>
        <Image 
          src={`${ASSET_PREFIX_URL}desktop-ticket-list-fullimg.webp`} 
          alt="Desktop Ticket List Full Image" 
          width={800} // Provide width for Image component
          height={400} // Provide height for Image component
        />
      </div> */}
        </div>
    );
}

export default HomeLanding;
