"use client"
import React, { useState } from 'react'
import styles from './WorkFlow.module.css'
import Image from "next/image";
import { IMAGEURLS } from "@/config";
import RequestDemo from './RequestDemo';
import { Boxes } from "./ui/background-boxes"; // Adjust path if necessary
// import { cn } from "@/lib/utils";

function WorkFlow({openDemoForm, setOpenDemoForm}) {
    // const [openDemoForm, setOpenDemoForm] = useState(false)
    return (
    


            
            <div className={styles["workflow-page"]} style={{ position: 'relative' }}>

                <Boxes />


                <div className={styles["workflow-head"]}>
                    <span className={styles["workflow-head-title"]}>Simplify Your Workflow with Cloud PLM & PDM</span>
                    <span className={styles["workflow-head-desc"]}>Manage files, Designs, Parts, BOMs, inventory, and purchases effortlessly in one platform.</span>
                </div>
                <div className={styles["workflow-imgs"]}>

                    <div className={styles["workflow-img"]}>

                        <Image
                            src={IMAGEURLS.carLogo}
                            alt="Encryption in transit"
                            width={181}
                            height={181}
                        />
                    </div>

                    <div className={styles["workflow-img"]}>

                        <Image
                            src={IMAGEURLS.latopLogo}
                            alt="Encryption in transit"
                            width={180}
                            height={180}
                        />
                    </div>

                    <div className={styles["workflow-img"]}>

                        <Image
                            src={IMAGEURLS.droneLogo}
                            alt="Encryption in transit"
                            width={160}
                            height={100}
                        />
                    </div>

                    <div className={styles["workflow-img"]}>

                        <Image
                            src={IMAGEURLS.robotLogo}
                            alt="Encryption in transit"
                            width={128}
                            height={128}
                        />
                    </div>

                    <div className={styles["workflow-img"]}>

                        <Image
                            src={IMAGEURLS.craneLogo}
                            alt="Encryption in transit"
                            width={152}
                            height={180}
                            className={styles["workflow-crane-img"]}
                        />
                    </div>



                </div>
                <button onClick={() => setOpenDemoForm(!openDemoForm)}>Request demo</button>
            </div>

         
   

    )
}

export default WorkFlow