"use client";
import React, { useEffect, useState } from 'react'

import styles from './SneakPeak.module.css'
import ReactPlayer from "react-player";
import { IMAGEURLS } from "@/config";

function SneakPeak() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);
    return (
        <div className={styles['sneak-page']}>
            <div className={styles['sneak-page-cont']}>
                <div className={styles['sneak-page-text']}>
                    <span className={styles['sneak-page-head']}>
                        Product sneak peak
                    </span>
                    <ul className={styles['sneak-page-list']}>
                        <li>Create your design workspace</li>
                        <li>View all your drive uploaded files here</li>
                        <li>View all designs here</li>
                        <li>Create parts using custom part nomenclature</li>
                        <li>Create EC’s for approval and EBOM</li>
                        <li>View Part details with EBOM in Tree and Excel view</li>
                    </ul>
                </div>
                <div className={styles['sneak-page-video']}>
                    {isClient && (
                        <ReactPlayer
                            url={IMAGEURLS.demoVideo} // Add a fallback URL
                            controls
                            playing={false}
                            loop={false}
                            muted={false}
                            width="100%"
                            height="100%"
                        />
                    )}
                </div>
            </div>

        </div>
    )
}

export default SneakPeak