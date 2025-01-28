"use client"
import React, { useState } from 'react'
import styles from './WorkFlow.module.css'
import Image from "next/image";
import { IMAGEURLS } from "@/config";
import RequestDemo from './RequestDemo';

function WorkFlowGrids() {
    const [openDemoForm, setOpenDemoForm] = useState(false)
    return (
        <>
        <div className={styles["workflow-page"]} style={{marginTop:'20px'}}>
            <div className={styles["workflow-head"]}>
                <span className={styles["workflow-head-title"]}>Simplify Your Workflow with Cloud PLM & PDM</span>
                <span className={styles["workflow-head-desc"]}>Manage files, Designs, Parts, BOMs, inventory, and purchases effortlessly in one platform.</span>
            </div>
            <div className={styles["workflow-imgs1"]}>
                <div className={styles["horizontal-work-line"]} style={{ top: '-2px' }}></div>
                <div className={styles["horizontal-work-line"]} style={{ top: '-22px' }}></div>
                <div className={styles["horizontal-work-line"]} style={{ top: '203px' }}></div>
                <div className={styles["horizontal-work-line"]} style={{ top: '181px' }}></div>
                {/* <div className={styles["vertical-mobile-work-line"]} style={{ left: '-2px' }}></div>
                <div className={styles["vertical-mobile-work-line"]} style={{ left: '-22px' }}></div>
                <div className={styles["vertical-mobile-work-line"]} style={{ left: '203px' }}></div>
                <div className={styles["vertical-mobile-work-line"]} style={{ left: '181px' }}></div> */}
                {/* <div className={styles["vertical-work-line"]}></div>
                <div className={styles["vertical-work-line"]} style={{ marginRight: '0px' }}></div> */}
                <div className={styles["workflow-img1"]}>
                    <div className={styles["vertical-work-line"]} style={{ left: '0px' }}></div>
                    <div className={styles["vertical-work-line"]} style={{ left: '-20px' }}></div>
                    <Image
                        src={IMAGEURLS.carLogo}
                        alt="Encryption in transit"
                        width={181}
                        height={181}
                    />
                </div>
                {/* <div className={styles["vertical-work-line"]}></div>
                <div className={styles["vertical-work-line"]}></div>
                <div className={styles["vertical-work-line"]}></div>
                <div className={styles["vertical-work-line"]} style={{ marginRight: '0px' }}></div> */}
                <div className={styles["workflow-img1"]}>
                    <div className={styles["vertical-work-line"]} style={{ left: '0px' }}></div>
                    <div className={styles["vertical-work-line"]} style={{ left: '-25px' }}></div>
                    <div className={styles["vertical-work-line"]} style={{ left: '-50px' }}></div>
                    <div className={styles["vertical-work-line"]} style={{ left: '-75px' }}></div>
                    <Image
                        src={IMAGEURLS.latopLogo}
                        alt="Encryption in transit"
                        width={180}
                        height={180}
                    />
                </div>
                {/* <div className={styles["vertical-work-line"]}></div>
                <div className={styles["vertical-work-line"]}></div>
                <div className={styles["vertical-work-line"]}></div>
                <div className={styles["vertical-work-line"]} style={{ marginRight: '0px' }}></div> */}
                <div className={styles["workflow-img1"]}>
                    <div className={styles["vertical-work-line"]} style={{ left: '0px' }}></div>
                    <div className={styles["vertical-work-line"]} style={{ left: '-25px' }}></div>
                    <div className={styles["vertical-work-line"]} style={{ left: '-50px' }}></div>
                    <div className={styles["vertical-work-line"]} style={{ left: '-75px' }}></div>
                    <Image
                        src={IMAGEURLS.droneLogo}
                        alt="Encryption in transit"
                        width={160}
                        height={100}
                    />
                </div>
                {/* <div className={styles["vertical-work-line"]}></div>
                <div className={styles["vertical-work-line"]}></div>
                <div className={styles["vertical-work-line"]}></div>
                <div className={styles["vertical-work-line"]} style={{ marginRight: '0px' }}></div> */}
                <div className={styles["workflow-img1"]}>
                    <div className={styles["vertical-work-line"]} style={{ left: '0px' }}></div>
                    <div className={styles["vertical-work-line"]} style={{ left: '-25px' }}></div>
                    <div className={styles["vertical-work-line"]} style={{ left: '-50px' }}></div>
                    <div className={styles["vertical-work-line"]} style={{ left: '-75px' }}></div>
                    <Image
                        src={IMAGEURLS.robotLogo}
                        alt="Encryption in transit"
                        width={128}
                        height={128}
                    />
                </div>
                {/* <div className={styles["vertical-work-line"]}></div>
                <div className={styles["vertical-work-line"]}></div>
                <div className={styles["vertical-work-line"]}></div>
                <div className={styles["vertical-work-line"]} style={{ marginRight: '0px' }}></div> */}
                <div className={styles["workflow-img1"]}>
                    <div className={styles["vertical-work-line"]} style={{ left: '0px' }}></div>
                    <div className={styles["vertical-work-line"]} style={{ left: '-25px' }}></div>
                    <div className={styles["vertical-work-line"]} style={{ left: '-50px' }}></div>
                    <div className={styles["vertical-work-line"]} style={{ left: '-75px' }}></div>
                    <Image
                        src={IMAGEURLS.craneLogo}
                        alt="Encryption in transit"
                        width={152}
                        height={180}
                    />
                </div>



            </div>
            <button onClick={()=>setOpenDemoForm(!openDemoForm)}>Request demo</button>
        </div>
        
        {openDemoForm && <RequestDemo onclose={()=>setOpenDemoForm(!openDemoForm)}/>}
        </>
        
    )
}

export default WorkFlowGrids