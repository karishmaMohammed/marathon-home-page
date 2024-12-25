import React from 'react'
import { IMAGEURLS } from "@/config";
import Image from "next/image";
import styles from './ManufactureRd.module.css'

function ManufactureRd() {
  return (
    <div className={styles['manufac-rd-cont-div']}>
        <div className={styles['manufac-rd-cont']}>
            <div className={styles['manufac-rd-cont-left']}>
                <span className={styles['manufac-rd-cont-left-text-1']}>MARATHON-OS</span>
                <span className={styles['manufac-rd-cont-left-text-2']}>Simplifying Hardware Manufacturing & R&D</span>
                <span className={styles['manufac-rd-cont-left-text-3']}>Streamline your hardware manufacturing and R&D processes with Marathon, 
                    the complete SaaS solution covering every step from design to production.</span>
            </div>
            <div className={styles['manufac-rd-cont-right']}>
                <div className={styles['manufac-rd-cont-right-1']}>
                    <Image src={IMAGEURLS.easyToUse} alt="easy to use" width={56} height={56}/>
                    <div className={styles['manufac-rd-cont-right-desc']}>
                        <span className={styles['manufac-rd-cont-right-desc1']}>User-Friendly Interface </span>
                        <span className={styles['manufac-rd-cont-right-desc2']}>Intuitive design that makes all your workflows easy to customize and implement.</span>
                    </div>
                </div>
                <div className={styles['manufac-rd-cont-right-1']}>
                    <Image src={IMAGEURLS.teamwork} alt="easy to use" width={56} height={56}/>
                    <div className={styles['manufac-rd-cont-right-desc']}>
                        <span className={styles['manufac-rd-cont-right-desc1']}>Easy To Collaborate</span>
                        <span className={styles['manufac-rd-cont-right-desc2']}>Collaborate asynchronously with automatic data updates to keep everyone aligned.</span>
                    </div>
                </div>
                <div className={styles['manufac-rd-cont-right-1']}>
                    <Image src={IMAGEURLS.automation} alt="easy to use" width={56} height={56}/>
                    <div className={styles['manufac-rd-cont-right-desc']}>
                        <span className={styles['manufac-rd-cont-right-desc1']}>Automated Workflows </span>
                        <span className={styles['manufac-rd-cont-right-desc2']}>Intuitive design that makes all your workflows easy to customize and implement</span>
                    </div>
                </div>
                <div className={styles['manufac-rd-cont-right-1']}>
                    <Image src={IMAGEURLS.automation} alt="easy to use" width={56} height={56}/>
                    <div className={styles['manufac-rd-cont-right-desc']}>
                        <span className={styles['manufac-rd-cont-right-desc1']}>Automated Workflows </span>
                        <span className={styles['manufac-rd-cont-right-desc2']}>Save time with processes that run automatically.</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ManufactureRd