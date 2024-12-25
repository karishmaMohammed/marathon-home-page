import React from 'react'
import styles from './AddOn.module.css'
import { IMAGEURLS } from "@/config";
import Image from "next/image";

function Addon() {
    return (
        <div className={styles['addon-cont-div']}>
            <div className={styles['addon-cont-box']}>
                <div className={styles['addon-cont-text']}>
                    <span className={styles['addon-cont-text1']}>Add-ons</span>
                    <span className={styles['addon-cont-text2']}>While you are optimizing your engg and manufacturing process, you can also manage departments, tickets</span>
                </div >
                <div className={styles['addon-cont-flex']}>
                    <div className={styles['addon-cont-flex-boxes']}>
                        <div className={styles['addon-cont-flex-img']} >
                            <Image src={IMAGEURLS.orgHierarchy} alt="easy to use" width={250} height={200} />
                        </div>
                        <div className={styles['addon-cont-flex-desc']}>
                            <span className={styles['addon-cont-flex-desc1']}>Organization management</span>
                            <span className={styles['addon-cont-flex-desc2']}>Easily create, organize, and track every component with Marathon’s intuitive parts database.
                                Find what you need in seconds with advanced search and filtering.</span>
                        </div>
                    </div>
                    <div className={styles['addon-cont-flex-boxes']} >
                        <div className={styles['addon-cont-flex-img']} style={{background:'rgba(194, 235, 220, 0.50)'}}>
                            <Image src={IMAGEURLS.orgHierarchy} alt="easy to use" width={250} height={200} />
                        </div>
                        <div className={styles['addon-cont-flex-desc']}>
                            <span className={styles['addon-cont-flex-desc1']}>Customizable tickets</span>
                            <span className={styles['addon-cont-flex-desc2']}>Easily create, organize, and track every component with Marathon’s 
                                intuitive parts database. Find what you need in seconds with advanced search and filtering.</span>
                        </div>
                    </div>
                    <div className={styles['addon-cont-flex-boxes']} >
                        <div className={styles['addon-cont-flex-img']} style={{background:'rgba(201, 229, 249, 0.50)'}}>
                            <Image src={IMAGEURLS.orgHierarchy} alt="easy to use" width={250} height={200} />
                        </div>
                        <div className={styles['addon-cont-flex-desc']}>
                            <span className={styles['addon-cont-flex-desc1']}>Access control</span>
                            <span className={styles['addon-cont-flex-desc2']}>Easily create, organize, and track every component with Marathon’s 
                                intuitive parts database. Find what you need in seconds with advanced search and filtering.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Addon